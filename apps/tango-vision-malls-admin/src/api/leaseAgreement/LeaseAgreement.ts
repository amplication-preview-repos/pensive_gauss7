import { Space } from "../space/Space";
import { Tenant } from "../tenant/Tenant";

export type LeaseAgreement = {
  createdAt: Date;
  id: string;
  leaseEndDate: Date | null;
  leaseId: number | null;
  leaseStartDate: Date | null;
  leaseTerms: string | null;
  monthlyRent: number | null;
  renewalOptions: string | null;
  securityDeposit: number | null;
  space?: Space | null;
  tenant?: Tenant | null;
  terminationClause: string | null;
  updatedAt: Date;
};
