import { MallWhereInput } from "./MallWhereInput";
import { MallOrderByInput } from "./MallOrderByInput";

export type MallFindManyArgs = {
  where?: MallWhereInput;
  orderBy?: Array<MallOrderByInput>;
  skip?: number;
  take?: number;
};
