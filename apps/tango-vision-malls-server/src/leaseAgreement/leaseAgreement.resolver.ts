import * as graphql from "@nestjs/graphql";
import { LeaseAgreementResolverBase } from "./base/leaseAgreement.resolver.base";
import { LeaseAgreement } from "./base/LeaseAgreement";
import { LeaseAgreementService } from "./leaseAgreement.service";

@graphql.Resolver(() => LeaseAgreement)
export class LeaseAgreementResolver extends LeaseAgreementResolverBase {
  constructor(protected readonly service: LeaseAgreementService) {
    super(service);
  }
}
