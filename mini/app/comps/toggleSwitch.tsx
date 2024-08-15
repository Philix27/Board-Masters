import { TextP } from '@/comps';
import { cn } from '@/lib';

export function ToggleSwitch(props: {
  isTitle1: boolean;
  setTitle1: React.Dispatch<React.SetStateAction<boolean>>;
  title1: string;
  title2: string;
}) {
  return (
    <div className="flex items-center bg-secondary w-fit rounded-lg p-[2px]">
      <div
        className={cn('px-4 py-1 rounded-sm ', props.isTitle1 && 'bg-background')}
        onClick={() => props.setTitle1(true)}
      >
        <TextP>{props.title1}</TextP>
      </div>
      <div
        className={cn('px-4 py-1 rounded-sm ', !props.isTitle1 && 'bg-background')}
        onClick={() => props.setTitle1(false)}
      >
        <TextP>{props.title2}</TextP>
      </div>
    </div>
  );
}
