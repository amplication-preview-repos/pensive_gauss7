import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ContactLogWhereInput = {
  contactDate?: DateTimeNullableFilter;
  contactMethod?: StringNullableFilter;
  contactReason?: StringNullableFilter;
  id?: StringFilter;
  logId?: IntNullableFilter;
  notes?: StringNullableFilter;
  tenant?: TenantWhereUniqueInput;
};
