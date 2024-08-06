ALTER TABLE "beneficiary" RENAME TO "airtimeBeneficiary";--> statement-breakpoint
ALTER TABLE "airtimeBeneficiary" DROP CONSTRAINT "beneficiary_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "airtimeBeneficiary" ALTER COLUMN "title" SET NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "airtimeBeneficiary" ADD CONSTRAINT "airtimeBeneficiary_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
