import { CustomPieces } from 'react-chessboard/dist/chessboard/types';

export const customPieces: CustomPieces = {
  wP: (args) => {
    return <Img src="/chess/wp.png" />;
  },
  bP: (args) => {
    return <Img src="/chess/bp.png" />;
  },
  wB: (args) => {
    return <Img src="/chess/wb.png" />;
  },
  bB: (args) => {
    return <Img src="/chess/bb.png" />;
  },
  wR: (args) => {
    return <Img src="/chess/wr.png" />;
  },
  bR: (args) => {
    return <Img src="/chess/br.png" />;
  },
  wK: (args) => {
    return <Img src="/chess/wk.png" />;
  },
  bK: (args) => {
    return <Img src="/chess/bk.png" />;
  },
  wN: (args) => {
    return <Img src="/chess/wn.png" />;
  },
  bN: (args) => {
    return <Img src="/chess/bn.png" />;
  },
  wQ: (args) => {
    return <Img src="/chess/wq.png" />;
  },
  bQ: (args) => {
    return <Img src="/chess/bq.png" />;
  },
};

function SmallImg(props: { src: string }) {
  return <img src={props.src} className="size-[50px]" />;
}

function Img(props: { src: string }) {
  return <img src={props.src} className="w-fit h-fit" />;
}
