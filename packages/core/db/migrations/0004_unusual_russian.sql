CREATE TABLE IF NOT EXISTS "bank_info" (
	"bank_name" text,
	"bank_account_name" text,
	"bank_account_no" text,
	"user_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "transactions" (
	"amount" integer NOT NULL,
	"purpose" text NOT NULL,
	"category" text NOT NULL,
	"user_id" integer NOT NULL,
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "bank_name" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "bank_account_name" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "bank_account_no" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "nin" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "bvn" text;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bank_info" ADD CONSTRAINT "bank_info_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
