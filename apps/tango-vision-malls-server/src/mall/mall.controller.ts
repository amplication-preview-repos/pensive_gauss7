import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MallService } from "./mall.service";
import { MallControllerBase } from "./base/mall.controller.base";

@swagger.ApiTags("malls")
@common.Controller("malls")
export class MallController extends MallControllerBase {
  constructor(protected readonly service: MallService) {
    super(service);
  }
}
