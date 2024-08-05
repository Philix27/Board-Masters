import { z } from 'zod';
import { IGame, ApiSchema } from '@repo/rpc';
import { IGameReturnType } from '@repo/rpc/game/schema';

export class GameService implements IGame {
  create(props: z.infer<typeof ApiSchema.game.create>): Promise<IGameReturnType['create']> {
    throw new Error('Method not implemented.');
  }
  update(props: z.infer<typeof ApiSchema.game.update>): Promise<IGameReturnType['update']> {
    throw new Error('Method not implemented.');
  }
  // @logFn()
  // async create(props: z.infer<typeof schema.create>): Promise<IAirtimeBeneficiaryCreate> {
  //   const res = await this.repo.create({
  //     phone: props.phone,
  //     user_id: props.user_id,
  //     title: props.name,
  //   });
  //   return res;
  // }

  // @logFn()
  // async getAll(props: z.infer<typeof schema.getAll>): Promise<IAirtimeBeneficiaryGetAll> {
  //   const res = await this.repo.getAll({ user_id: props.user_id });
  //   return res;
  // }

  // @logFn()
  // async delete(props: z.infer<typeof schema.delete>): Promise<IAirtimeBeneficiaryDelete> {
  //   const res = await this.repo.delete({ id: props.beneficiary_id });
  //   return { msg: 'deleted' };
  // }
}
