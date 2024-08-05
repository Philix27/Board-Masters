// export class UserService {
//   constructor(private readonly repo: UserRepository) {}

//   async createUser(props: { phone: string; bvn: number; password: string }) {
//     const user = await this.repo.getUserByPhone({ phone: props.phone });
//     if (user?.id) {
//       throw new Error("User already exist");
//     }
//     const res = await this.repo.createUser({
//       phone: props.phone,
//       password: props.password,
//       bvn: props.bvn,
//     });
//     return res;
//   }

//   async findByPhone(
//     phone: string
//   ): Promise<{ name: string; password: string; id: number }> {
//     const user = await this.repo.getUserByPhone({ phone: phone });
//     console.log("User Repo", user);
//     return {
//       name: user?.first_name!,
//       password: user?.password!,
//       id: user?.id!,
//     };
//   }

//   async updatePassword(props: { phone: string; newPassword: string }) {
//     await this.repo.updatePassword({
//       phone: props.phone,
//       newPassword: props.newPassword,
//     });
//   }
// }

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
