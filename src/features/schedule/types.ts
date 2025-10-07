export interface ScheduleEvent {
  activity: string;
  start_time: string;
  end_time: string;
  location: string;
  speaker: string;
  column?: number; // Optional: manually specify which column (0, 1, or 2)
}

export interface TimeSlot {
  time: string;
  hour24: number;
  minute: number;
}

export interface EventPosition {
  top: number;
  height: number;
  column: number;
}

export type EventCategory = 
  | 'ceremony' 
  | 'speaker' 
  | 'meal' 
  | 'networking' 
  | 'activity';

export interface ProcessedEvent extends ScheduleEvent {
  id: string;
  category: EventCategory;
  position: EventPosition;
}
