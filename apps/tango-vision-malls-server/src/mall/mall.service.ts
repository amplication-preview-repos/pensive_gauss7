import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MallServiceBase } from "./base/mall.service.base";

@Injectable()
export class MallService extends MallServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
