import { z } from "zod";
import { BeneficiaryRepository } from "./repo";
import {
  AirtimeBeneficiarySchema as schema,
  IAirtimeBeneficiary,
  IAirtimeBeneficiaryCreate,
  IAirtimeBeneficiaryDelete,
  IAirtimeBeneficiaryGetAll,
} from "@repo/rpc";
import { logFn } from "@server/lib";

export class BeneficiaryService implements IAirtimeBeneficiary {
  constructor(private readonly repo: BeneficiaryRepository) {}
  @logFn()
  async create(
    props: z.infer<typeof schema.create>
  ): Promise<IAirtimeBeneficiaryCreate> {
    const res = await this.repo.create({
      phone: props.phone,
      user_id: props.user_id,
      title: props.name,
    });
    return res;
  }
  @logFn()
  async getAll(
    props: z.infer<typeof schema.getAll>
  ): Promise<IAirtimeBeneficiaryGetAll> {
    const res = await this.repo.getAll({ user_id: props.user_id });
    return res;
  }
  @logFn()
  async delete(
    props: z.infer<typeof schema.delete>
  ): Promise<IAirtimeBeneficiaryDelete> {
    const res = await this.repo.delete({ id: props.beneficiary_id });
    return { msg: "deleted" };
  }
}
