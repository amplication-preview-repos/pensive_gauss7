import { ContactLog } from "../contactLog/ContactLog";
import { LeaseAgreement } from "../leaseAgreement/LeaseAgreement";
import { MaintenanceRequest } from "../maintenanceRequest/MaintenanceRequest";
import { Payment } from "../payment/Payment";

export type Tenant = {
  businessType: string | null;
  contactLogs?: Array<ContactLog>;
  contactNumber: string | null;
  contactPerson: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  leaseAgreements?: Array<LeaseAgreement>;
  maintenanceRequests?: Array<MaintenanceRequest>;
  moveInDate: Date | null;
  name: string | null;
  payments?: Array<Payment>;
  status?: "Option1" | null;
  tenantId: number | null;
  updatedAt: Date;
};
