import { TimelineContent } from "../../../types/standard";
import { ColourSettings } from "../VerticalTimelineContents/types";

export interface VerticalTimelineProps {
  secendaryBackground?: boolean;
  timelineContent: TimelineContent;
  colourSettings?: ColourSettings;
}
