'use client';
import { TextH, TextP } from '@/comps';
import Link from 'next/link';
import React from 'react';
import { Navbar } from '@/comps';
import { MdScoreboard } from 'react-icons/md';
import { AppImg, cn } from '@/lib';

export function HomePage() {
  return (
    <>
      <Navbar title={'Chess Game'} icon={MdScoreboard} onIconClick={() => {}} />

      <div className="grid grid-cols-2 gap-x-3 gap-y-2 px-6 py-4 mt-[50px]">
        {dashboardItems.map((val, i) => (
          <Link href={val.link}>
            {/* <div key={i} className={cn(`px-3 py-1 rounded-md border border-primary`)}> */}
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
    title: 'Play now',
    link: '/board',
    subTitle: 'Stake and play with random opponents',
    color: 'bg-cyan-600',
    img: AppImg.icons.multiplayer,
  },
  {
    title: 'Score Board',
    link: '/score',
    subTitle: 'View your past scores and leaderboard',
    color: 'bg-orange-600',
    img: AppImg.icons.note,
  },
  {
    title: 'Bot',
    link: '/bot',
    subTitle: 'Play with AI',
    color: 'bg-teal-500',
    img: AppImg.icons.robo,
  },
  {
    title: 'Play Friend',
    link: '/board',
    subTitle: 'Invite a friend to play with',
    color: 'bg-red-300',
    img: AppImg.icons.phoneShake,
  },
  // {
  //   title: 'Puzzle',
  //   link: '/puzzle',
  //   subTitle: 'Take exercies and purples',
  //   color: 'bg-pink-600',
  //   img: AppImg.icons.puzzle,
  // },
  {
    title: 'Learn',
    link: '/learn',
    subTitle: 'Learn chess with a simple walkthrough courses',
    color: 'bg-purple-700',
    img: AppImg.icons.edu,
  },
  // {
  //   title: 'Watch',
  //   link: '/watch',
  //   subTitle: 'Learn chess with a simple walkthrough courses',
  //   color: 'bg-lime-700',
  //   img: AppImg.icons.blackVideo,
  // },
];
