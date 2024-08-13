'use client';
import { Navbar, Tabs } from '@/app/comps';
import React from 'react';

export default function SettingsPage() {
  return (
    <div className="mt-[50px]">
      <Navbar title={'Settings'} />
      <Tabs
        data={[
          {
            title: 'Profile',
            isActive: false,
            onClick: () => {},
          },
          {
            title: 'Chess',
            isActive: false,
            onClick: () => {},
          },
          {
            title: 'Checkers',
            isActive: false,
            onClick: () => {},
          },
        ]}
      />
    </div>
  );
}
