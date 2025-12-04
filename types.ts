import React from 'react';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface AppLinkProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  colorClass?: string;
}

export interface StatProps {
  value: string;
  label: string;
  trend?: string;
}

export enum CardSize {
  Small = 'sm', // 1x1
  Medium = 'md', // 2x1 or 1x2
  Large = 'lg', // 2x2
  Wide = 'wide' // 2x1 or 3x1
}