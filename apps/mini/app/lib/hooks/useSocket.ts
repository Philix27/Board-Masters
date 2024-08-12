import { useEffect, useState } from 'react';
import socketIO, { Socket } from 'socket.io-client';

const WS_URL = 'ws://localhost:9400';
const ws = socketIO(WS_URL);

export const useSocket = () => {
  // const [socket, setSocket] = useState<Socket | null>(null);
  // // const user = useUser();
  // useEffect(() => {
  //   // if (!user) return;
  //   setSocket(ws);
  //   ws.connect();
  //   return () => {
  //     ws.disconnect();
  //     ws.close();
  //   };
  // }, []);
  // function emitter(params: keyof ISocket, arg: any) {
  //   // const emit = ;
  //   // return emit(params, arg);
  //   return socket?.emit<typeof params>(params, arg);
  // }
  // return {
  //   socket,
  //   emitter,
  // };
};
//
