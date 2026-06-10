/**
 * Color and styling utilities
 */

export const colorPalette = {
  // Primary colors
  primary: '#0EA5E9', // Sky blue
  primaryDark: '#0369A1',
  primaryLight: '#E0F2FE',

  // Secondary colors
  secondary: '#F97316', // Orange
  secondaryDark: '#EA580C',
  secondaryLight: '#FED7AA',

  // Semantic colors
  success: '#10B981', // Green
  warning: '#F59E0B', // Amber
  error: '#EF4444', // Red
  info: '#3B82F6', // Blue

  // Terminal colors
  terminal1: '#8B5CF6', // Purple
  terminal2: '#06B6D4', // Cyan
  terminal3: '#EC4899', // Pink

  // POI category colors
  dutyFree: '#FFD700', // Gold
  restaurant: '#FF6B6B', // Red
  lounge: '#9B59B6', // Purple
  shop: '#3498DB', // Blue
  service: '#27AE60', // Green
  security: '#E74C3C', // Dark red
  entertainment: '#E91E63', // Pink

  // Background
  bg: '#0F172A', // Dark slate
  bgAlt: '#1E293B', // Slate
  bgLight: '#334155', // Slate-dark

  // Text
  text: '#F1F5F9', // Light
  textSecondary: '#CBD5E1', // Muted
  textTertiary: '#94A3B8', // Lighter muted

  // Border
  border: '#475569', // Slate
  borderLight: '#64748B', // Lighter

  // Overlay
  overlay: 'rgba(15, 23, 42, 0.8)',
  overlayLight: 'rgba(30, 41, 59, 0.6)',
};

export const terminalColors: Record<string, string> = {
  '1': colorPalette.terminal1,
  '2a': colorPalette.terminal2,
  '2b': colorPalette.terminal2,
  '2c': colorPalette.terminal2,
  '2d': colorPalette.terminal2,
  '2e': colorPalette.terminal2,
  '2f': colorPalette.terminal2,
  '2g': '#EC4899',
  '3': colorPalette.terminal3,
};

export const poiCategoryColors: Record<string, string> = {
  'duty-free': colorPalette.dutyFree,
  'luxury': '#FFD700',
  'restaurant': colorPalette.restaurant,
  'cafe': '#FF9FF3',
  'bakery': '#FAD94E',
  'lounge': colorPalette.lounge,
  'service': colorPalette.service,
  'shop': colorPalette.shop,
  'security': colorPalette.security,
  'information': colorPalette.info,
  'medical': '#FF1744',
  'entertainment': colorPalette.entertainment,
};
