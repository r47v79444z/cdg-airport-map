/**
 * Core airport data types
 */

export interface Coordinate {
  x: number;
  y: number;
  z?: number;
}

export interface BoundingBox {
  min: Coordinate;
  max: Coordinate;
}

export interface AirportLayout {
  id: string;
  name: string;
  code: string;
  city: string;
  country: string;
  bounds: BoundingBox;
  terminals: Terminal[];
}

export interface SelectionState {
  type: 'terminal' | 'gate' | 'poi' | 'none';
  id?: string;
  name?: string;
  data?: any;
}

export type MapMode = '3d' | '2d';
export type FilterCategory = 'restaurants' | 'shops' | 'lounges' | 'services' | 'all';

export interface MapState {
  selectedItem: SelectionState;
  viewMode: MapMode;
  filters: FilterCategory[];
  searchQuery: string;
  hoveredId?: string;
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  category: string;
  terminal: string;
  zone?: string;
  floor?: number;
  hours?: string;
  rating?: number;
}
