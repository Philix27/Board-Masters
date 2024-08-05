import { db } from "@server/db";
import { beneficiarySchema } from "@server/db/schema";
import { eq } from "drizzle-orm";
import { AppError, logFn } from "@server/lib";
import { HttpStatusCode } from "axios";

export class BeneficiaryRepository {
  @logFn()
  async getById(params: { id: number }) {
    try {
      const res = await db.query.beneficiarySchema.findFirst({
        where: (user, { eq }) => eq(beneficiarySchema.id, params.id),
        columns: {
          id: true,
        },
      });
      return res;
    } catch (error) {
      throw new AppError(
        "Oops an error occurred",
        HttpStatusCode.InternalServerError,
        error
      );
    }
  }
  @logFn()
  async getAll(params: { user_id: number }) {
    try {
      const res = await db.query.beneficiarySchema.findMany({
        where: (user, { eq }) => eq(beneficiarySchema.user_id, params.user_id),
        columns: {
          id: true,
          phone: true,
          title: true,
        },
      });
      return res;
    } catch (error) {
      throw new AppError(
        "Oops an error occurred",
        HttpStatusCode.InternalServerError,
        error
      );
    }
  }
  @logFn()
  async create(params: { phone: string; title: string; user_id: number }) {
    try {
      const res = await db.insert(beneficiarySchema).values({
        phone: params.phone,
        title: params.title,
        user_id: params.user_id,
      });
      return { msg: "success" };
    } catch (error) {
      throw new AppError(
        "Oops an error occurred",
        HttpStatusCode.InternalServerError,
        error
      );
    }
  }
  @logFn()
  async delete(params: { id: number }) {
    try {
      const res = await db
        .delete(beneficiarySchema)
        .where(eq(beneficiarySchema.id, params.id))
        .returning();
      return res;
    } catch (error) {
      throw new AppError(
        "Oops an error occurred",
        HttpStatusCode.InternalServerError,
        error
      );
    }
  }
}
