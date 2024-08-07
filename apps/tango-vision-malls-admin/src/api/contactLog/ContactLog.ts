import { Tenant } from "../tenant/Tenant";

export type ContactLog = {
  contactDate: Date | null;
  contactMethod: string | null;
  contactReason: string | null;
  createdAt: Date;
  id: string;
  logId: number | null;
  notes: string | null;
  tenant?: Tenant | null;
  updatedAt: Date;
};
