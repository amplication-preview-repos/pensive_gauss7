import { Module } from "@nestjs/common";
import { LeaseAgreementModuleBase } from "./base/leaseAgreement.module.base";
import { LeaseAgreementService } from "./leaseAgreement.service";
import { LeaseAgreementController } from "./leaseAgreement.controller";
import { LeaseAgreementResolver } from "./leaseAgreement.resolver";

@Module({
  imports: [LeaseAgreementModuleBase],
  controllers: [LeaseAgreementController],
  providers: [LeaseAgreementService, LeaseAgreementResolver],
  exports: [LeaseAgreementService],
})
export class LeaseAgreementModule {}
