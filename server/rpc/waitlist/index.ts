import { request } from "../utils";
import { z } from "zod";

//* Input Schema
const schema = {
  create: z.object({
    email: z.string(),
  }),
};

export const WaitListSchema = schema;
//* Return Schema
export type IWaitListCreate = {
  msg: string;
};

//* Interface for Service and RPC
export interface IWaitList {
  create(props: z.infer<typeof schema.create>): Promise<IWaitListCreate>;
}

//* RPC Schema
export class WaitListRpc implements IWaitList {
  async create(props: z.infer<typeof schema.create>): Promise<IWaitListCreate> {
    return await request(props);
  }
}
