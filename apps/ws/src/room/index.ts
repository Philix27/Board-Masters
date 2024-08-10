import { Socket } from 'socket.io';
import { ApiService, SocketEvents } from '@repo/rpc';

const rooms: Record<string, Record<string, IUser>> = {};
const chats: Record<string, IMessage[]> = {};
interface IUser {
  peerId: string;
  userName: string;
}

interface IRoomParams {
  roomId: string;
  peerId: string;
}

interface IJoinRoomParams extends IRoomParams {
  userName: string;
}
interface IMessage {
  content: string;
  author?: string;
  timestamp: number;
}

export const roomHandler = (socket: Socket) => {
  const gameService = new ApiService.game();

  const createGameRoom = async (userAddress: string) => {
    try {
      const res = await gameService.create({
        userAddress,
      });
      console.log('user created the room');
      socket.emit(SocketEvents.CREATE_ROOM, { gameId: res.gameId });
    } catch (error) {}
  };

  const movePiece = async (userAddress: string, from: string, to: string) => {
    try {
      const res = await gameService.movePiece({
        userAddress,
        from,
        to,
      });
      console.log('user created the room');
      socket.to(res.gameId).emit('move-piece', { from: res.from, to: res.to });
    } catch (error) {}
  };

  //   const joinRoom = ({ roomId, peerId, userName }: IJoinRoomParams) => {
  //     if (!rooms[roomId]) rooms[roomId] = {};
  //     if (!chats[roomId]) chats[roomId] = [];
  //     socket.emit('get-messages', chats[roomId]);
  //     console.log('user joined the room', roomId, peerId, userName);
  //     rooms[roomId][peerId] = { peerId, userName };
  //     socket.join(roomId);
  //     socket.to(roomId).emit('user-joined', { peerId, userName });
  //     socket.emit('get-users', {
  //       roomId,
  //       participants: rooms[roomId],
  //     });

  //     socket.on('disconnect', () => {
  //       console.log('user left the room', peerId);
  //       leaveRoom({ roomId, peerId });
  //     });
  //   };

  const leaveRoom = ({ peerId, roomId }: IRoomParams) => {
    // rooms[roomId] = rooms[roomId]?.filter((id) => id !== peerId);
    socket.to(roomId).emit(SocketEvents.USER_DISCONNECTED, peerId);
  };

  socket.on(SocketEvents.CREATE_ROOM, createGameRoom);
  socket.on(SocketEvents.MOVE_PIECE, movePiece);
  //   socket.on('join-room', joinRoom);
  socket.on(SocketEvents.LEAVE_ROOM, leaveRoom);
};
