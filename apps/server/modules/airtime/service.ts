import { env } from "process";
import { AirtimeRepository } from "./repo";
import AfricasTalking from "africastalking";
import { logFn } from "@server/lib";

export class AirtimePlanService {
  constructor(private readonly repo: AirtimeRepository) {}

  @logFn()
  async getAll() {
    const res = await this.repo.getAll();
    return res;
  }

  @logFn()
  async sendAirtime(props: { amount: number; phone: string }) {
    const instance = new AfricasTalking({
      apiKey: env.AFRICA_TALKING_KEY,
      username: env.AFRICA_TALKING_USERNAME,
    });

    const airtime = instance.AIRTIME;

    const options = {
      recipients: [
        {
          phoneNumber: "+".concat(props.phone),
          currencyCode: "NGN",
          amount: props.amount,
        },
      ],
    };

    try {
      airtime.send(options);
    } catch (error) {}
  }
}
