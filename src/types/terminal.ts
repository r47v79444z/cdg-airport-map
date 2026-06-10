/**
 * Terminal-specific types
 */

import { Coordinate, BoundingBox } from './airport';

export type TerminalId = '1' | '2a' | '2b' | '2c' | '2d' | '2e' | '2f' | '2g' | '3';

export interface Terminal {
  id: TerminalId;
  name: string;
  code: string;
  description: string;
  position: Coordinate;
  bounds: BoundingBox;
  floors: number;
  capacity: number;
  airlines: string[];
  mainGates: Gate[];
  services: TerminalService[];
  shops: Shop[];
  restaurants: Restaurant[];
  lounges: Lounge[];
  connections: TerminalConnection[];
  accessibility: AccessibilityInfo;
  imageUrl?: string;
  architecture?: ArchitectureInfo;
}

export interface ArchitectureInfo {
  style: string;
  yearBuilt: number;
  iconic: boolean;
  description: string;
}

export interface Gate {
  id: string;
  number: string;
  terminal: TerminalId;
  zone: string;
  position: Coordinate;
  capacity: number;
  type: 'departure' | 'arrival' | 'mixed';
  status: 'available' | 'boarding' | 'closed';
  hasAirBridge: boolean;
  nearbyServices: string[];
}

export interface TerminalService {
  id: string;
  name: string;
  type: 'security' | 'customs' | 'baggage' | 'information' | 'assistance' | 'wifi' | 'charging' | 'medical' | 'vat-refund' | 'currency-exchange';
  location: string;
  description: string;
  hours: string;
  icon?: string;
}

export interface Shop {
  id: string;
  name: string;
  type: 'duty-free' | 'luxury' | 'fashion' | 'electronics' | 'books' | 'pharma' | 'souvenirs' | 'accessories';
  brand?: string;
  terminal: TerminalId;
  zone: string;
  floor?: number;
  description: string;
  products: string[];
  hours: string;
  position: Coordinate;
}

export interface Restaurant {
  id: string;
  name: string;
  type: 'fine-dining' | 'casual' | 'fast-food' | 'cafe' | 'bakery' | 'bar' | 'lounge-dining';
  cuisine?: string;
  terminal: TerminalId;
  zone: string;
  floor?: number;
  description: string;
  priceRange: '€' | '€€' | '€€€';
  hours: string;
  position: Coordinate;
  seating: number;
}

export interface Lounge {
  id: string;
  name: string;
  operator: string;
  terminal: TerminalId;
  zone: string;
  floor?: number;
  description: string;
  capacity: number;
  amenities: string[];
  accessConditions: AccessCondition[];
  hours: string;
  position: Coordinate;
}

export interface AccessCondition {
  type: 'business-class' | 'first-class' | 'airline-member' | 'credit-card' | 'paid' | 'transfer' | 'public';
  description: string;
  airlines?: string[];
}

export interface TerminalConnection {
  type: 'walkway' | 'shuttle' | 'train' | 'elevator' | 'stairs';
  to: TerminalId;
  duration: number; // minutes
  description?: string;
}

export interface AccessibilityInfo {
  wheelchairAccess: boolean;
  elevators: boolean;
  accessibleRestrooms: boolean;
  assistancePoints: string[];
  parkingForDisabled: boolean;
}

export interface TerminalDetail {
  terminal: Terminal;
  statistics: {
    totalFloors: number;
    totalGates: number;
    totalShops: number;
    totalRestaurants: number;
    totalLounges: number;
  };
  highlights: string[];
}
