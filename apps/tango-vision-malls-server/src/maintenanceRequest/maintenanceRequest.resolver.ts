import * as graphql from "@nestjs/graphql";
import { MaintenanceRequestResolverBase } from "./base/maintenanceRequest.resolver.base";
import { MaintenanceRequest } from "./base/MaintenanceRequest";
import { MaintenanceRequestService } from "./maintenanceRequest.service";

@graphql.Resolver(() => MaintenanceRequest)
export class MaintenanceRequestResolver extends MaintenanceRequestResolverBase {
  constructor(protected readonly service: MaintenanceRequestService) {
    super(service);
  }
}
