import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";
import app from "./app.js";
import connectDB from "./lib/db.js";

dotenv.config();

// Connect DB
connectDB();

const server = http.createServer(app);

export const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

const userSocketMap = {}; // {userId: socketId}

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId) userSocketMap[userId] = socket.id;

  // io.emit() is used to send events to all the connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

const PORT = process.env.PORT;
server.listen(5001, () => {
  console.log(`Server is running on port ${PORT}`);
});
