import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  lease?: string | null;
  paymentDate?: Date | null;
  paymentId?: number | null;
  paymentMethod?: string | null;
  paymentStatus?: "Option1" | null;
  tenant?: TenantWhereUniqueInput | null;
};
