import { baseProperties } from './utils';
import { pgTable, text, integer, pgEnum, date } from 'drizzle-orm/pg-core';
import { createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';
import { usersSchema } from './user';

const gameStatusEnum = pgEnum('status', [
  'NOT_STARTED',
  'IN_PROGRESS',
  'COMPLETED',
  'ABANDONED',
  'TIME_UP',
  'PLAYER_EXIT',
]);
const gameResultEnum = pgEnum('result', ['WHITE_WINS', 'BLACK_WINS', 'DRAW']);
const timeControlEnum = pgEnum('timeControl', ['CLASSICAL', 'RAPID', 'BLITZ', 'BULLET']);

export const gameStatusEnumSchema = z.enum(gameStatusEnum.enumValues);
export const timeControlEnumSchema = z.enum(timeControlEnum.enumValues);
export const gameResultEnumSchema = z.enum(gameResultEnum.enumValues);

// export const selectThemeSchema = createSelectSchema(themes);
// type Theme = z.infer<typeof selectThemeSchema>;

export const gameSchema = pgTable('game', {
  whitePlayerId: integer('whitePlayerId')
    .notNull()
    .references(() => usersSchema.id),
  blackPlayerId: integer('blackPlayerId')
    .notNull()
    .references(() => usersSchema.id),
  status: gameStatusEnum('status').default('NOT_STARTED'),
  result: gameResultEnum('result'),
  timeControl: timeControlEnum('timeControl'),
  startingFen: text('startingFen').notNull().default('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'),
  currentFen: text('currentFen'),
  opening: text('opening'),
  event: text('event'),
  endAt: date('endAt'),
  ...baseProperties,
});
