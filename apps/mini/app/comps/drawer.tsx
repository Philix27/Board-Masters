'use client';
import { AppStores } from '@/app/lib';
import { TextP } from '@repo/ui';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IconType } from 'react-icons';
import { IoPerson, IoSettings } from 'react-icons/io5';
import { useTheme } from 'next-themes';
import { MdNightlight, MdOutlineLightMode } from 'react-icons/md';

export function Drawer() {
  const store = AppStores.useSettingsStore();
  const router = useRouter();
  const { setTheme, theme } = useTheme();

  return (
    <div className="w-full h-screen flex  fixed top-0 left-0 bg-black/30 ">
      <motion.div
        initial={{ x: 0, opacity: 0.5, translateX: -20 }}
        animate={{ x: 0, opacity: 1, translateX: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
        className={'w-[60%] bg-secondary rounded-r-2xl'}
      >
        <div className="px-4 mt-[50px]">
          <DrawerRow
            title={'Profile'}
            icon={IoPerson}
            onClick={() => {
              router.push('/account');
            }}
          />
          <DrawerRow
            title={'Settings'}
            icon={IoSettings}
            onClick={() => {
              router.push('/settings');
            }}
          />
          <DrawerRow
            title={'Theme'}
            icon={theme === 'light' ? MdNightlight : MdOutlineLightMode}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
        </div>
      </motion.div>
      <div
        className={'w-[40%]'}
        onClick={() => {
          store.update({ drawerIsOpen: false });
        }}
      />
    </div>
  );
}

function DrawerRow(props: { title: string; icon?: IconType; onClick?: VoidFunction }) {
  const Icon = props.icon!;
  return (
    <div className="w-full flex items-center py-2 border-b-[0.3px]" onClick={props.onClick}>
      {props.icon && <Icon className="mr-4" />}
      <TextP className={'font-bold'}>{props.title}</TextP>
    </div>
  );
}
