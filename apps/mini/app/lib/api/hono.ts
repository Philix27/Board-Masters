import { hc } from "hono/client";

// import { type AppType } from "../../../../server"

// const client = hc<AppType>(process.env.NEXT_PUBLIC_SERVER_URL!)

type AppType = any;
const client: any = hc<AppType>(process.env.NEXT_PUBLIC_SERVER_URL!);

export const ApiClient = client.api;
