import { Module } from "@nestjs/common";
import { ContactLogModuleBase } from "./base/contactLog.module.base";
import { ContactLogService } from "./contactLog.service";
import { ContactLogController } from "./contactLog.controller";
import { ContactLogResolver } from "./contactLog.resolver";

@Module({
  imports: [ContactLogModuleBase],
  controllers: [ContactLogController],
  providers: [ContactLogService, ContactLogResolver],
  exports: [ContactLogService],
})
export class ContactLogModule {}
