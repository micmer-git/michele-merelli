import React from 'react';

interface CardProps {
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

export const CardHeader: React.FC<{ title: string; subtitle?: string; icon?: React.ReactNode }> = ({ title, subtitle, icon }) => (
  <div className="flex items-start justify-between mb-4">
    <div>
      <h3 className="font-bold text-xl leading-tight">{title}</h3>
      {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
    </div>
    {icon && (
      <div className="text-brand-dark bg-gray-100 p-2 rounded-xl">
        {icon}
      </div>
    )}
  </div>
);