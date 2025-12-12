import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FacilityCardProps {
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