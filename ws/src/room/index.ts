import { Socket } from 'socket.io';
import { SocketEvents } from '@repo/rpc';
import { GameService } from '@repo/rpc/game/service';

interface IRoomParams {
  roomId: string;
  peerId: string;
}

export function roomHandler(socket: Socket, gameService: GameService) {
  socket.on(SocketEvents.CREATE_ROOM, async (userAddress: string) => {
    try {
      const res = await gameService.create({
        userAddress,
      });
      console.log('user created the room');
      socket.emit(SocketEvents.CREATE_ROOM, { gameId: res.gameId });
    } catch (error) {}
  });

  socket.on(SocketEvents.MOVE_PIECE, async (payload: { userAddress: string; from: string; to: string }) => {
    console.log('user moved a piece room', payload);
    try {
      const res = await gameService.movePiece({
        userAddress: payload.userAddress,
        from: payload.from,
        to: payload.to,
      });

      socket.to('002').emit(SocketEvents.MOVE_PIECE, { from: res.from, to: res.to });
    } catch (error) {}
  });

  socket.on(SocketEvents.LEAVE_ROOM, async ({ peerId, roomId }: IRoomParams) => {
    socket.to(roomId).emit(SocketEvents.USER_DISCONNECTED, peerId);
  });
}
