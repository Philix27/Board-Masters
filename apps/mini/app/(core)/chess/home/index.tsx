'use client';

import React from 'react';
import { DashboardItems, IDashboard, Navbar } from '@/comps';
import { MdScoreboard } from 'react-icons/md';
import { AppImg } from '@/lib';

export function HomePage() {
  return (
    <>
      <Navbar title={'Chess Game'} icon={MdScoreboard} onIconClick={() => {}} />

      <DashboardItems data={dashboardItems} />
    </>
  );
}

const dashboardItems: IDashboard[] = [
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
