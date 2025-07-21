import { ColourKey } from "./types";

export const getColorKey = (index: number): ColourKey =>
  (((index % 9) + 1) * 10) as ColourKey;
