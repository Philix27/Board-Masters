import { request } from "../utils";
import { z } from "zod";

//* Input Schema
const schema = {
  create: z.object({
    user_id: z.number(),
    phone: z.string(),
    name: z.string(),
  }),
  delete: z.object({
    user_id: z.string(),
    beneficiary_id: z.string(),
  }),
  getAll: z.object({
    user_id: z.number(),
  }),
};

export const GiftCardSchema = schema;
//* Return Schema
export type IGiftCardGetAll = { phone: string; name: string }[];
export type IGiftCardDelete = {
  user_id: string;
};
export type IGiftCardCreate = {
  user_id: string;
  beneficiary_id: string;
};
//* Interface for Service and RPC
export interface IGiftCard {
  create(props: z.infer<typeof schema.create>): Promise<IGiftCardCreate>;
  getAll(props: z.infer<typeof schema.getAll>): Promise<IGiftCardGetAll>;
  delete(props: z.infer<typeof schema.delete>): Promise<IGiftCardDelete>;
}

//* RPC Schema
export class GiftCardRpc implements IGiftCard {
  async create(props: z.infer<typeof schema.create>): Promise<IGiftCardCreate> {
    return await request(props);
  }
  async getAll(props: z.infer<typeof schema.getAll>): Promise<IGiftCardGetAll> {
    return await request(props);
  }
  async delete(props: z.infer<typeof schema.delete>): Promise<IGiftCardDelete> {
    return await request(props);
  }
}
