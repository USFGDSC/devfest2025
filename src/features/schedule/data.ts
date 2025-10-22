import { ScheduleEvent } from './types';

/**
 * Schedule Events Data
 * 
 * COLUMN ASSIGNMENT:
 * - column: 0 = Left column (first column)
 * - column: 1 = Middle column (second column) 
 * - column: 2 = Right column (third column)
 * 
 * If 'column' is not specified, the event will be automatically assigned 
 * based on its location using the priority system.
 * 
 * To manually control where an event appears, simply add:
 * "column": 0, 1, or 2
 */
export const scheduleData: ScheduleEvent[] = [
  {
    "activity": "Check In",
    "start_time": "9:00 AM",
    "end_time": "9:45 AM",
    "location": "Hall of Flags",
    "speaker": "coming soon",
    "column": 0
  },
  {
    "activity": "Opening Ceremony",
    "start_time": "9:30 AM",
    "end_time": "10:00 AM",
    "location": "ENB Hall of Flags",
    "speaker": "coming soon",
    "column": 1
  },
  {
    "activity": "Breakfast",
    "start_time": "9:00 AM",
    "end_time": "10:00 AM",
    "location": "ENB Hall of Flags",
    "speaker": "coming soon",
    "column": 2
  },
  {
    "activity": "Speaker - Xiaoquan Kong (AI)",
    "start_time": "10:15 AM",
    "end_time": "11:15 AM",
    "location": "Room 109",
    "speaker": "Xiaoquan Kong"
  },
  {
    "activity": "Speaker - Rich Foltak (E)",
    "start_time": "10:15 AM",
    "end_time": "11:15 AM",
    "location": "Room 116",
    "speaker": "Rich Foltak"
  },
  {
    "activity": "Speaker - James Gress (C)",
    "start_time": "10:15 AM",
    "end_time": "11:15 AM",
    "location": "Room 118",
    "speaker": "James Gress"
  },
  {
    "activity": "Speaker - Laurence Svekis (AI)",
    "start_time": "11:30 AM",
    "end_time": "12:30 PM",
    "location": "Room 109",
    "speaker": "Laurence Svekis"
  },
  {
    "activity": "Speaker - Gerardo Sanchez (E)",
    "start_time": "11:30 AM",
    "end_time": "12:30 PM",
    "location": "Room 116",
    "speaker": "Gerardo Sanchez"
  },
  {
    "activity": "Clubs, Research Labs, Start-ups",
    "start_time": "11:30 AM",
    "end_time": "12:30 PM",
    "location": "Hall of Flags",
    "speaker": "coming soon"
  },
  {
    "activity": "Lunch",
    "start_time": "12:30 PM",
    "end_time": "1:45 PM",
    "location": "Room 109",
    "speaker": "coming soon",
    "column": 1
  },
  {
    "activity": "Clubs, Research Labs, Start-ups",
    "start_time": "12:30 PM",
    "end_time": "1:45 PM",
    "location": "Hall of Flags",
    "speaker": "coming soon"
  },
  {
    "activity": "Speaker - Noble Ackerson (AI)",
    "start_time": "2:00 PM",
    "end_time": "3:00 PM",
    "location": "Room 118",
    "speaker": "Noble Ackerson"
  },
  {
    "activity": "Speaker - Carlos Vasquez (E)",
    "start_time": "3:15 PM",
    "end_time": "4:15 PM",
    "location": "Room 118",
    "speaker": "Carlos Vasquez"
  },
  {
    "activity": "Speaker - Modupe Ajala (C)",
    "start_time": "3:15 PM",
    "end_time": "4:15 PM",
    "location": "Room 116",
    "speaker": "Modupe Ajala"
  },
  {
    "activity": "PD Table",
    "start_time": "2:00 PM",
    "end_time": "3:00 PM",
    "location": "Hall of Flags",
    "speaker": "coming soon",
    "column": 1
  },
  {
    "activity": "PD Table",
    "start_time": "3:15 PM",
    "end_time": "4:15 PM",
    "location": "Hall of Flags",
    "speaker": "coming soon"
  },
  {
    "activity": "Clubs, Research Labs, Start-ups",
    "start_time": "10:15 AM",
    "end_time": "11:15 AM",
    "location": "Hall of Flags",
    "speaker": "coming soon"
  },
  {
    "activity": "Clubs, Research Labs, Start-ups",
    "start_time": "2:00 PM",
    "end_time": "3:00 PM",
    "location": "Hall of Flags",
    "speaker": "coming soon"
  },
  {
    "activity": "Closing Ceremony",
    "start_time": "4:30 PM",
    "end_time": "5:00 PM",
    "location": "ENB Hall of Flags",
    "speaker": "coming soon"
  }
];
