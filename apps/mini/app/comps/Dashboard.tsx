import { cn, TextH, TextP } from '@repo/ui';
import Link from 'next/link';
import { FaChess } from 'react-icons/fa';

export type IDashboard = { title: string; subTitle: string; link: string; color: string; img: string };
export function DashboardItems(props: { data: IDashboard[] }) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-2 px-6 py-4 mt-[50px]">
      {props.data.map((val, i) => (
        <Link href={val.link}>
          {/* <div key={i} className={cn(`px-3 py-1 rounded-md border border-primary`)}> */}
          <div key={i} className={cn(`px-3 py-2 rounded-md bg-card border flex flex-col items-center justify-center`)}>
            <TextH className={'tracking-wide text-white my-1'}>{val.title}</TextH>
            <hr className="border border-primary w-full" />
            <TextP className="mb-4 text-slate-500 text-sm text-center">{val.subTitle}</TextP>
            <FaChess size={40} className="mb-2 text-primary" />
            {/* <img src={val.img} className={`w-fit h-[100px]`} alt={val.title} /> */}
          </div>
        </Link>
      ))}
    </div>
  );
}
