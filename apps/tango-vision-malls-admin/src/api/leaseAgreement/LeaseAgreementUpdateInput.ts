import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type LeaseAgreementUpdateInput = {
  leaseEndDate?: Date | null;
  leaseId?: number | null;
  leaseStartDate?: Date | null;
  leaseTerms?: string | null;
  monthlyRent?: number | null;
  renewalOptions?: string | null;
  securityDeposit?: number | null;
  space?: SpaceWhereUniqueInput | null;
  tenant?: TenantWhereUniqueInput | null;
  terminationClause?: string | null;
};
