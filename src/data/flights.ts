/**
 * Mock Flight Data - Realistic CDG Flight Simulation
 */

import { Flight, Airline, Aircraft, Airport, FlightStatus } from '../types';

const airlines: Record<string, Airline> = {
  AF: {
    code: 'AF',
    name: 'Air France',
    callsign: 'AIRFRANS',
    logo: '🇫🇷',
    alliance: 'sky-team',
  },
  BA: {
    code: 'BA',
    name: 'British Airways',
    callsign: 'SPEEDBIRD',
    logo: '🇬🇧',
    alliance: 'oneworld',
  },
  LH: {
    code: 'LH',
    name: 'Lufthansa',
    callsign: 'LUFTHANSA',
    logo: '🇩🇪',
    alliance: 'star-alliance',
  },
  UA: {
    code: 'UA',
    name: 'United Airlines',
    callsign: 'UNITED',
    logo: '🇺🇸',
    alliance: 'star-alliance',
  },
  DL: {
    code: 'DL',
    name: 'Delta Air Lines',
    callsign: 'DELTA',
    logo: '🇺🇸',
    alliance: 'sky-team',
  },
  AA: {
    code: 'AA',
    name: 'American Airlines',
    callsign: 'AMERICAN',
    logo: '🇺🇸',
    alliance: 'oneworld',
  },
  JL: {
    code: 'JL',
    name: 'Japan Airlines',
    callsign: 'JAPAN AIR',
    logo: '🇯🇵',
    alliance: 'oneworld',
  },
  NH: {
    code: 'NH',
    name: 'ANA',
    callsign: 'ALL NIPPON',
    logo: '🇯🇵',
    alliance: 'star-alliance',
  },
};

const airports: Record<string, Airport> = {
  CDG: { code: 'CDG', name: 'Paris Charles de Gaulle', city: 'Paris', country: 'France', timezone: 'CET' },
  LHR: { code: 'LHR', name: 'London Heathrow', city: 'London', country: 'UK', timezone: 'GMT' },
  FRA: { code: 'FRA', name: 'Frankfurt', city: 'Frankfurt', country: 'Germany', timezone: 'CET' },
  JFK: { code: 'JFK', name: 'New York JFK', city: 'New York', country: 'USA', timezone: 'EST' },
  ORY: { code: 'ORY', name: 'Paris Orly', city: 'Paris', country: 'France', timezone: 'CET' },
  MAD: { code: 'MAD', name: 'Madrid', city: 'Madrid', country: 'Spain', timezone: 'CET' },
  FCO: { code: 'FCO', name: 'Rome Fiumicino', city: 'Rome', country: 'Italy', timezone: 'CET' },
  NRT: { code: 'NRT', name: 'Tokyo Narita', city: 'Tokyo', country: 'Japan', timezone: 'JST' },
};

const aircraft: Record<string, Aircraft> = {
  'A380': {
    type: 'Airbus A380',
    manufacturer: 'Airbus',
    model: 'A380',
    capacity: 550,
    range: 15000,
  },
  'B777': {
    type: 'Boeing 777',
    manufacturer: 'Boeing',
    model: '777-300ER',
    capacity: 350,
    range: 14700,
  },
  'B787': {
    type: 'Boeing 787',
    manufacturer: 'Boeing',
    model: '787-9',
    capacity: 290,
    range: 14010,
  },
  'A350': {
    type: 'Airbus A350',
    manufacturer: 'Airbus',
    model: 'A350-900',
    capacity: 325,
    range: 15000,
  },
};

const flightRoutes = [
  { airline: 'AF', departure: airports.CDG, arrival: airports.LHR, distance: 215, duration: 75 },
  { airline: 'AF', departure: airports.CDG, arrival: airports.JFK, distance: 5837, duration: 480 },
  { airline: 'AF', departure: airports.CDG, arrival: airports.NRT, distance: 9740, duration: 615 },
  { airline: 'BA', departure: airports.LHR, arrival: airports.CDG, distance: 215, duration: 75 },
  { airline: 'LH', departure: airports.FRA, arrival: airports.CDG, distance: 450, duration: 90 },
  { airline: 'UA', departure: airports.CDG, arrival: airports.JFK, distance: 5837, duration: 480 },
  { airline: 'DL', departure: airports.CDG, arrival: airports.JFK, distance: 5837, duration: 490 },
];

export function generateMockFlights(): Flight[] {
  const now = new Date();
  const flights: Flight[] = [];
  const statuses: FlightStatus[] = ['scheduled', 'boarding', 'boarding-complete', 'departed', 'in-flight', 'landed', 'delayed'];
  
  const terminals = ['1', '2e', '2f', '2g'] as const;
  const gates = ['1A', '1B', '2A', '3A', '10K', '20L', '30M', 'F21', 'F41', 'G1'];
  
  // Generate 30 mock flights
  for (let i = 0; i < 30; i++) {
    const route = flightRoutes[i % flightRoutes.length];
    const airline = airlines[route.airline];
    const flightNum = `${route.airline}${1000 + i}`;
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const departureTime = new Date(now.getTime() + Math.random() * 86400000 * 7);
    const arrivalTime = new Date(departureTime.getTime() + route.duration * 60000);
    
    flights.push({
      id: `flight-${i}`,
      flightNumber: flightNum,
      airline,
      aircraft: aircraft[Object.keys(aircraft)[i % Object.keys(aircraft).length]],
      direction: Math.random() > 0.5 ? 'departure' : 'arrival',
      departure: {
        scheduled: departureTime,
        actual: status === 'departed' || status === 'in-flight' || status === 'landed' ? new Date(departureTime.getTime() + 5 * 60000) : undefined,
        estimated: status === 'delayed' ? new Date(departureTime.getTime() + 30 * 60000) : undefined,
      },
      arrival: {
        scheduled: arrivalTime,
        actual: status === 'landed' ? new Date(arrivalTime.getTime() - 10 * 60000) : undefined,
      },
      status,
      gate: {
        id: `gate-${i}`,
        number: gates[i % gates.length],
        terminal: terminals[i % terminals.length] as any,
        zone: `Zone ${String.fromCharCode(65 + (i % 3))}`,
        position: { x: 100 + Math.random() * 300, y: 100 + Math.random() * 200 },
        capacity: 300,
        type: 'mixed',
        status: 'available',
        hasAirBridge: Math.random() > 0.2,
        nearbyServices: ['wifi', 'charging', 'cafe'],
      },
      terminal: terminals[i % terminals.length],
      origin: route.departure,
      destination: route.arrival,
      distance: route.distance,
      duration: route.duration,
      delay: status === 'delayed' ? 30 : undefined,
      passengers: Math.floor(200 + Math.random() * 350),
      crew: Math.floor(10 + Math.random() * 20),
    });
  }
  
  return flights;
}

export const mockFlights = generateMockFlights();
