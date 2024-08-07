import { Module } from "@nestjs/common";
import { SpaceModuleBase } from "./base/space.module.base";
import { SpaceService } from "./space.service";
import { SpaceController } from "./space.controller";
import { SpaceResolver } from "./space.resolver";

@Module({
  imports: [SpaceModuleBase],
  controllers: [SpaceController],
  providers: [SpaceService, SpaceResolver],
  exports: [SpaceService],
})
export class SpaceModule {}
