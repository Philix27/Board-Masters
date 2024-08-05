import { db, usersSchema } from "@server/db";
import { eq } from "drizzle-orm";

export class UserRepository {
  async getUserById(params: { id: number }) {
    try {
      db.query.usersSchema.findFirst({
        where: (user, { eq }) => eq(usersSchema.id, params.id),
        columns: {
          id: true,
          phone: true,
        },
      });
    } catch (error) {}
  }

  async getUserByPhone(params: { phone: string }) {
    try {
      const res = await db.query.usersSchema.findFirst({
        where: (users, { eq }) => eq(users.phone, params.phone),
        columns: {
          id: true,
          phone: true,
        },
      });
      return res;
    } catch (error) {
      throw new Error("Oops an error ocurred");
    }
  }
  async createUser(params: { phone: string; password: string; bvn: number }) {
    try {
      // const res = await db.insert(usersSchema).values({
      //   phone: params.phone,
      //   password: params.password,
      //   bvn: params.bvn,
      // });
    } catch (error) {
      throw new Error("Could not add to database");
    }
    // todo: Log
  }
  async updateUser(params: {
    id: number;
    first_name?: string;
    last_name?: string;
    country?: string;
    lga?: string;
    state?: string;
  }) {
    // try {
    //   const res = await db
    //     .update(usersSchema)
    //     .set({
    //       last_name: params.last_name,
    //       country: params.country,
    //       lga: params.lga,
    //     })
    //     .where(eq(usersSchema.id, params.id));
    //   // todo: Log
    //   return res;
    // } catch (error) {
    //   // todo: Log
    //   throw new Error("Could not update user profile");
    // }
  }
  async updatePassword(params: { phone: string; newPassword?: string }) {
    // try {
    //   const res = await db
    //     .update(usersSchema)
    //     .set({
    //       password: params.newPassword,
    //     })
    //     .where(eq(usersSchema.phone, params.phone));
    //   // todo: Log
    //   return res;
    // } catch (error) {
    //   // todo: Log
    //   throw new Error("Could not reset password");
    // }
  }
}
