import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaseAgreementListRelationFilter } from "../leaseAgreement/LeaseAgreementListRelationFilter";
import { MaintenanceRequestListRelationFilter } from "../maintenanceRequest/MaintenanceRequestListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type SpaceWhereInput = {
  amenities?: StringNullableFilter;
  availability?: "Option1";
  id?: StringFilter;
  leaseAgreements?: LeaseAgreementListRelationFilter;
  location?: StringNullableFilter;
  maintenanceRequests?: MaintenanceRequestListRelationFilter;
  monthlyRent?: FloatNullableFilter;
  size?: IntNullableFilter;
  spaceId?: IntNullableFilter;
  typeField?: StringNullableFilter;
};
