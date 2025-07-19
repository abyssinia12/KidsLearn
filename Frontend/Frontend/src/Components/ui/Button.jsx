// src/components/ui/Button.jsx
import React from 'react';

export const Button = ({ children, variant = 'default', onClick, style, ...props }) => {
  let buttonStyles = {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    // No direct hover styles possible with inline styles like this
  };

  if (variant === 'outline') {
    buttonStyles = {
      ...buttonStyles,
      backgroundColor: 'transparent',
      color: '#007bff',
      border: '1px solid #007bff',
    };
  } else if (variant === 'destructive') {
    buttonStyles = {
      ...buttonStyles,
      backgroundColor: '#dc3545',
    };
  }
  // ... more variants

  return (
    <button
      style={{ ...buttonStyles, ...style }} // Allow overriding with `style` prop
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};