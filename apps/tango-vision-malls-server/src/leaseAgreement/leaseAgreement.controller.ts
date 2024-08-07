import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeaseAgreementService } from "./leaseAgreement.service";
import { LeaseAgreementControllerBase } from "./base/leaseAgreement.controller.base";

@swagger.ApiTags("leaseAgreements")
@common.Controller("leaseAgreements")
export class LeaseAgreementController extends LeaseAgreementControllerBase {
  constructor(protected readonly service: LeaseAgreementService) {
    super(service);
  }
}
