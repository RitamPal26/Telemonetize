import "dotenv/config";
import { Hono } from "hono";
import { logger } from "hono/logger";
import { Server } from "socket.io";
import { createServer } from "node:http"; // Import Node's native server
import { getRequestListener } from "@hono/node-server"; // Import adapter

import { initBot } from "./bot/index.js";
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

// Middleware stack
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

// Routes
app.route("/api", routes);

// Telegram Bot
initBot();

// 1. Create a Node.js HTTP server that uses Hono to handle requests
const httpServer = createServer(getRequestListener(app.fetch));

// 2. Attach Socket.io to this HTTP server
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

// 3. Start listening
httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { io };