import { SortOrder } from "../../util/SortOrder";

export type MaintenanceRequestOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  issueDescription?: SortOrder;
  requestDate?: SortOrder;
  requestId?: SortOrder;
  resolutionDate?: SortOrder;
  spaceId?: SortOrder;
  status?: SortOrder;
  tenantId?: SortOrder;
  updatedAt?: SortOrder;
};
