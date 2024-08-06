import { logFn } from '@/lib';
import { z } from 'zod';
import { UserSchema } from './schema';
import { IUser } from '.';

export class UserService implements IUser {
  @logFn()
  async create(props: z.infer<typeof UserSchema.create>): Promise<{ msg: string }> {
    return { msg: 'success' };
  }

  @logFn()
  async update(props: z.infer<typeof UserSchema.update>): Promise<{ msg: string }> {
    throw new Error('Method not implemented.');
  }
}
