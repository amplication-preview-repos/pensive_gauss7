import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpaceServiceBase } from "./base/space.service.base";

@Injectable()
export class SpaceService extends SpaceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
