ALTER TABLE "gift_card" ALTER COLUMN "purpose" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "gift_card" ALTER COLUMN "purpose" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "gift_card" ADD COLUMN "is_redeem" boolean DEFAULT false;