
import React from 'react';

export interface NavItem {
  label: string;
  targetId: string;
}

export interface FacilityCardProps {
  id: string; // Added for routing
  title: string;
  description: string;
  imageSrc: string;
  colorClass: string; // Tailwind bg color class
  icon?: React.ReactNode;
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  imageSrc: string;
}
