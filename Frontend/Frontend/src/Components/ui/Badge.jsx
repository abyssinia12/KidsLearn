// src/components/ui/badge.jsx
import React from 'react';

export const Badge = ({ children, style, className = '', variant = 'default', ...props }) => {
  let badgeBaseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: '9999px', // Pill shape
    padding: '4px 12px',
    fontSize: '0.75rem', // text-xs
    fontWeight: '600', // font-semibold
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    whiteSpace: 'nowrap',
  };

  let variantStyles = {};

  // Map your specific 'badge' classes to inline styles
  // The 'className' prop might still carry classes like 'bg-red-500'
  // For proper inline CSS, you'd need to explicitly define these colors here
  // or pass them as a prop to Badge like `badgeColor`
  switch (className) { // Using className here to pick up your original color classes
    case 'bg-red-500': variantStyles = { backgroundColor: '#ef4444', color: 'white' }; break;
    case 'bg-orange-500': variantStyles = { backgroundColor: '#f97316', color: 'white' }; break;
    case 'bg-yellow-500': variantStyles = { backgroundColor: '#f59e0b', color: 'white' }; break;
    case 'bg-green-500': variantStyles = { backgroundColor: '#22c55e', color: 'white' }; break;
    case 'bg-blue-500': variantStyles = { backgroundColor: '#3b82f6', color: 'white' }; break;
    case 'bg-purple-500': variantStyles = { backgroundColor: '#a855f7', color: 'white' }; break;
    case 'bg-yellow-400': variantStyles = { backgroundColor: '#facc15', color: '#854d09' }; break; // text-yellow-900
    case 'bg-green-400': variantStyles = { backgroundColor: '#4ade80', color: '#14532d' }; break; // text-green-900
    case 'bg-green-500 text-white': variantStyles = { backgroundColor: '#22c55e', color: 'white' }; break; // For completed badge
    default: variantStyles = { backgroundColor: '#e5e7eb', color: '#374151' }; break; // Default (gray)
  }

  const finalStyles = { ...badgeBaseStyles, ...variantStyles, ...style };

  return (
    <span style={finalStyles} {...props}>
      {children}
    </span>
  );
};