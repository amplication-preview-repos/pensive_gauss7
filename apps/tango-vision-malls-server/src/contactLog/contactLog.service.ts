import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContactLogServiceBase } from "./base/contactLog.service.base";

@Injectable()
export class ContactLogService extends ContactLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
