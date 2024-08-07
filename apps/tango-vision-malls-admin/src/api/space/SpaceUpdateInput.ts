import { LeaseAgreementUpdateManyWithoutSpacesInput } from "./LeaseAgreementUpdateManyWithoutSpacesInput";
import { MaintenanceRequestUpdateManyWithoutSpacesInput } from "./MaintenanceRequestUpdateManyWithoutSpacesInput";

export type SpaceUpdateInput = {
  amenities?: string | null;
  availability?: "Option1" | null;
  leaseAgreements?: LeaseAgreementUpdateManyWithoutSpacesInput;
  location?: string | null;
  maintenanceRequests?: MaintenanceRequestUpdateManyWithoutSpacesInput;
  monthlyRent?: number | null;
  size?: number | null;
  spaceId?: number | null;
  typeField?: string | null;
};
