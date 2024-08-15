'use client';
import React from 'react';
import { DashboardItems, Navbar, IDashboard } from '@/comps';
import { MdScoreboard } from 'react-icons/md';
import { GrScorecard } from 'react-icons/gr';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import { LuDisc2 } from 'react-icons/lu';
import { RiRobot3Line } from 'react-icons/ri';
import { CiVideoOn } from 'react-icons/ci';

export function HomePage() {
  return (
    <>
      <Navbar title={'Checkers'} icon={MdScoreboard} onIconClick={() => {}} />

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
    icon: LuDisc2,
  },
  {
    title: 'Score Board',
    link: '/score',
    subTitle: 'View your past scores and leaderboard',
    color: 'bg-orange-600',
    icon: GrScorecard,
  },
  {
    title: 'Bot',
    link: '/bot',
    subTitle: 'Play with AI',
    color: 'bg-teal-500',
    icon: RiRobot3Line,
  },
  {
    title: 'Play Friend',
    link: '/board',
    subTitle: 'Invite a friend to play with',
    color: 'bg-red-300',
    icon: LiaUserFriendsSolid,
  },
  {
    title: 'Watch',
    link: '/watch',
    subTitle: 'Learn chess with a simple walkthrough courses',
    color: 'bg-lime-700',
    icon: CiVideoOn,
  },
];
