import { AppStores } from '@/app/lib';
import { TextP } from '@repo/ui';
import { Piece } from 'react-chessboard/dist/chessboard/types';

export type IBoardMoves = { from: string; to: string; piece: Piece };
export function BoardMoves(props: { gameMoves: IBoardMoves[] }) {
  const store = AppStores.useSettingsStore();

  return (
    <div className="mt-1">
      {store.movesView === 'FULL' &&
        props.gameMoves.map((m, i) => (
          <div key={i} className="flex items-center justify-between bg-secondary py-2 px-2 mb-1 rounded-md">
            <div className="flex items-center">
              <img src={`/${m.piece}.png`} className="w-[25px] h-[25px] mr-3" />
              <TextP> {m.from}</TextP>
            </div>
            <TextP>{m.to}</TextP>
          </div>
        ))}
      {store.movesView === 'WHITE' &&
        props.gameMoves
          .filter((val, i) => val.piece[0]?.toLowerCase() === 'w')
          .map((m, i) => (
            <div key={i} className="flex items-center justify-between bg-secondary py-2 px-2 mb-1 rounded-md">
              <div className="flex items-center">
                <img src={`/${m.piece}.png`} className="w-[25px] h-[25px] mr-3" />
                <TextP> {m.from}</TextP>
              </div>
              <TextP>{m.to}</TextP>
            </div>
          ))}
      {store.movesView === 'BLACK' &&
        props.gameMoves
          .filter((val, i) => val.piece[0]?.toLowerCase() === 'b')
          .map((m, i) => (
            <div key={i} className="flex items-center justify-between bg-secondary py-2 px-2 mb-1 rounded-md">
              <div className="flex items-center">
                <img src={`/${m.piece}.png`} className="w-[25px] h-[25px] mr-3" />
                <TextP> {m.from}</TextP>
              </div>
              <TextP>{m.to}</TextP>
            </div>
          ))}
    </div>
  );
}
