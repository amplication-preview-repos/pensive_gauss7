import { SortOrder } from "../../util/SortOrder";

export type ContactLogOrderByInput = {
  contactDate?: SortOrder;
  contactMethod?: SortOrder;
  contactReason?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  logId?: SortOrder;
  notes?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
