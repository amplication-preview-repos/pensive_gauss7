import { SortOrder } from "../../util/SortOrder";

export type LeaseAgreementOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  leaseEndDate?: SortOrder;
  leaseId?: SortOrder;
  leaseStartDate?: SortOrder;
  leaseTerms?: SortOrder;
  monthlyRent?: SortOrder;
  renewalOptions?: SortOrder;
  securityDeposit?: SortOrder;
  spaceId?: SortOrder;
  tenantId?: SortOrder;
  terminationClause?: SortOrder;
  updatedAt?: SortOrder;
};
