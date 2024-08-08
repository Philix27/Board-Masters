import { useEffect, useState } from 'react';
import socketIO from 'socket.io-client';

const WS_URL = 'ws://localhost:5656/ws';
// const WS_URL = process.env.WS_URL ?? 'ws://localhost:5050/ws';

export const useSocket = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  // const user = useUser();

  useEffect(() => {
    // if (!user) return;
    const ws = new WebSocket(`${WS_URL}`);
    // const ws = socketIO(WS_URL);
    // const ws = new WebSocket(`${WS_URL}?token=${user.token}`);

    ws.onopen = () => {
      setSocket(ws);
    };

    ws.onclose = () => {
      setSocket(null);
    };

    return () => {
      ws.close();
    };
  }, []);

  return socket;
};
