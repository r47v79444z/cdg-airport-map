/**
 * Flight and gate assignment types
 */

import { TerminalId, Gate } from './terminal';

export type FlightStatus = 'scheduled' | 'boarding' | 'boarding-complete' | 'departed' | 'in-flight' | 'landed' | 'delayed' | 'cancelled';
export type FlightDirection = 'departure' | 'arrival';

export interface Flight {
  id: string;
  flightNumber: string;
  airline: Airline;
  aircraft: Aircraft;
  direction: FlightDirection;
  departure?: FlightTime;
  arrival?: FlightTime;
  status: FlightStatus;
  gate?: Gate;
  terminal: TerminalId;
  origin: Airport;
  destination: Airport;
  distance: number; // km
  duration: number; // minutes
  delay?: number; // minutes
  passengers: number;
  crew: number;
}

export interface FlightTime {
  scheduled: Date;
  actual?: Date;
  estimated?: Date;
}

export interface Airline {
  code: string;
  name: string;
  callsign: string;
  logo?: string;
  alliance?: 'star-alliance' | 'sky-team' | 'oneworld' | 'independent';
}

export interface Aircraft {
  type: string;
  manufacturer: string;
  model: string;
  registration?: string;
  capacity: number;
  range: number;
}

export interface Airport {
  code: string;
  name: string;
  city: string;
  country: string;
  timezone: string;
}

export interface GateAssignment {
  gateId: string;
  flightId: string;
  assignedAt: Date;
  assignedBy: string;
  terminal: TerminalId;
  changedTimes: number;
}

export interface FlightSearchResult {
  flights: Flight[];
  terminal?: TerminalId;
  gate?: string;
  date?: Date;
  totalCount: number;
}

export interface QueueStatus {
  location: string;
  terminal: TerminalId;
  waitTime: number; // minutes
  queued: number;
  capacity: number;
  status: 'normal' | 'busy' | 'very-busy';
  lastUpdate: Date;
}

export interface FlightHistory {
  gateId: string;
  flights: FlightHistoryEntry[];
}

export interface FlightHistoryEntry {
  flightNumber: string;
  airline: string;
  direction: FlightDirection;
  time: Date;
  destination?: string;
  origin?: string;
}
