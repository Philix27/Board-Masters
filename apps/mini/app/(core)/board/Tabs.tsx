import { AppStores } from '@/app/lib';
import { TextP } from '@repo/ui';

export function Tabs() {
  const store = AppStores.useSettingsStore();
  return (
    <div className="mb-2">
      <div className="flex items-center justify-evenly">
        <div
          className="bg-secondary w-full border-primary border-b-2 px-3 py-2"
          onClick={() =>
            store.update({
              movesView: 'FULL',
            })
          }
        >
          <TextP>Full</TextP>
        </div>
        <div
          className="bg-secondary w-full border-primary border-b-2 px-3 py-2"
          onClick={() =>
            store.update({
              movesView: 'WHITE',
            })
          }
        >
          <TextP>White</TextP>
        </div>
        <div
          className="bg-secondary w-full border-primary border-b-2 px-3 py-2"
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
