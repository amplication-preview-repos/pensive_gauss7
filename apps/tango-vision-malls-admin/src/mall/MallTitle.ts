import { Mall as TMall } from "../api/mall/Mall";

export const MALL_TITLE_FIELD = "id";

export const MallTitle = (record: TMall): string => {
  return record.id?.toString() || String(record.id);
};
