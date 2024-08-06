'use client';
import { cn, TextH, TextP } from '@repo/ui';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Navbar } from '../_comps';
import { MdScoreboard } from 'react-icons/md';
import { AppImg } from '@/lib';

export function HomePage() {
  return (
    <>
      <Navbar title={'Home'} icon={MdScoreboard} onIconClick={() => {}} />

      <div className="grid grid-cols-2 gap-x-3 gap-y-2 px-6 py-4">
        {dashboardItems.map((val, i) => (
          <Link href={val.link}>
            <div key={i} className={cn(`px-3 py-1 rounded-md`, val.color)}>
              <TextH className={'tracking-wide text-white'}>{val.title}</TextH>
              <TextP className="mb-4 text-white">{val.subTitle}</TextP>

              <img src={val.img} className={`w-fit h-[100px]`} alt={val.title} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

const dashboardItems: { title: string; subTitle: string; link: string; color: string; img: string }[] = [
  {
    title: 'Multiplayer',
    link: '/board',
    subTitle: 'Stake to play with others',
    color: 'bg-cyan-500',
    img: AppImg.icons.multiplayer,
  },
  {
    title: 'Score Board',
    link: '/score',
    subTitle: 'Play with an ai',
    color: 'bg-orange-600',
    img: AppImg.icons.note,
  },
  {
    title: 'Bot',
    link: '/bot',
    subTitle: 'Play with an ai',
    color: 'bg-teal-500',
    img: AppImg.icons.robo,
  },
  {
    title: 'Play Friend',
    link: '/board',
    subTitle: 'Invite a friend to play with',
    color: 'bg-red-400',
    img: AppImg.icons.phoneShake,
  },
  {
    title: 'Puzzle',
    link: '/puzzle',
    subTitle: 'Take exercies and purples',
    color: 'bg-pink-500',
    img: AppImg.icons.puzzle,
  },
  {
    title: 'Learn',
    link: '/learn',
    subTitle: 'Learn chess with a simple walkthrough courses',
    color: 'bg-purple-500',
    img: AppImg.icons.edu,
  },
  {
    title: 'Watch',
    link: '/watch',
    subTitle: 'Learn chess with a simple walkthrough courses',
    color: 'bg-yellow-600',
    img: AppImg.icons.blackVideo,
  },
];
