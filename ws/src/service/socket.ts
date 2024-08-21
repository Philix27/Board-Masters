import { Socket } from "socket.io";
import { AppRepository } from "./repo";
import { Chess } from "chess.js";

interface IRoomParams {
  roomId: string;
  peerId: string;
}

const SocketEvents = {
  JOIN_ROOM: "JOIN_ROOM",
  CREATE_ROOM: "CREATE_ROOM",
  MOVE_PIECE: "MOVE_PIECE",
  LEAVE_ROOM: "LEAVE_ROOM",
  USER_DISCONNECTED: "USER_DISCONNECTED",
};

export function roomHandler(
  socket: Socket,
  gameService: AppRepository,
  board: Chess
) {
  socket.on(SocketEvents.JOIN_ROOM, async (userAddress: string) => {
    console.log("SocketEvents.CREATE_ROOM");
    try {
      const res = await gameService.createGame({
        userId: userAddress,
      });

      socket.join(res.id);
      socket.to(res.id).emit(SocketEvents.CREATE_ROOM, res);
    } catch (error) {}
  });

  socket.on(
    SocketEvents.MOVE_PIECE,
    async (payload: {
      from: string;
      to: string;
      playerId: string;
      gameId: string;
    }) => {
      console.log("SocketEvents.MOVE_PIECE", payload);
      socket.emit("message", {
        from: payload.from,
        to: payload.to,
      });
      try {
        const res = await gameService.makeMove({
          playerId: payload.playerId,
          gameId: payload.gameId,
          from: payload.from,
          to: payload.to,
        });

        socket.to(payload.gameId).emit(SocketEvents.MOVE_PIECE, {
          from: payload.from,
          to: payload.to,
        });
      } catch (error) {
        console.error("Oops an err ocurred", error);
      }
    }
  );

  socket.on(
    SocketEvents.LEAVE_ROOM,
    async ({ peerId, roomId }: IRoomParams) => {
      socket.to(roomId).emit(SocketEvents.USER_DISCONNECTED, peerId);
    }
  );
}
