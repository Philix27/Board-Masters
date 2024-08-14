import { baseProperties } from './utils';
import { integer, pgTable, text } from 'drizzle-orm/pg-core';

export const usersSchema = pgTable('users', {
  walletAddress: text('wallet_address').notNull().unique(),
  phone: text('phone'),
  email: text('email'),
  username: text('username'),
  rating: integer('rating').default(0),
  ...baseProperties,
});
