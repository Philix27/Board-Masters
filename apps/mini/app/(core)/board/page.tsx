'use client';
import { useState } from 'react';
import { Chess, Move, Square } from 'chess.js';
import React from 'react';
import { Navbar } from '../_comps';
import { customPieces } from './piece';
import { Chessboard } from 'react-chessboard';
import { AppButton, TextP } from '@repo/ui';
import socketIO, { Socket } from 'socket.io-client';
import { Piece } from 'react-chessboard/dist/chessboard/types';
import { AppStores } from '@/app/lib';
import { Tabs } from './Tabs';
import { BoardMoves, IBoardMoves } from './Moves';
// import { SocketEvents } from '@repo/rpc';
const WS_URL = 'ws://localhost:9400';
const ws = socketIO(WS_URL);

export default function BoardPage() {
  const chess = new Chess();
  const [game, setGame] = useState(chess);
  const [gameMoves, setGameMoves] = useState<IBoardMoves[]>([]);
  const [counter, setCounter] = useState(0);
  const [isGameStarted, setGameStarted] = useState(false);
  let timeoutId: NodeJS.Timeout;
  const store = AppStores.useSettingsStore();

  function makeAMove(
    move:
      | string
      | {
          from: string;
          to: string;
          promotion?: string;
        }
  ) {
    const gameCopy = game;
    let result = null;

    try {
      result = gameCopy.move(move);
    } catch (e) {
      result = null;
    }
    setGame(gameCopy);

    return result;
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();
    if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0) return; // exit if the game is over
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    const move = makeAMove(possibleMoves[randomIndex]!);
    if (move) {
      setGameMoves((prev) => {
        return [
          ...prev,
          {
            piece: `${move.color}${move.piece.toUpperCase()}` as Piece,
            from: move.from,
            to: move.to,
          },
        ];
      });
    }
  }

  function onDrop(sourceSquare: Square, targetSquare: Square, piece: Piece) {
    console.log('onDrop called ');
    let move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    });

    if (move === null) return false;

    ws.emit('MOVE_PIECE', {
      from: move.from,
      to: move.to,
      userAddress: '0x467372',
    });

    setGame(game);

    trackMoves(move, piece);

    startCounter();

    setTimeout(makeRandomMove, 200);

    return true;
  }

  function trackMoves(move: Move, piece: Piece) {
    setGameMoves((prev) => {
      return [
        ...prev,
        {
          piece,
          from: move.from,
          to: move.to,
        },
      ];
    });
  }

  function startCounter() {
    if (isGameStarted) return;

    setGameStarted(true);
    setInterval(() => {
      setCounter((prev) => {
        return prev + 1;
      });
    }, 1000);
  }

  return (
    <>
      <Navbar title={'Board'} isBack />
      <div className="px-6 mt-[50px]">
        <div className="w-full flex items-center justify-between py-2">
          <TextP v="p3">{counter}</TextP>

          {/* <AppButton className="w-fit py-[1px]" onClick={() => {}}>
            Stop
          </AppButton> */}
        </div>
        <Chessboard
          id={'BasicBoard'}
          allowDragOutsideBoard={false}
          arePiecesDraggable={true}
          position={game.fen()}
          onPieceDrop={onDrop}
          showBoardNotation={true}
          customBoardStyle={{ borderRadius: '5px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)' }}
          customDarkSquareStyle={{ backgroundColor: '#5892A1' }}
          // customDarkSquareStyle={{ backgroundColor: '#58A181' }}
          customLightSquareStyle={{ backgroundColor: '#C5C5C5' }}
          customDropSquareStyle={{ boxShadow: 'inset 0 0 1px 6px rgba(255, 255, 255, 0.75)' }}
          customPieces={customPieces}
        />

        <Tabs />
        <BoardMoves gameMoves={gameMoves} />
      </div>
    </>
  );
}
