import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type MaintenanceRequestWhereInput = {
  id?: StringFilter;
  issueDescription?: StringNullableFilter;
  requestDate?: DateTimeNullableFilter;
  requestId?: IntNullableFilter;
  resolutionDate?: DateTimeNullableFilter;
  space?: SpaceWhereUniqueInput;
  status?: "Option1";
  tenant?: TenantWhereUniqueInput;
};
