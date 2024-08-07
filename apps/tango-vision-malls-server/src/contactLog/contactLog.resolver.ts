import * as graphql from "@nestjs/graphql";
import { ContactLogResolverBase } from "./base/contactLog.resolver.base";
import { ContactLog } from "./base/ContactLog";
import { ContactLogService } from "./contactLog.service";

@graphql.Resolver(() => ContactLog)
export class ContactLogResolver extends ContactLogResolverBase {
  constructor(protected readonly service: ContactLogService) {
    super(service);
  }
}
