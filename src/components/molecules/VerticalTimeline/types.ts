export interface VerticalTimelineProps {
  secendaryBackground?: boolean;
  timelineContent: {
    title: string;
    description: string;
    contents: {
      title: string;
      description: string;
      attributes: {
        attributeName: string;
      }[];
    }[];
  };
  colourSettings?: ColourSettings;
}

export type ColourKey = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

export type ColourSettings = Partial<Record<ColourKey, string>>;
