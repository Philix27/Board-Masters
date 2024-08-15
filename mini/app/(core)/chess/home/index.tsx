'use client';

import React from 'react';
import { DashboardItems, IDashboard, Navbar } from '@/comps';
import { MdCastForEducation, MdScoreboard } from 'react-icons/md';
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
    link: '/chess/board',
    subTitle: 'Stake and play with random opponents',
    color: 'bg-cyan-600',
    icon: FaChess,
  },
  {
    title: 'Score Board',
    link: '/chess/score',
    subTitle: 'View your past scores and leaderboard',
    color: 'bg-orange-600',
    icon: LiaChessKnightSolid,
  },
  {
    title: 'Bot',
    link: '/chess/bot',
    subTitle: 'Play with AI',
    color: 'bg-teal-500',
    icon: LiaChessQueenSolid,
  },
  {
    title: 'Play Friend',
    link: '/chess/board',
    subTitle: 'Invite a friend to play with',
    color: 'bg-red-300',
    icon: LiaChessBishopSolid,
  },
  {
    title: 'Learn',
    link: '/chess/learn',
    subTitle: 'Learn chess with a simple walkthrough courses',
    color: 'bg-purple-700',
    icon: MdCastForEducation,
  },
];
