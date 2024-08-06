CREATE TABLE IF NOT EXISTS "users" (
	"wallet_address" text NOT NULL,
	"phone" text,
	"email" text,
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
