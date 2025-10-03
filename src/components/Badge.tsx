// ===================================
// BADGE COMPONENT
// Status indicator component
// ===================================

import React from 'react';
import '../styles/Badge.css';

interface BadgeProps {
  variant: 'success' | 'warning' | 'danger' | 'info' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant,
  children,
  className = ''
}) => {
  return (
    <span className={`badge badge-${variant} ${className}`}>
      {children}
    </span>
  );
};
