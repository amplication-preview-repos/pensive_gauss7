import { Space as TSpace } from "../api/space/Space";

export const SPACE_TITLE_FIELD = "location";

export const SpaceTitle = (record: TSpace): string => {
  return record.location?.toString() || String(record.id);
};
