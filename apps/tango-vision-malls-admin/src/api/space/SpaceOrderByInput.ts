import { SortOrder } from "../../util/SortOrder";

export type SpaceOrderByInput = {
  amenities?: SortOrder;
  availability?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  monthlyRent?: SortOrder;
  size?: SortOrder;
  spaceId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
