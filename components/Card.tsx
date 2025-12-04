import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  noPadding?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick, noPadding = false }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        bg-white rounded-3xl border-2 border-brand-dark 
        shadow-neo transition-all duration-200 ease-out
        hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-hover
        flex flex-col relative overflow-hidden
        ${noPadding ? '' : 'p-6'}
        ${className}
      `}
    >
      {children}
    </div>
  );
};