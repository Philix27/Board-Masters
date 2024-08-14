'use client'
import React from 'react';
import { SettingsItem } from './RowItem';
import { TbScoreboard } from 'react-icons/tb';
import { TbMoodHappy } from 'react-icons/tb';
import { IoSadOutline } from 'react-icons/io5';
import { TbTie } from 'react-icons/tb';

export function ChessSettings() {
  return (
    <div>
      <SettingsItem title={'Total points earned'} endTitle={'0.00'} icon={TbScoreboard} />
      <SettingsItem title={'Wins'} endTitle={'0.00'} icon={TbMoodHappy} />
      <SettingsItem title={'Loss'} endTitle={'0.00'} icon={IoSadOutline} />
      <SettingsItem title={'Draw'} endTitle={'0.00'} icon={TbTie} />
    </div>
  );
}
