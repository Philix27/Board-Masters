import { CustomPieces } from 'react-chessboard/dist/chessboard/types';

export const customPieces: CustomPieces = {
  wP: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/chess/wp.png" />;
    // } else {
    //   return <Img src="/chess/wp.png" />;
    // }
    return <Img src="/chess/wp.png" />;
  },
  bP: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/chess/bp.png" />;
    // } else {
    //   return <Img src="/chess/bp.png" />;
    // }
    return <Img src="/chess/bp.png" />;
  },
  wB: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/chess/wb.png" />;
    // } else {
    //   return <Img src="/chess/wb.png" />;
    // }
    return <Img src="/chess/wb.png" />;
  },
  bB: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/chess/bb.png" />;
    // } else {
    //   return <Img src="/chess/bb.png" />;
    // }
    return <Img src="/chess/bb.png" />;
  },
  wR: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/chess/wr.png" />;
    // } else {
    //   return <Img src="/chess/wr.png" />;
    // }
    return <Img src="/chess/wr.png" />;
  },
  bR: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/chess/br.png" />;
    // } else {
    //   return <Img src="/chess/br.png" />;
    // }
    return <Img src="/chess/br.png" />;
  },
  wK: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/chess/wk.png" />;
    // } else {
    //   return <Img src="/chess/wk.png" />;
    // }
    return <Img src="/chess/wk.png" />;
  },
  bK: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/chess/bk.png" />;
    // } else {
    //   return <Img src="/chess/bk.png" />;
    // }
    return <Img src="/chess/bk.png" />;
  },
  wN: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/chess/wn.png" />;
    // } else {
    //   return <Img src="/chess/wn.png" />;
    // }
    return <Img src="/chess/wn.png" />;
  },
  bN: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/chess/bn.png" />;
    // } else {
    //   return <Img src="/chess/bn.png" />;
    // }
    return <Img src="/chess/bn.png" />;
  },
  wQ: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/chess/wq.png" />;
    // } else {
    //   return <Img src="/chess/wq.png" />;
    // }
    return <Img src="/chess/wq.png" />;
  },
  bQ: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/chess/bq.png" />;
    // } else {
    //   return <Img src="/chess/bq.png" />;
    // }
    return <Img src="/chess/bq.png" />;
  },
};

function SmallImg(props: { src: string }) {
  return <img src={props.src} className="size-[50px]" />;
}

function Img(props: { src: string }) {
  return <img src={props.src} className="w-fit h-fit" />;
}
