import { CustomPieces } from 'react-chessboard/dist/chessboard/types';

export const customPieces: CustomPieces = {
  wP: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/wp.png" />;
    // } else {
    //   return <Img src="/wp.png" />;
    // }
    return <Img src="/wp.png" />;
  },
  bP: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/bp.png" />;
    // } else {
    //   return <Img src="/bp.png" />;
    // }
    return <Img src="/bp.png" />;
  },
  wB: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/wb.png" />;
    // } else {
    //   return <Img src="/wb.png" />;
    // }
    return <Img src="/wb.png" />;
  },
  bB: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/bb.png" />;
    // } else {
    //   return <Img src="/bb.png" />;
    // }
    return <Img src="/bb.png" />;
  },
  wR: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/wr.png" />;
    // } else {
    //   return <Img src="/wr.png" />;
    // }
    return <Img src="/wr.png" />;
  },
  bR: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/br.png" />;
    // } else {
    //   return <Img src="/br.png" />;
    // }
    return <Img src="/br.png" />;
  },
  wK: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/wk.png" />;
    // } else {
    //   return <Img src="/wk.png" />;
    // }
    return <Img src="/wk.png" />;
  },
  bK: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/bk.png" />;
    // } else {
    //   return <Img src="/bk.png" />;
    // }
    return <Img src="/bk.png" />;
  },
  wN: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/wn.png" />;
    // } else {
    //   return <Img src="/wn.png" />;
    // }
    return <Img src="/wn.png" />;
  },
  bN: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/bn.png" />;
    // } else {
    //   return <Img src="/bn.png" />;
    // }
    return <Img src="/bn.png" />;
  },
  wQ: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/wq.png" />;
    // } else {
    //   return <Img src="/wq.png" />;
    // }
    return <Img src="/wq.png" />;
  },
  bQ: (args) => {
    // if (args.isDragging) {
    //   return <SmallImg src="/bq.png" />;
    // } else {
    //   return <Img src="/bq.png" />;
    // }
    return <Img src="/bq.png" />;
  },
};

function SmallImg(props: { src: string }) {
  return <img src={props.src} className="size-[50px]" />;
}

function Img(props: { src: string }) {
  return <img src={props.src} className="w-fit h-fit" />;
}
