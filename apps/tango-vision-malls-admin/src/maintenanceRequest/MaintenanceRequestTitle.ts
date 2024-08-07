import { MaintenanceRequest as TMaintenanceRequest } from "../api/maintenanceRequest/MaintenanceRequest";

export const MAINTENANCEREQUEST_TITLE_FIELD = "id";

export const MaintenanceRequestTitle = (
  record: TMaintenanceRequest
): string => {
  return record.id?.toString() || String(record.id);
};
