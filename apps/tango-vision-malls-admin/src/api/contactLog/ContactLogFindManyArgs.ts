import { ContactLogWhereInput } from "./ContactLogWhereInput";
import { ContactLogOrderByInput } from "./ContactLogOrderByInput";

export type ContactLogFindManyArgs = {
  where?: ContactLogWhereInput;
  orderBy?: Array<ContactLogOrderByInput>;
  skip?: number;
  take?: number;
};
