import { Payment as TPayment } from "../api/payment/Payment";

export const PAYMENT_TITLE_FIELD = "lease";

export const PaymentTitle = (record: TPayment): string => {
  return record.lease?.toString() || String(record.id);
};
