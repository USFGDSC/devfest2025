import { ScheduleEvent } from './types';

/**
 * Schedule Events Data
 * 
 * COLUMN ASSIGNMENT:
 * - column: 0 = First column
 * - column: 1 = Second column 
 * - column: 2 = Third column
 * - column: 3 = Fourth column
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
    "start_time": "11:30 AM",
    "end_time": "12:30 PM",
    "location": "Room 116",
    "speaker": "Xiaoquan Kong",
    "column": 3
  },
  {
    "activity": "PD Table: Resume Review",
    "start_time": "10:00 AM",
    "end_time": "12:30 PM",
    "location": "Hall of Flags",
    "speaker": "coming soon",
    "column": 0
  },
  {
    "activity": "Speaker - Richard Foltak (E)",
    "start_time": "10:15 AM",
    "end_time": "11:15 AM",
    "location": "Room 118",
    "speaker": "Richard Foltak",
    "column": 3
  },
  {
    "activity": "Speaker - James Gress (C)",
    "start_time": "2:00 PM",
    "end_time": "3:00 PM",
    "location": "Room 116",
    "speaker": "James Gress",
    "column": 3
  },
  {
    "activity": "Speaker - Laurence Svekis (AI)",
    "start_time": "2:00 PM",
    "end_time": "3:00 PM",
    "location": "Room 118",
    "speaker": "Laurence Svekis", 
    "column": 2
  },
  {
    "activity": "Speaker - Gerardo Sanchez (E)",
    "start_time": "11:30 AM",
    "end_time": "12:30 PM",
    "location": "Room 118",
    "speaker": "Gerardo Sanchez",
    "column": 2
  },
  {
    "activity": "Clubs, Research Labs, Start-ups",
    "start_time": "11:30 AM",
    "end_time": "12:30 PM",
    "location": "Hall of Flags",
    "speaker": "coming soon",
    "column": 1
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
    "start_time": "10:15 AM",
    "end_time": "11:15 AM",
    "location": "Room 109",
    "speaker": "Noble Ackerson",
    "column": 1
  },
  {
    "activity": "Speaker - Angela Rodriguez",
    "start_time": "10:15 AM",
    "end_time": "11:15 AM",
    "location": "Room 116",
    "speaker": "Angela Rodriguez",
    "column": 2
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
    "speaker": "Modupe Ajala",
    "column": 1
  },
  {
    "activity": "PD Table: Game and Merch",
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
    "speaker": "coming soon",
    "column": 1
  },
  {
    "activity": "PD Table: Game and Merch (Black Jack card game, pickleball throwing, charades)",
    "start_time": "2:00 PM",
    "end_time": "3:00 PM",
    "location": "Hall of Flags",
    "speaker": "coming soon",
    "column": 0
  },
  {
    "activity": "Closing Ceremony",
    "start_time": "4:30 PM",
    "end_time": "5:00 PM",
    "location": "ENB Hall of Flags",
    "speaker": "coming soon"
  }
];
