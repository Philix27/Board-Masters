'use client';
import { useEffect, useState } from 'react';
import socketIO, { Socket } from 'socket.io-client';

const WS_URL = 'ws://localhost:9400';

type ISocketEvents = {
  JOIN_ROOM: string;
  CREATE_ROOM: string;
  MOVE_PIECE: string;
  LEAVE_ROOM: string;
  USER_DISCONNECTED: string;
};

const SocketEvents: ISocketEvents = {
  JOIN_ROOM: 'JOIN_ROOM',
  CREATE_ROOM: 'CREATE_ROOM',
  MOVE_PIECE: 'MOVE_PIECE',
  LEAVE_ROOM: 'LEAVE_ROOM',
  USER_DISCONNECTED: 'USER_DISCONNECTED',
};

export const useSocket = () => {
  const ws = socketIO(WS_URL);
  const [socket, setSocket] = useState<Socket | null>(null);
  // const user = useUser();
  useEffect(() => {
    // if (!user) return;
    setSocket(ws);
    ws.connect();

    socketHandler(ws);

    return () => {
      ws.disconnect();
      ws.close();
    };
  }, []);

  const emitter = (params: keyof ISocketEvents, arg: any) => socket!.emit<typeof params>(params, arg);

  return {
    socket,
    emitter,
  };
};

function socketHandler(socket: Socket) {
  socket.on('message', function (data) {
    console.log('Received message client:', data);
  });
  socket.on(SocketEvents.CREATE_ROOM, (data) => {});
  socket.on(SocketEvents.JOIN_ROOM, (data) => {});
  socket.on(SocketEvents.LEAVE_ROOM, (data) => {});
  socket.on(SocketEvents.MOVE_PIECE, (data) => {});
}
//
