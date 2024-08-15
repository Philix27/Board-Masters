'use client';
import { AppStores } from '@/lib';
import { TextP } from '@/comps';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';
import { IconType } from 'react-icons';
import { useTheme } from 'next-themes';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { GoPerson } from 'react-icons/go';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { PiSpeakerHighThin, PiSpeakerSimpleXLight } from 'react-icons/pi';

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
            icon={GoPerson}
            onClick={() => {
              router.push('/settings');
            }}
          />
          <DrawerRow
            title={'Notifications'}
            icon={IoIosNotificationsOutline}
            onClick={() => {
              router.push('/notify');
            }}
          />
          <DrawerRow
            title={'Theme'}
            icon={IoColorPaletteOutline}
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <DrawerRow
            title={'Sound'}
            icon={store.isLoud ? PiSpeakerHighThin : PiSpeakerSimpleXLight}
            onClick={() => store.update({ isLoud: !store.isLoud })}
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
      {props.icon && <Icon className="mr-4" size={20} />}
      <TextP className={'font-bold'}>{props.title}</TextP>
    </div>
  );
}
