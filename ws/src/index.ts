import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { AppRepository } from "./service/repo";
import { PrismaClient } from "@prisma/client";
import { roomHandler } from "./service/socket";

const app = express();

app.get("/health", (_, res) => {
  res.send("Server is running");
});

app.use(cors);
const port = 9400;
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  const service = new AppRepository(new PrismaClient());
  roomHandler(socket, service);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(port, () => {
  console.log(`listening on :${port}`);
});
