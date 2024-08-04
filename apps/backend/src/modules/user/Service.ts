import { PrismaClient } from '@prisma/client';
import { IUser } from '@repo/rpc';

export class UserService implements IUser {
  constructor(private readonly repo: PrismaClient) {}

//   async createUser() {
//     const res = await this.repo.user.create({
//       data: {
//         name: '',
//       },
//     });

//     return res;
  }

   async update() {}
 async create() {}
}
