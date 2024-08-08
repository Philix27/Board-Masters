'use client';
import { useEffect, useState } from 'react';
import { Chess, Move, Piece, Square } from 'chess.js';
import React from 'react';
import { Navbar } from '../_comps';
import { customPieces } from './piece';
import { Chessboard } from 'react-chessboard';
import { AppButton, TextP } from '@repo/ui';
import { useSocket } from '@/app/lib/hooks/useSocket';

export default function BoardPage() {
  const chess = new Chess();
  const [game, setGame] = useState(chess);
  const [gameMoves, setGameMoves] = useState<{ from: string; to: string }[]>([]);
  const [counter, setCounter] = useState(0);
  const [isGameStarted, setGameStarted] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const socket = useSocket();

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
    // null if the move was illegal, the move object if the move was legal
    return result;
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();
    if (game.isGameOver() || game.isDraw() || possibleMoves.length === 0) return; // exit if the game is over
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeAMove(possibleMoves[randomIndex]!);
  }

  function onDrop(sourceSquare: Square, targetSquare: Square) {
    let move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: 'q',
    });

    if (move === null) return false;

    setGame(game);

    trackMoves(move);

    startCounter();

    setTimeout(makeRandomMove, 200);

    return true;
  }

  function trackMoves(move: Move) {
    setGameMoves((prev) => {
      return [
        ...prev,
        {
          from: move.from,
          to: move.to,
        },
      ];
    });
  }

  function startCounter() {
    if (isGameStarted) return;

    setGameStarted(true);
    timeoutId = setInterval(() => {
      setCounter((prev) => {
        return prev + 1;
      });
    }, 1000);
  }

  return (
    <>
      <Navbar title={'Board'} isBack />
      <div className="px-6">
        <div className="w-full flex items-center justify-between py-2">
          <TextP v="p3">0:00 {counter}</TextP>

          <AppButton
            className="w-fit py-[1px]"
            onClick={() => {
              if (timeoutId) {
                clearInterval(timeoutId);
              }
            }}
          >
            Stop
          </AppButton>
        </div>
        <Chessboard
          id={'ChessBoard'}
          // arePiecesDraggable={false}
          position={game.fen()}
          onPieceDrop={(sorce, square, p) => {
            onDrop(sorce, square);
            console.log('Piece moved', p);
            return true;
          }}
          showBoardNotation={false}
          customBoardStyle={{ borderRadius: '5px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)' }}
          customDarkSquareStyle={{ backgroundColor: '#58A181' }}
          customLightSquareStyle={{ backgroundColor: '#C5C5C5' }}
          customDropSquareStyle={{ boxShadow: 'inset 0 0 1px 6px rgba(255, 255, 255, 0.75)' }}
          customPieces={customPieces}
        />

        <div>
          {gameMoves.map((m, i) => (
            <div key={i}>
              <TextP>From: {m.from}</TextP>
              <TextP>To: {m.to}</TextP>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
