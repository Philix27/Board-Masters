'use client';
import { Chess, Color, PieceSymbol, Square } from 'chess.js';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import socketIO, { Socket } from 'socket.io-client';
import { IEventsReturn, ISocketEvents, SocketEvents, constructSocketEmitter } from './IEvents';

const WS_URL = 'ws://localhost:9400';

export const useSocket = () => {
  const ws = socketIO(WS_URL);
  const [meta, setMeta] = useState<{
    pl1: string;
    pl2: string;
  }>();
  const [socket, setSocket] = useState<Socket | null>(null);
  const [chess, setChess] = useState<Chess>(new Chess());
  const [chessBoard, setChessBoard] = useState<
    ({
      square: Square;
      type: PieceSymbol;
      color: Color;
    } | null)[][]
  >(chess.board());

  useEffect(() => {
    if (!socket) {
      setSocket(ws);
      ws.connect();
    }

    socketListener(ws, setChess, chess, setChessBoard);
    return () => {
      ws.disconnect();
      ws.close();
    };
  }, []);

  const quickEmitter = (params: keyof ISocketEvents, arg: any) => socket!.emit<typeof params>(params, arg);

  return {
    socket,
    emitter: constructSocketEmitter(socket!),
    chessState: chess,
    setChessState: setChess,
    chessBoard,
    quickEmitter,
  };
};

function socketListener(
  socket: Socket,
  setChess: Dispatch<SetStateAction<Chess>>,
  chess: Chess,
  setChessBoard: Dispatch<
    SetStateAction<
      ({
        square: Square;
        type: PieceSymbol;
        color: Color;
      } | null)[][]
    >
  >
) {
  socket.on('message', function (data) {
    console.log('Received message client:', data);
  });
  socket.on(SocketEvents.INIT_GAME, (data) => {
    setChessBoard(chess.board());
  });

  socket.on(SocketEvents.MOVE_PIECE, (data: IEventsReturn['MOVE_PIECE']) => {
    console.log('Move piece client');
    try {
      chess.move({
        from: data.from,
        to: data.to,
      });
    } catch (error) {}
    // setChess();
  });

  socket.on(SocketEvents.CREATE_ROOM, (data: IEventsReturn['CREATE_ROOM']) => {});
  socket.on(SocketEvents.JOIN_ROOM, (data: IEventsReturn['JOIN_ROOM']) => {});
  socket.on(SocketEvents.LEAVE_ROOM, (data: IEventsReturn['LEAVE_ROOM']) => {});
  socket.on(SocketEvents.EXIT_GAME, (data: IEventsReturn['EXIT_GAME']) => {});
  socket.on(SocketEvents.GAME_ADDED, (data: IEventsReturn['GAME_ADDED']) => {});
  socket.on(SocketEvents.GAME_ALERT, (data: IEventsReturn['GAME_ALERT']) => {});
  socket.on(SocketEvents.GAME_ENDED, (data: IEventsReturn['GAME_ENDED']) => {});
  socket.on(SocketEvents.GAME_JOINED, (data: IEventsReturn['GAME_JOINED']) => {});
  socket.on(SocketEvents.GAME_OVER, (data: IEventsReturn['GAME_OVER']) => {});
  socket.on(SocketEvents.GAME_TIME, (data: IEventsReturn['GAME_TIME']) => {});
}
//
