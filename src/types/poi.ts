/**
 * Point of Interest types
 */

import { Coordinate } from './airport';
import { TerminalId } from './terminal';

export type POICategory = 
  | 'duty-free'
  | 'luxury'
  | 'restaurant'
  | 'cafe'
  | 'bakery'
  | 'lounge'
  | 'service'
  | 'shop'
  | 'security'
  | 'information'
  | 'medical'
  | 'entertainment';

export interface POI {
  id: string;
  name: string;
  category: POICategory;
  terminal: TerminalId;
  zone: string;
  floor?: number;
  position: Coordinate;
  description: string;
  details: POIDetails;
  hours: string;
  contact?: ContactInfo;
  amenities?: string[];
  accessible?: boolean;
}

export interface POIDetails {
  type: string;
  capacity?: number;
  brands?: string[];
  cuisine?: string;
  priceRange?: string;
  waitTime?: number; // minutes
  rating?: number;
  reviews?: number;
  image?: string;
}

export interface ContactInfo {
  phone?: string;
  email?: string;
  website?: string;
  social?: {
    instagram?: string;
    twitter?: string;
  };
}

export interface POIGroup {
  category: POICategory;
  pois: POI[];
  icon?: string;
  color?: string;
}

export interface SearchResult {
  id: string;
  type: 'terminal' | 'gate' | 'poi' | 'service';
  name: string;
  terminal: TerminalId;
  zone?: string;
  relevance: number;
  category?: string;
  position?: Coordinate;
}
