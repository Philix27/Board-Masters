import { request } from "../utils";
import { z } from "zod";

export const TransactionSchema = {
  getAll: z.object({
    userId: z.number(),
  }),
};

//* Return Schema
export type ITransactionGetAll = {
  amount: number;
  purpose: string;
  category: string;
}[];

export interface ITransactions {
  getAll(
    props: z.infer<typeof TransactionSchema.getAll>
  ): Promise<ITransactionGetAll>;
}

export class TransactionsRpc implements ITransactions {
  async getAll(
    props: z.infer<typeof TransactionSchema.getAll>
  ): Promise<ITransactionGetAll> {
    const result = await request(props, "/transactions/get_all");
    return result.data;
  }
}
