import { ContactLog as TContactLog } from "../api/contactLog/ContactLog";

export const CONTACTLOG_TITLE_FIELD = "contactMethod";

export const ContactLogTitle = (record: TContactLog): string => {
  return record.contactMethod?.toString() || String(record.id);
};
