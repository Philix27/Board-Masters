import { request } from "../utils";
import { z } from "zod";

//* Input Schema
export const UtilitySchema = {
  getAirtime: z.object({}),
  getData: z.object({}),
  getCable: z.object({}),
};

const schema = UtilitySchema;

//* Return Schema
export type IUtilityGetAll = { phone: string; name: string }[];
export type IUtilityDelete = {
  user_id: string;
};
export type IUtilityCreate = {
  user_id: string;
  beneficiary_id: string;
};
//* Interface for Service and RPC
export interface IUtility {
  getAirtime(props: z.infer<typeof schema.getAirtime>): Promise<IUtilityCreate>;
  getData(props: z.infer<typeof schema.getData>): Promise<IUtilityGetAll>;
  getCable(props: z.infer<typeof schema.getCable>): Promise<IUtilityDelete>;
}

//* RPC Schema
export class UtilityRpc implements IUtility {
  async getAirtime(
    props: z.infer<typeof schema.getAirtime>
  ): Promise<IUtilityCreate> {
    return await request(props);
  }
  async getData(
    props: z.infer<typeof schema.getData>
  ): Promise<IUtilityGetAll> {
    return await request(props);
  }
  async getCable(
    props: z.infer<typeof schema.getCable>
  ): Promise<IUtilityDelete> {
    return await request(props);
  }
}
