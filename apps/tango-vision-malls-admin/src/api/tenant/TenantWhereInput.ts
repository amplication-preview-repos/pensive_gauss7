import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContactLogListRelationFilter } from "../contactLog/ContactLogListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LeaseAgreementListRelationFilter } from "../leaseAgreement/LeaseAgreementListRelationFilter";
import { MaintenanceRequestListRelationFilter } from "../maintenanceRequest/MaintenanceRequestListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TenantWhereInput = {
  businessType?: StringNullableFilter;
  contactLogs?: ContactLogListRelationFilter;
  contactNumber?: StringNullableFilter;
  contactPerson?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  leaseAgreements?: LeaseAgreementListRelationFilter;
  maintenanceRequests?: MaintenanceRequestListRelationFilter;
  moveInDate?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  payments?: PaymentListRelationFilter;
  status?: "Option1";
  tenantId?: IntNullableFilter;
};
