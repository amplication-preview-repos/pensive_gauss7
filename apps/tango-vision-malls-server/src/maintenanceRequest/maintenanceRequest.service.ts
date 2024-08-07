import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MaintenanceRequestServiceBase } from "./base/maintenanceRequest.service.base";

@Injectable()
export class MaintenanceRequestService extends MaintenanceRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
