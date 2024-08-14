import { logFn } from '@/lib';
import { z } from 'zod';

import { IMoves } from '.';
import { MovesSchema } from './schema';

export class MovesService implements IMoves {
  @logFn()
  async create(props: z.infer<typeof MovesSchema.create>): Promise<{ msg: string }> {
    return { msg: 'success' };
  }

  @logFn()
  async update(props: z.infer<typeof MovesSchema.update>): Promise<{ msg: string }> {
    throw new Error('Method not implemented.');
  }
}
