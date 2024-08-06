ALTER TABLE "gift_card" DROP CONSTRAINT "gift_card_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "gift_card" ADD COLUMN "creator_wallet_address" text;--> statement-breakpoint
ALTER TABLE "gift_card" DROP COLUMN IF EXISTS "user_id";