import { LeaseAgreement as TLeaseAgreement } from "../api/leaseAgreement/LeaseAgreement";

export const LEASEAGREEMENT_TITLE_FIELD = "id";

export const LeaseAgreementTitle = (record: TLeaseAgreement): string => {
  return record.id?.toString() || String(record.id);
};
