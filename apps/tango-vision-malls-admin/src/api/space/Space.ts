import { LeaseAgreement } from "../leaseAgreement/LeaseAgreement";
import { MaintenanceRequest } from "../maintenanceRequest/MaintenanceRequest";

export type Space = {
  amenities: string | null;
  availability?: "Option1" | null;
  createdAt: Date;
  id: string;
  leaseAgreements?: Array<LeaseAgreement>;
  location: string | null;
  maintenanceRequests?: Array<MaintenanceRequest>;
  monthlyRent: number | null;
  size: number | null;
  spaceId: number | null;
  typeField: string | null;
  updatedAt: Date;
};
