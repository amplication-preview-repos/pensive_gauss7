import { SortOrder } from "../../util/SortOrder";

export type TenantOrderByInput = {
  businessType?: SortOrder;
  contactNumber?: SortOrder;
  contactPerson?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  moveInDate?: SortOrder;
  name?: SortOrder;
  status?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
