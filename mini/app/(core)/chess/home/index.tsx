'use client';

import React from 'react';
import { DashboardItems, IDashboard, Navbar } from '@/comps';
import { MdCastForEducation } from 'react-icons/md';
import { FaChess } from 'react-icons/fa';
import { LiaChessBishopSolid, LiaChessKnightSolid, LiaChessQueenSolid } from 'react-icons/lia';

export function HomePage() {
  return (
    <>
      <Navbar title={'Chess'} />
      <DashboardItems data={dashboardItems} />
    </>
  );
}

const dashboardItems: IDashboard[] = [
  {
    title: 'Play now',
    link: '/chess/play-now',
    subTitle: 'Stake and play with random opponents',
    color: 'bg-cyan-600',
    icon: FaChess,
  },
  {
    title: 'Play Friend',
    link: '/chess/play-friend',
    subTitle: 'Invite a friend to play with',
    color: 'bg-red-300',
    icon: LiaChessBishopSolid,
  },
  {
    title: 'Bot',
    link: '/chess/play-bot',
    subTitle: 'Play a fast game with a bot',
    color: 'bg-teal-500',
    icon: LiaChessQueenSolid,
  },
  {
    title: 'Score Board',
    link: '/chess/score',
    subTitle: 'View your past scores and leaderboard',
    color: 'bg-orange-600',
    icon: LiaChessKnightSolid,
  },
  {
    title: 'Learn', // puzzle, watch
    link: '/chess/learn',
    subTitle: 'Learn chess with a simple walkthrough courses',
    color: 'bg-purple-700',
    icon: MdCastForEducation,
  },
];
