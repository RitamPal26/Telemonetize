"use client";

import { io } from "socket.io-client";

const BACKEND_URL = "https://telemonetize.onrender.com"; 

const socket = io(BACKEND_URL, {
  path: "/socket.io/",
  withCredentials: true,
  transports: ["polling", "websocket"],
  autoConnect: true,
});

export default socket;