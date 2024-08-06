import { PrismaClient } from '@prisma/client';
import { ApiSchema, IUser } from '@repo/rpc';
// import { prisma } from '@repo/db';
import { logFn } from '@server/lib';
import { z } from 'zod';

export class UserService implements IUser {
  constructor(private readonly repo: PrismaClient) {}

  @logFn()
  async create(props: z.infer<typeof ApiSchema.user.create>): Promise<{ msg: string }> {
    const res = await this.repo.user.create({
      data: {
        username: '',
        walletAddress: props.walletAddress,
        // name: ""
      },
    });

    return { msg: 'success' };
  }

  @logFn()
  async update(props: z.infer<typeof ApiSchema.user.update>): Promise<{ msg: string }> {
    throw new Error('Method not implemented.');
  }
}
