import { request } from '../utils';
import { z } from 'zod';
import { UserSchema, IUserReturnType } from './schema';

export interface IUser {
  create(props: z.infer<typeof UserSchema.create>): Promise<IUserReturnType['create']>;

  update(props: z.infer<typeof UserSchema.update>): Promise<IUserReturnType['update']>;
}

export class UserRpc implements IUser {
  async create(props: z.infer<typeof UserSchema.create>): Promise<IUserReturnType['create']> {
    return await request(props, '/user/create/');
  }

  async update(props: z.infer<typeof UserSchema.update>): Promise<IUserReturnType['update']> {
    return await request(props, '/user/update/');
  }
}
