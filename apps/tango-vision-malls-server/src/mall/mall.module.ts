import { Module } from "@nestjs/common";
import { MallModuleBase } from "./base/mall.module.base";
import { MallService } from "./mall.service";
import { MallController } from "./mall.controller";
import { MallResolver } from "./mall.resolver";

@Module({
  imports: [MallModuleBase],
  controllers: [MallController],
  providers: [MallService, MallResolver],
  exports: [MallService],
})
export class MallModule {}
