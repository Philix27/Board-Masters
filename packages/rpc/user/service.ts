import { AppError, logFn } from '@/lib';
import { z } from 'zod';
import { IUserReturnType, UserSchema } from './schema';
import { IUser } from '.';
import { db, usersSchema } from '@/db';
import { HttpStatusCode } from 'axios';
import { eq } from 'drizzle-orm';

export class UserService implements IUser {
  databaseUrl: string;

  constructor(dbUrl: string) {
    this.databaseUrl = dbUrl;
  }

  @logFn()
  async create(props: z.infer<typeof UserSchema.create>): Promise<IUserReturnType['create']> {
    try {
      const res = await db(this.databaseUrl).insert(usersSchema).values(props).returning();

      return { msg: 'Created successfully', userId: res[0].id };
    } catch (error) {
      throw new AppError('Oops an error occurred', HttpStatusCode.InternalServerError, error);
    }
  }

  @logFn()
  async update(props: z.infer<typeof UserSchema.update>): Promise<IUserReturnType['update']> {
    try {
      const res = await db(this.databaseUrl)
        .update(usersSchema)
        .set({
          username: props.username,
          rating: props.rating,
        })
        .where(eq(usersSchema.id, props.userId));

      return { msg: 'Created successfully' };
    } catch (error) {
      throw new AppError('Oops an error occurred', HttpStatusCode.InternalServerError, error);
    }
  }
}
