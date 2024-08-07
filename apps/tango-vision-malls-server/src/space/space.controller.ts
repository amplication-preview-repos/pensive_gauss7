import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SpaceService } from "./space.service";
import { SpaceControllerBase } from "./base/space.controller.base";

@swagger.ApiTags("spaces")
@common.Controller("spaces")
export class SpaceController extends SpaceControllerBase {
  constructor(protected readonly service: SpaceService) {
    super(service);
  }
}
