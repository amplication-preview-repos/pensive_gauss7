import * as graphql from "@nestjs/graphql";
import { MallResolverBase } from "./base/mall.resolver.base";
import { Mall } from "./base/Mall";
import { MallService } from "./mall.service";

@graphql.Resolver(() => Mall)
export class MallResolver extends MallResolverBase {
  constructor(protected readonly service: MallService) {
    super(service);
  }
}
