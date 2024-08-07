import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lease?: SortOrder;
  paymentDate?: SortOrder;
  paymentId?: SortOrder;
  paymentMethod?: SortOrder;
  paymentStatus?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
