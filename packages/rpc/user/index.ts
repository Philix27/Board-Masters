import { requestUrl } from '../utils';
import { z } from 'zod';
import { UserSchemaCreate, IUserReturnType, UserSchemaUpdate } from './schema';
import axios from 'axios';

export interface IUser {
  create(props: {
    body: z.infer<typeof UserSchemaCreate.body>;
    params: z.infer<typeof UserSchemaCreate.params>;
    query: z.infer<typeof UserSchemaCreate.query>;
  }): Promise<IUserReturnType['create']>;

  update(props: {
    body: z.infer<typeof UserSchemaUpdate.body>;
    params: z.infer<typeof UserSchemaUpdate.params>;
    query: z.infer<typeof UserSchemaUpdate.query>;
  }): Promise<IUserReturnType['update']>;
}

export class UserRpc implements IUser {
  async create(props: {
    body: z.infer<typeof UserSchemaCreate.body>;
    params: z.infer<typeof UserSchemaCreate.params>;
    query: z.infer<typeof UserSchemaCreate.query>;
  }): Promise<IUserReturnType['create']> {
    return await axios.post(requestUrl('/user/create/'.concat(props.params.urlParameter)), props.body);
  }

  async update(props: {
    body: z.infer<typeof UserSchemaUpdate.body>;
    params: z.infer<typeof UserSchemaUpdate.params>;
    query: z.infer<typeof UserSchemaUpdate.query>;
  }): Promise<IUserReturnType['update']> {
    return await axios.post(requestUrl('/user/create'.concat(props.params.urlParameter)), props.body);
  }
}
