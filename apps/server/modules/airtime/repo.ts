import { db, airtimePlanSchema } from '@server/db';

export class AirtimeRepository {
  async getAll() {
    try {
      const res = await db.query.airtimePlanSchema.findMany({
        columns: {
          amount: true,
          network: true,
        },
      });
      return res;
    } catch (error) {
      throw new Error('Oops an error ocurred');
    }
  }
}
