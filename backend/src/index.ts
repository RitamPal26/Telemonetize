import "dotenv/config";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { Server } from "socket.io";
import { createServer } from "node:http"; // Import Node's native server
import { getRequestListener } from "@hono/node-server"; // Import adapter

import initBot, { initBot } from "./bot/index.js";
import routes from "./routes/v1.js";
import errorHandler from "./middleware/error.middleware.js";
import db from "./lib/database/db.js";
import configCors from "./middleware/cors.middleware.js";
import { auth } from "./lib/better-auth/auth.js";
import addSession from "./middleware/session.middleware.js";
import sessionValidator from "./middleware/unauthorized-access.middleware.js";
import { CLIENT_DOMAIN } from "./lib/env.js";

const app = new Hono();
const port = Number(process.env.PORT) || 8080;

app.use(logger());
app.use(addSession);
app.use(configCors);
app.use(sessionValidator);

app.onError(errorHandler);

// Database
db();

// Auth Route
app.on(["POST", "GET"], "/api/auth/**", (c) => {
  return auth.handler(c.req.raw);
});

// Main Route
app.get("/", (c) => c.text("Welcome to the Telegram Bot API!"));

app.post("/api/v1/telegram/webhook", async (c) => {
  try {
    const update = await c.req.json();
    // Pass the update to the bot so it can reply
    bot.processUpdate(update);
    return c.json({ ok: true });
  } catch (err) {
    console.error("Webhook processing error:", err);
    return c.json({ error: "Failed to process update" }, 500);
  }
});

// Routes
app.route("/api", routes);

// Telegram Bot
initBot();

// 1. Convert Hono app to a Node.js request listener
const honoListener = getRequestListener(app.fetch);

// 2. Create the Node.js Server with MANUAL ROUTING
const httpServer = createServer((req, res) => {
  if (req.url && (req.url.startsWith("/socket.io/") || req.url.startsWith("/socket.io?"))) {
    return;
  }

  honoListener(req, res);
});

// 3. Attach Socket.io to the server
const io = new Server(httpServer, {
  path: "/socket.io/",
  cors: {
    origin: CLIENT_DOMAIN,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

// WebSocket Connection Setup
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("join", (key) => {
    socket.join(key);
    console.log(`Socket ${socket.id} joined room: ${key}`);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

// 4. Start listening
httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { io };