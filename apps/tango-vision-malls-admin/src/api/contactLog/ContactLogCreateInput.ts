import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type ContactLogCreateInput = {
  contactDate?: Date | null;
  contactMethod?: string | null;
  contactReason?: string | null;
  logId?: number | null;
  notes?: string | null;
  tenant?: TenantWhereUniqueInput | null;
};
