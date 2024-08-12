import { AppStores } from '@/app/lib';
import { cn, TextP } from '@repo/ui';

export function Tabs() {
  const store = AppStores.useSettingsStore();
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between">
        <div
          className={cn(
            'flex items-center justify-center bg-secondary w-full px-3 py-2',
            store.movesView === 'FULL' && 'border-primary border-b-2'
          )}
          onClick={() =>
            store.update({
              movesView: 'FULL',
            })
          }
        >
          <TextP>Full</TextP>
        </div>
        <div
          className={cn(
            'flex items-center justify-center bg-secondary w-full px-3 py-2',
            store.movesView === 'WHITE' && 'border-primary border-b-2'
          )}
          onClick={() =>
            store.update({
              movesView: 'WHITE',
            })
          }
        >
          <TextP>White</TextP>
        </div>
        <div
          className={cn(
            'flex items-center justify-center bg-secondary w-full px-3 py-2',
            store.movesView === 'BLACK' && 'border-primary border-b-2'
          )}
          onClick={() =>
            store.update({
              movesView: 'BLACK',
            })
          }
        >
          <TextP>Black</TextP>
        </div>
      </div>
    </div>
  );
}
