import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TenantWhereUniqueInput } from "../tenant/TenantWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  lease?: StringNullableFilter;
  paymentDate?: DateTimeNullableFilter;
  paymentId?: IntNullableFilter;
  paymentMethod?: StringNullableFilter;
  paymentStatus?: "Option1";
  tenant?: TenantWhereUniqueInput;
};
