'use client';
import { useEffect, useState } from 'react';
import { Chess, Move, Square } from 'chess.js';
import { customPieces } from './piece';
import { Chessboard } from 'react-chessboard';
import { TextP, Tabs } from '@/comps';
import React from 'react';
import { Piece } from 'react-chessboard/dist/chessboard/types';
import { AppStores, useSocket } from '@/lib';
import { BoardMoves, IBoardMoves } from './Moves';
import { useAccount } from 'wagmi';

export function ChessGame(props: {}) {
  const [game, setGame] = useState(new Chess());
  const { address } = useAccount();
  const [gameMoves, setGameMoves] = useState<IBoardMoves[]>([]);
  const [timeLeft, setCounter] = useState(10 * 60);
  const [isGameStarted, setGameStarted] = useState(false);
  const store = AppStores.useSettingsStore();

  const ws = useSocket();

  // useEffect(() => {
  //   if (ws.socket) {
  //     const socket = ws.socket! as any;
  //     socket.onmessage = function (event: { data: any }) {
  //       const message = JSON.parse(event.data);
  //       console.log('In app message', message);
  //     };
  //   }
  // }, []);

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

      // socket?.emit(SocketEvents.MOVE_PIECE, { from: move.from, to: move.to });
      // ws.emitter('MOVE_PIECE', { from: move.from, to: move.to });
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

    ws.emitter('MOVE_PIECE', {
      from: move.from,
      to: move.to,
      userAddress: address,
    });
    // socket!.emit('MOVE_PIECE', {
    //   from: move.from,
    //   to: move.to,
    //   userAddress: address,
    // });

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
    // setInterval(() => {
    //   setCounter((prev) => {
    //     return prev + 1;
    //   });
    // }, 1000);

    // Function to update the countdown timer
    function updateCountdown() {
      //  const countdownElement = document.getElementById('countdown');
      //  countdownElement.textContent = formatTime(timeLeft);
      setCounter((prev) => {
        return prev--;
      });
      //  timeLeft--;

      if (timeLeft >= 0) {
        setTimeout(updateCountdown, 1000);
        //  } else {
        //    countdownElement.textContent = "Time's up!";
      }
    }

    // Start the countdown
    updateCountdown();
  }

  function formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  return (
    <>
      <div className="px-6 mt-[50px]">
        <div className="w-full flex items-center justify-between py-2">
          <TextP v="p3">{formatTime(timeLeft)}</TextP>

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
        <div className="my-4" />
        <Tabs
          data={[
            {
              title: 'All',
              isActive: store.movesView === 'FULL',
              onClick: () => {
                store.update({
                  movesView: 'FULL',
                });
              },
            },
            {
              title: 'White',
              isActive: store.movesView === 'WHITE',
              onClick: () => {
                store.update({
                  movesView: 'WHITE',
                });
              },
            },
            {
              title: 'Black',
              isActive: store.movesView === 'BLACK',
              onClick: () => {
                store.update({
                  movesView: 'BLACK',
                });
              },
            },
            {
              title: 'Chat',
              isActive: store.movesView === 'CHAT',
              onClick: () => {
                store.update({
                  movesView: 'CHAT',
                });
              },
            },
          ]}
        />
        <BoardMoves gameMoves={gameMoves} />
      </div>
    </>
  );
}
