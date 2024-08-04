'use client';

import { useEffect, useRef, useState } from 'react';
import { useSocket } from './hooks/useSocket';
import { Chess } from 'chess.js';
import { useParams } from 'react-router-dom';
import { useRouter } from 'next/navigation';
import { useUser } from '@repo/store/useUser';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { movesAtom, userSelectedMoveIndexAtom } from '@repo/store/chessBoard';

const GAME_TIME_MS = 10 * 60 * 1000;
// const moveAudio = new Audio(MoveSound);

export const Game = () => {
  const router = useRouter();
  // Todo move to store/context
  const [chess, _setChess] = useState(new Chess());

  return (
    <div className="">
      <div className="justify-center flex">
        <div className="pt-2 w-full">
          <div className="flex gap-8 w-full">
            <div className="text-white">
              <div className="flex justify-center">
                <div>
                  <div>
                    <div className={`w-full flex justify-center text-white`}>
                      Hey guys
                      {/* <ChessBoard
                        started={started}
                        gameId={gameId ?? ''}
                        myColor={user.id === gameMetadata?.blackPlayer?.id ? 'b' : 'w'}
                        chess={chess}
                        setBoard={setBoard}
                        socket={socket}
                        board={board}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
