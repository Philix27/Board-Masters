import { PrismaClient } from '@prisma/client';
import { ApiSchema, IUser } from '@repo/rpc';
import { z } from 'zod';

export class UserService implements IUser {
  constructor(private readonly repo: PrismaClient) {}
  async create(props: z.infer<typeof ApiSchema.user.create>): Promise<{ msg: string }> {
    const res = await this.repo.user.create({
      data: {
        name: '',
        email: '',
        password: '',
        username: '',
        rating: 2,
        provider: 'GUEST',
      },
    });

    return { msg: '' };
  }

  async update(props: z.infer<typeof ApiSchema.user.update>): Promise<{ msg: string }> {
    throw new Error('Method not implemented.');
  }
}
