import { SpaceWhereInput } from "./SpaceWhereInput";
import { SpaceOrderByInput } from "./SpaceOrderByInput";

export type SpaceFindManyArgs = {
  where?: SpaceWhereInput;
  orderBy?: Array<SpaceOrderByInput>;
  skip?: number;
  take?: number;
};
