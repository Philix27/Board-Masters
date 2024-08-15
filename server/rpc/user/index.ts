import { request } from "../utils";
import { z } from "zod";

//* Input Schema
const schema = {
  create: z.object({
    user_id: z.number(),
    phone: z.string(),
    first_name: z.string().optional(),
    last_name: z.string().optional(),
  }),
  kyc: z.object({
    bvn: z.number(),
    nin: z.number(),
    nin_url: z.string(),
    first_name: z.string(),
    last_name: z.string(),
  }),
  update: z.object({
    themeIsDark: z.boolean(),
  }),
};

export const UserSchema = schema;
//* Return Schema

export const ReturnType = {
  update: z.object({
    msg: z.string(),
  }),
  create: z.object({
    phone: z.string(),
    firstName: z.string(),
  }),
  kyc: z.object({
    msg: z.string(),
  }),
};
//* Interface for Service and RPC
export interface IUser {
  create(
    props: z.infer<typeof schema.create>
  ): Promise<z.infer<typeof ReturnType.create>>;
  kyc(
    props: z.infer<typeof schema.kyc>
  ): Promise<z.infer<typeof ReturnType.kyc>>;
}

//* RPC Schema
export class UserRpc implements IUser {
  async kyc(
    props: z.infer<typeof schema.kyc>
  ): Promise<z.infer<typeof ReturnType.kyc>> {
    return await request(props);
  }
  async create(
    props: z.infer<typeof schema.create>
  ): Promise<z.infer<typeof ReturnType.create>> {
    return await request(props);
  }

  async update(
    props: z.infer<typeof schema.create>
  ): Promise<z.infer<typeof ReturnType.update>> {
    return await request(props);
  }
}
