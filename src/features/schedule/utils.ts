import { ScheduleEvent, ProcessedEvent, EventCategory, EventPosition, TimeSlot } from './types';

// Convert time string to minutes from start of day
export function timeToMinutes(timeStr: string): number {
  const [time, period] = timeStr.split(' ');
  const [hours, minutes] = time.split(':').map(Number);
  
  let totalHours = hours;
  if (period === 'PM' && hours !== 12) {
    totalHours += 12;
  } else if (period === 'AM' && hours === 12) {
    totalHours = 0;
  }
  
  return totalHours * 60 + minutes;
}

// Convert minutes to time string
export function minutesToTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  
  return `${displayHours}:${mins.toString().padStart(2, '0')} ${period}`;
}

// Determine event category based on activity name
export function categorizeEvent(activity: string): EventCategory {
  const activityLower = activity.toLowerCase();
  
  if (activityLower.includes('ceremony') || activityLower.includes('opening') || activityLower.includes('closing')) {
    return 'ceremony';
  }
  if (activityLower.includes('speaker') || activityLower.includes('talk')) {
    return 'speaker';
  }
  if (activityLower.includes('lunch') || activityLower.includes('breakfast') || activityLower.includes('meal')) {
    return 'meal';
  }
  if (activityLower.includes('networking') || activityLower.includes('clubs') || activityLower.includes('research') || activityLower.includes('start-up')) {
    return 'networking';
  }
  return 'activity';
}

// Get color scheme for event category
export function getCategoryColors(category: EventCategory): { bg: string; border: string; text: string } {
  switch (category) {
    case 'ceremony':
      return { bg: 'bg-red-100', border: 'border-red-300', text: 'text-red-800' };
    case 'speaker':
      return { bg: 'bg-blue-100', border: 'border-blue-300', text: 'text-blue-800' };
    case 'meal':
      return { bg: 'bg-green-100', border: 'border-green-300', text: 'text-green-800' };
    case 'networking':
      return { bg: 'bg-purple-100', border: 'border-purple-300', text: 'text-purple-800' };
    case 'activity':
      return { bg: 'bg-yellow-100', border: 'border-yellow-300', text: 'text-yellow-800' };
    default:
      return { bg: 'bg-gray-100', border: 'border-gray-300', text: 'text-gray-800' };
  }
}

// Generate timeline slots
export function generateTimeSlots(startHour: number = 9, endHour: number = 17): TimeSlot[] {
  const slots: TimeSlot[] = [];
  
  for (let hour = startHour; hour <= endHour; hour++) {
    const minutes = hour * 60;
    slots.push({
      time: minutesToTime(minutes),
      hour24: hour,
      minute: 0
    });
  }
  
  return slots;
}

// Calculate event positions for timeline layout
export function calculateEventPositions(events: ScheduleEvent[]): ProcessedEvent[] {
  const PIXELS_PER_MINUTE = 2; // 2 pixels per minute
  const START_TIME = 9 * 60; // 9:00 AM in minutes
  const MAX_COLUMNS = 3; // Maximum number of columns to display
  
  // Group events by location to determine columns (only for events without explicit column)
  const locationGroups = new Map<string, ScheduleEvent[]>();
  const eventsWithoutColumn = events.filter(event => event.column === undefined);
  
  eventsWithoutColumn.forEach(event => {
    const location = event.location;
    if (!locationGroups.has(location)) {
      locationGroups.set(location, []);
    }
    locationGroups.get(location)!.push(event);
  });
  
  // Assign columns based on location priority - limit to MAX_COLUMNS
  const locationToColumn = new Map<string, number>();
  const priorityLocations = ['Hall of Flags', 'ENB Hall of Flags', 'Room 109', 'Room 116', 'Room 118'];
  
  let columnIndex = 0;
  priorityLocations.forEach(location => {
    if (locationGroups.has(location) && columnIndex < MAX_COLUMNS) {
      locationToColumn.set(location, columnIndex);
      columnIndex++;
    }
  });
  
  // Assign remaining locations to available columns
  locationGroups.forEach((_, location) => {
    if (!locationToColumn.has(location)) {
      // Find the column with the least events or use round-robin
      let targetColumn = 0;
      let minEvents = Infinity;
      
      for (let col = 0; col < MAX_COLUMNS; col++) {
        const eventsInColumn = Array.from(locationToColumn.entries())
          .filter(([, column]) => column === col)
          .reduce((sum, [loc]) => sum + (locationGroups.get(loc)?.length || 0), 0);
        
        if (eventsInColumn < minEvents) {
          minEvents = eventsInColumn;
          targetColumn = col;
        }
      }
      
      locationToColumn.set(location, targetColumn);
    }
  });
  
  return events.map((event, index) => {
    const startMinutes = timeToMinutes(event.start_time);
    const endMinutes = timeToMinutes(event.end_time);
    const duration = endMinutes - startMinutes;
    
    // Use explicit column if specified, otherwise use location-based assignment
    let assignedColumn = 0;
    if (event.column !== undefined) {
      // Use explicit column (ensure it's within bounds)
      assignedColumn = Math.max(0, Math.min(event.column, MAX_COLUMNS - 1));
    } else {
      // Use location-based assignment
      assignedColumn = locationToColumn.get(event.location) || 0;
    }
    
    const position: EventPosition = {
      top: (startMinutes - START_TIME) * PIXELS_PER_MINUTE,
      height: duration * PIXELS_PER_MINUTE,
      column: assignedColumn
    };
    
    return {
      ...event,
      id: `event-${index}`,
      category: categorizeEvent(event.activity),
      position
    };
  });
}

// Check if two events overlap in time
export function eventsOverlap(event1: ScheduleEvent, event2: ScheduleEvent): boolean {
  const start1 = timeToMinutes(event1.start_time);
  const end1 = timeToMinutes(event1.end_time);
  const start2 = timeToMinutes(event2.start_time);
  const end2 = timeToMinutes(event2.end_time);
  
  return start1 < end2 && start2 < end1;
}
