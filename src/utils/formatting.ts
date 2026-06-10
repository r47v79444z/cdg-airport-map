/**
 * Formatting utilities for data display
 */

import { Flight, Terminal, POI } from '../types';
import { formatDistanceToNow, format } from 'date-fns';
import { fr } from 'date-fns/locale';

export function formatTime(date: Date | undefined): string {
  if (!date) return '-';
  return format(new Date(date), 'HH:mm', { locale: fr });
}

export function formatDate(date: Date | undefined): string {
  if (!date) return '-';
  return format(new Date(date), 'dd MMM yyyy', { locale: fr });
}

export function formatDateTime(date: Date | undefined): string {
  if (!date) return '-';
  return format(new Date(date), 'dd MMM HH:mm', { locale: fr });
}

export function formatRelativeTime(date: Date | undefined): string {
  if (!date) return '-';
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: fr,
  });
}

export function formatFlightStatus(status: string): string {
  const statusMap: Record<string, string> = {
    'scheduled': '📅 Programmé',
    'boarding': '🚪 Embarquement',
    'boarding-complete': '✓ Embarquement terminé',
    'departed': '✈️ Décollé',
    'in-flight': '✈️ En vol',
    'landed': '🛬 Atterri',
    'delayed': '⏱️ Retardé',
    'cancelled': '❌ Annulé',
  };
  return statusMap[status] || status;
}

export function formatDistance(km: number): string {
  if (km < 1) return `${Math.round(km * 1000)} m`;
  if (km < 100) return `${Math.round(km)} km`;
  return `${(km / 1000).toFixed(1)}k km`;
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}

export function formatPassengers(count: number): string {
  return new Intl.NumberFormat('fr-FR').format(count);
}

export function formatCapacity(current: number, max: number): string {
  const percentage = ((current / max) * 100).toFixed(0);
  return `${current}/${max} (${percentage}%)`;
}

export function getTerminalAbbr(terminalId: string): string {
  const abbr: Record<string, string> = {
    '1': 'T1',
    '2a': 'T2A',
    '2b': 'T2B',
    '2c': 'T2C',
    '2d': 'T2D',
    '2e': 'T2E',
    '2f': 'T2F',
    '2g': 'T2G',
    '3': 'T3',
  };
  return abbr[terminalId] || terminalId;
}

export function highlightSearchMatch(text: string, query: string): string {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, '**$1**');
}
