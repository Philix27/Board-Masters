'use client';

import React from 'react';
import { Navbar, } from '../_comps';
import { TextP } from '@repo/ui';

export default function ScoreBoardPage() {
  return (
    <>
      <Navbar title={'Score Board'} isBack />
      <div className={'flex flex-col items-center px-4 py-4 mt-[50px]'}>
        {dummyData.map((val, i) => (
          <Row key={i} {...val} />
        ))}
      </div>
    </>
  );
}
type IRow = { name: string; score: string; img: string };

function Row(props: IRow) {
  return (
    <div className="w-full bg-card p-2 mb-2 rounded-md">
      <div className={'flex justify-between items-center'}>
        <TextP className={'font-bold'}>{props.name}</TextP>
        <TextP className={'text-primary'}>{props.score}</TextP>
      </div>
    </div>
  );
}

const dummyData: IRow[] = [
  {
    name: 'James',
    score: '550',
    img: '/r',
  },
  {
    name: 'James',
    score: '550',
    img: '/r',
  },
  {
    name: 'James',
    score: '550',
    img: '/r',
  },
  {
    name: 'James',
    score: '550',
    img: '/r',
  },
];
