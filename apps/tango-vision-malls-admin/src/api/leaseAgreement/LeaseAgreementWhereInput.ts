import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type LeaseAgreementWhereInput = {
  id?: StringFilter;
  leaseEndDate?: DateTimeNullableFilter;
  leaseId?: IntNullableFilter;
  leaseStartDate?: DateTimeNullableFilter;
  leaseTerms?: StringNullableFilter;
  monthlyRent?: FloatNullableFilter;
  renewalOptions?: StringNullableFilter;
  securityDeposit?: FloatNullableFilter;
  space?: SpaceWhereUniqueInput;
  tenant?: TenantWhereUniqueInput;
  terminationClause?: StringNullableFilter;
};
