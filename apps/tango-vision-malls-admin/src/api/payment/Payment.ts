import { Tenant } from "../tenant/Tenant";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  lease: string | null;
  paymentDate: Date | null;
  paymentId: number | null;
  paymentMethod: string | null;
  paymentStatus?: "Option1" | null;
  tenant?: Tenant | null;
  updatedAt: Date;
};
