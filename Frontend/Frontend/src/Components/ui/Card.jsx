// src/components/ui/card.jsx
import React from 'react';

export const Card = ({ style, className = '', children, ...props }) => {
  const cardStyles = {
    border: '1px solid #e5e7eb', // Gray-200
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    ...style, // Merge with any passed inline style
  };

  return (
    <div style={cardStyles} className={className} {...props}>
      {children}
    </div>
  );
};

export const CardHeader = ({ style, className = '', children, ...props }) => {
  const headerStyles = {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    ...style,
  };
  return (
    <div style={headerStyles} className={className} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ style, className = '', children, ...props }) => {
  const titleStyles = {
    fontSize: '1.125rem', // text-lg
    fontWeight: '600', // font-semibold
    color: '#1f2937', // Gray-800
    ...style,
  };
  return (
    <h3 style={titleStyles} className={className} {...props}>
      {children}
    </h3>
  );
};

export const CardDescription = ({ style, className = '', children, ...props }) => {
  const descriptionStyles = {
    fontSize: '0.875rem', // text-sm
    color: '#6b7280', // Gray-600
    ...style,
  };
  return (
    <p style={descriptionStyles} className={className} {...props}>
      {children}
    </p>
  );
};

export const CardContent = ({ style, className = '', children, ...props }) => {
  const contentStyles = {
    padding: '16px',
    flexGrow: 1,
    ...style,
  };
  return (
    <div style={contentStyles} className={className} {...props}>
      {children}
    </div>
  );
};