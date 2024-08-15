'use client'
import { TextH, TextP } from '@/comps';
import { IconType } from 'react-icons';

export function SettingsItem(props: { title: string; endTitle: string; icon: IconType }) {
  const Icon = props.icon;
  return (
    <div className="flex bg-secondary w-full px-6 py-4 justify-between rounded-lg mb-1 border-[0.1px]">
      <div className="flex items-center">
        <Icon className="text-primary mr-4" size={20} />
        <TextH className="font-bold tracking-wide">{props.title}</TextH>
      </div>
      <TextP>{props.endTitle}</TextP>
    </div>
  );
}
