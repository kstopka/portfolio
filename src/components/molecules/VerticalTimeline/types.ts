export interface VerticalTimelineProps {
  secendaryBackground?: boolean;
  timelineContent: TimelineContent;
  colourSettings?: ColourSettings;
}

export interface TimelineContent {
  title: string;
  description: string;
  contents: ContentItem[];
}

export interface ContentItem {
  title: string;
  description: string;
  attributes: Attribute[];
}

export type ColourKey = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

export type ColourSettings = Partial<Record<ColourKey, string>>;

export interface Attribute {
  attributeName: string;
}
