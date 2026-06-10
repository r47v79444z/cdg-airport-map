/**
 * Geometry utility functions for calculations
 */

import { Coordinate } from '../types';

export function distance(p1: Coordinate, p2: Coordinate): number {
  return Math.sqrt(
    Math.pow(p2.x - p1.x, 2) +
    Math.pow(p2.y - p1.y, 2) +
    Math.pow((p2.z || 0) - (p1.z || 0), 2)
  );
}

export function midpoint(p1: Coordinate, p2: Coordinate): Coordinate {
  return {
    x: (p1.x + p2.x) / 2,
    y: (p1.y + p2.y) / 2,
    z: p1.z && p2.z ? (p1.z + p2.z) / 2 : undefined,
  };
}

export function lerp(p1: Coordinate, p2: Coordinate, t: number): Coordinate {
  return {
    x: p1.x + (p2.x - p1.x) * t,
    y: p1.y + (p2.y - p1.y) * t,
    z: p1.z && p2.z ? p1.z + (p2.z - p1.z) * t : undefined,
  };
}

export function isInBounds(
  point: Coordinate,
  min: Coordinate,
  max: Coordinate
): boolean {
  return (
    point.x >= min.x &&
    point.x <= max.x &&
    point.y >= min.y &&
    point.y <= max.y &&
    (!point.z || (point.z >= (min.z || 0) && point.z <= (max.z || 100)))
  );
}

export function boundsCenter(min: Coordinate, max: Coordinate): Coordinate {
  return {
    x: (min.x + max.x) / 2,
    y: (min.y + max.y) / 2,
    z: min.z && max.z ? (min.z + max.z) / 2 : undefined,
  };
}

export function boundsSize(min: Coordinate, max: Coordinate): Coordinate {
  return {
    x: Math.abs(max.x - min.x),
    y: Math.abs(max.y - min.y),
    z: min.z && max.z ? Math.abs(max.z - min.z) : undefined,
  };
}

// Estimate walking time in minutes based on distance
export function estimateWalkingTime(distanceKm: number): number {
  const walkingSpeedKmPerHour = 5; // Airport walking pace
  const timeMinutes = (distanceKm / walkingSpeedKmPerHour) * 60;
  return Math.max(1, Math.round(timeMinutes));
}

// Calculate flight distance in km (rough estimation)
export function calculateFlightDistance(origin: string, destination: string): number {
  const distances: Record<string, Record<string, number>> = {
    CDG: {
      LHR: 215,
      FRA: 450,
      MAD: 1000,
      FCO: 1100,
      JFK: 5837,
      NRT: 9740,
    },
  };
  return distances[origin]?.[destination] || 1000;
}
