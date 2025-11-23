import React from 'react';

export interface PhotoProps {
  src: string;
  alt: string;
  caption?: string;
  location?: string;
  rotation?: string; // Tailwind class for rotation
  className?: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  filter?: "grayscale" | "sepia" | "none";
}

export interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}