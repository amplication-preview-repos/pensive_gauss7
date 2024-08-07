import { LeaseAgreementWhereInput } from "./LeaseAgreementWhereInput";
import { LeaseAgreementOrderByInput } from "./LeaseAgreementOrderByInput";

export type LeaseAgreementFindManyArgs = {
  where?: LeaseAgreementWhereInput;
  orderBy?: Array<LeaseAgreementOrderByInput>;
  skip?: number;
  take?: number;
};
