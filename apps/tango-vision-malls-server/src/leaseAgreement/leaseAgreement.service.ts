import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeaseAgreementServiceBase } from "./base/leaseAgreement.service.base";

@Injectable()
export class LeaseAgreementService extends LeaseAgreementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
