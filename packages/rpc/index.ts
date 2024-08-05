import { AirtimeBeneficiaryRpc, AirtimeBeneficiarySchema } from './airtimeBeneficiary';
import { GiftCardRpc, GiftCardSchema } from './giftcard';
import { UserRpc } from './user';

export const AppRpc = {
  airtimeBeneficiary: new AirtimeBeneficiaryRpc(),
  giftCard: new GiftCardRpc(),
  user: new UserRpc(),
};

export const ApiSchema = {
  airtimeBeneficiary: AirtimeBeneficiarySchema,
  giftCard: GiftCardSchema,
};

export * from './airtimeBeneficiary';
export * from './giftcard';
export * from './user';
