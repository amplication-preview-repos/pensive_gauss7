import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MaintenanceRequestService } from "./maintenanceRequest.service";
import { MaintenanceRequestControllerBase } from "./base/maintenanceRequest.controller.base";

@swagger.ApiTags("maintenanceRequests")
@common.Controller("maintenanceRequests")
export class MaintenanceRequestController extends MaintenanceRequestControllerBase {
  constructor(protected readonly service: MaintenanceRequestService) {
    super(service);
  }
}
