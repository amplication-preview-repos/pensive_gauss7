import * as graphql from "@nestjs/graphql";
import { SpaceResolverBase } from "./base/space.resolver.base";
import { Space } from "./base/Space";
import { SpaceService } from "./space.service";

@graphql.Resolver(() => Space)
export class SpaceResolver extends SpaceResolverBase {
  constructor(protected readonly service: SpaceService) {
    super(service);
  }
}
