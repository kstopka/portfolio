import { ContentItem } from "../../../types/standard";

export interface VerticalTimelineContentsProps {
  contents: ContentItem[];
  colourSettings?: ColourSettings;
}

export type ColourKey = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

export type ColourSettings = Partial<Record<ColourKey, string>>;
