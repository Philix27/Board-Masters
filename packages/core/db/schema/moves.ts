import { baseProperties } from './utils';
import { pgTable, text, integer } from 'drizzle-orm/pg-core';
import { z } from 'zod';
import { gameSchema } from './game';

export const movesSchema = pgTable('game', {
  gameId: integer('whitePlayerId')
    .notNull()
    .references(() => gameSchema.id),
  moveNumber: integer('moveNumber'),
  from: text('from'),
  to: text('to'),
  before: text('before'),
  after: text('after'),
  timeTaken: integer('timeTaken'),
  san: text('san'),
  ...baseProperties,
});
