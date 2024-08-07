import { Space } from "../space/Space";
import { Tenant } from "../tenant/Tenant";

export type MaintenanceRequest = {
  createdAt: Date;
  id: string;
  issueDescription: string | null;
  requestDate: Date | null;
  requestId: number | null;
  resolutionDate: Date | null;
  space?: Space | null;
  status?: "Option1" | null;
  tenant?: Tenant | null;
  updatedAt: Date;
};
