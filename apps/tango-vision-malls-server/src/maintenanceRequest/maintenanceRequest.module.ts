import { Module } from "@nestjs/common";
import { MaintenanceRequestModuleBase } from "./base/maintenanceRequest.module.base";
import { MaintenanceRequestService } from "./maintenanceRequest.service";
import { MaintenanceRequestController } from "./maintenanceRequest.controller";
import { MaintenanceRequestResolver } from "./maintenanceRequest.resolver";

@Module({
  imports: [MaintenanceRequestModuleBase],
  controllers: [MaintenanceRequestController],
  providers: [MaintenanceRequestService, MaintenanceRequestResolver],
  exports: [MaintenanceRequestService],
})
export class MaintenanceRequestModule {}
