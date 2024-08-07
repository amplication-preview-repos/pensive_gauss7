import { LeaseAgreementCreateNestedManyWithoutSpacesInput } from "./LeaseAgreementCreateNestedManyWithoutSpacesInput";
import { MaintenanceRequestCreateNestedManyWithoutSpacesInput } from "./MaintenanceRequestCreateNestedManyWithoutSpacesInput";

export type SpaceCreateInput = {
  amenities?: string | null;
  availability?: "Option1" | null;
  leaseAgreements?: LeaseAgreementCreateNestedManyWithoutSpacesInput;
  location?: string | null;
  maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutSpacesInput;
  monthlyRent?: number | null;
  size?: number | null;
  spaceId?: number | null;
  typeField?: string | null;
};
