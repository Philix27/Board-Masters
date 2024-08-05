import { PrismaClient } from '@prisma/client';
import { IUser } from '@repo/rpc';

export class UserService implements IUser {
  constructor(private readonly repo: PrismaClient) {}
  async create(props: {
    body: { bodyKey: number };
    params: { urlParameter: string };
    query: { queryKey: string };
  }): Promise<{ msg: string }> {
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

  async update(props: {
    body: { bodyKey: number };
    params: { urlParameter: string };
    query: { queryKey: string };
  }): Promise<{ msg: string }> {
    throw new Error('Method not implemented.');
  }
}
