import { ContactLogUpdateManyWithoutTenantsInput } from "./ContactLogUpdateManyWithoutTenantsInput";
import { LeaseAgreementUpdateManyWithoutTenantsInput } from "./LeaseAgreementUpdateManyWithoutTenantsInput";
import { MaintenanceRequestUpdateManyWithoutTenantsInput } from "./MaintenanceRequestUpdateManyWithoutTenantsInput";
import { PaymentUpdateManyWithoutTenantsInput } from "./PaymentUpdateManyWithoutTenantsInput";

export type TenantUpdateInput = {
  businessType?: string | null;
  contactLogs?: ContactLogUpdateManyWithoutTenantsInput;
  contactNumber?: string | null;
  contactPerson?: string | null;
  email?: string | null;
  leaseAgreements?: LeaseAgreementUpdateManyWithoutTenantsInput;
  maintenanceRequests?: MaintenanceRequestUpdateManyWithoutTenantsInput;
  moveInDate?: Date | null;
  name?: string | null;
  payments?: PaymentUpdateManyWithoutTenantsInput;
  status?: "Option1" | null;
  tenantId?: number | null;
};
