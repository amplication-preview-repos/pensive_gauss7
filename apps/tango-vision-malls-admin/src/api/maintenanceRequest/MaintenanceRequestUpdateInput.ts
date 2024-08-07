import { SpaceWhereUniqueInput } from "../space/SpaceWhereUniqueInput";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type MaintenanceRequestUpdateInput = {
  issueDescription?: string | null;
  requestDate?: Date | null;
  requestId?: number | null;
  resolutionDate?: Date | null;
  space?: SpaceWhereUniqueInput | null;
  status?: "Option1" | null;
  tenant?: TenantWhereUniqueInput | null;
};
