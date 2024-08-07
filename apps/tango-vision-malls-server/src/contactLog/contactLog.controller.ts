import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContactLogService } from "./contactLog.service";
import { ContactLogControllerBase } from "./base/contactLog.controller.base";

@swagger.ApiTags("contactLogs")
@common.Controller("contactLogs")
export class ContactLogController extends ContactLogControllerBase {
  constructor(protected readonly service: ContactLogService) {
    super(service);
  }
}
