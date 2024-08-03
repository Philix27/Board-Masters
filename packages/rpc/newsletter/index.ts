import { request } from "../utils";
import { z } from "zod";

//* Input Schema
const schema = {
  create: z.object({
    email: z.string(),
  }),
};

export const NewsletterSchema = schema;
//* Return Schema
export type INewsletterCreate = {
  msg: string;
};

//* Interface for Service and RPC
export interface INewsletter {
  create(props: z.infer<typeof schema.create>): Promise<INewsletterCreate>;
}

//* RPC Schema
export class NewsletterRpc implements INewsletter {
  async create(
    props: z.infer<typeof schema.create>
  ): Promise<INewsletterCreate> {
    return await request(props);
  }
}
