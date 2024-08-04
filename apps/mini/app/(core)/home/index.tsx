'use client';
import { cn, TextH, TextP } from '@repo/ui';
import React from 'react';
import { Navbar } from '../_comps';
import { MdScoreboard } from 'react-icons/md';

export function HomePage() {
  return (
    <>
      <Navbar title={'Home'} icon={MdScoreboard} onIconClick={() => {}} />

      <div className="grid grid-cols-2 gap-x-3 gap-y-2 px-6 py-4">
        {dashboardItems.map((val, i) => (
          <div key={i} className={cn(`px-3 py-1 rounded-md`, val.color)}>
            <TextH className={'tracking-wide'}>{val.title}</TextH>
            <TextP className="mb-4">{val.subTitle}</TextP>
          </div>
        ))}
      </div>
    </>
  );
}

const dashboardItems: { title: string; subTitle: string; link: string; color: string }[] = [
  {
    title: 'Multiplayer',
    link: '/2',
    subTitle: 'Stake to play with others',
    color: 'bg-red-500',
  },
  {
    title: 'Bot',
    link: '/2',
    subTitle: 'Play with an ai',
    color: 'bg-teal-500',
  },
  {
    title: 'Play Friend',
    link: '/2',
    subTitle: 'Invite a friend to play with',
    color: 'bg-orange-500',
  },
  {
    title: 'Puzzle',
    link: '/2',
    subTitle: 'Take exercies and purples',
    color: 'bg-pink-500',
  },
  {
    title: 'Learn',
    link: '/2',
    subTitle: 'Learn chess with a simple walkthrough courses',
    color: 'bg-purple-500',
  },
];
