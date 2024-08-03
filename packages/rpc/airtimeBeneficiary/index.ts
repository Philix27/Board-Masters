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
    user_id: z.number(),
    beneficiary_id: z.number(),
  }),
  getAll: z.object({
    user_id: z.number(),
  }),
};

export const AirtimeBeneficiarySchema = schema;
//* Return Schema
export type IAirtimeBeneficiaryGetAll = { phone: string; title: string }[];
export type IAirtimeBeneficiaryDelete = {
  msg: string;
};
export type IAirtimeBeneficiaryCreate = {
  msg: string;
};
//* Interface for Service and RPC
export interface IAirtimeBeneficiary {
  create(
    props: z.infer<typeof schema.create>
  ): Promise<IAirtimeBeneficiaryCreate>;
  getAll(
    props: z.infer<typeof schema.getAll>
  ): Promise<IAirtimeBeneficiaryGetAll>;
  delete(
    props: z.infer<typeof schema.delete>
  ): Promise<IAirtimeBeneficiaryDelete>;
}

//* RPC Schema
export class AirtimeBeneficiaryRpc implements IAirtimeBeneficiary {
  async create(
    props: z.infer<typeof schema.create>
  ): Promise<IAirtimeBeneficiaryCreate> {
    return await request(props, "/beneficiary/create");
  }
  async getAll(
    props: z.infer<typeof schema.getAll>
  ): Promise<IAirtimeBeneficiaryGetAll> {
    const result = await request(props, "/beneficiary/get_all");
    return result.data;
  }
  async delete(
    props: z.infer<typeof schema.delete>
  ): Promise<IAirtimeBeneficiaryDelete> {
    return await request(props, "/beneficiary/delete");
  }
}
