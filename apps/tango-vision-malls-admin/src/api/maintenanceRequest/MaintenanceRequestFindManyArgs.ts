import { MaintenanceRequestWhereInput } from "./MaintenanceRequestWhereInput";
import { MaintenanceRequestOrderByInput } from "./MaintenanceRequestOrderByInput";

export type MaintenanceRequestFindManyArgs = {
  where?: MaintenanceRequestWhereInput;
  orderBy?: Array<MaintenanceRequestOrderByInput>;
  skip?: number;
  take?: number;
};
