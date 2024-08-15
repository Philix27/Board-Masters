'use client';

import React from 'react';
import { Navbar, Tabs } from '@/comps';
import { TextP } from '@repo/ui';
import { AppStores } from '@/lib';

export default function ScoreBoardPage() {
  const store = AppStores.useSettingsStore();
  return (
    <>
      <Navbar title={'Score Board'} isBack />

      <div className={'flex flex-col items-center px-4 py-4 mt-[50px] w-full'}>
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
          ]}
        />
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
