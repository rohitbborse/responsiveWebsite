// ===================================
// ALERT COMPONENT
// Alert notification component
// ===================================

import React from 'react';
import '../styles/Alert.css';

interface AlertProps {
  severity: 'high' | 'medium' | 'low';
  count: number;
  message: string;
  onClick?: () => void;
  className?: string;
}

export const AlertComponent: React.FC<AlertProps> = ({
  severity,
  count,
  message,
  onClick,
  className = ''
}) => {
  return (
    <div
      className={`alert alert-${severity} ${onClick ? 'alert-clickable' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className="alert-icon">
        {severity === 'high' && '⚠️'}
        {severity === 'medium' && 'ℹ️'}
        {severity === 'low' && '📋'}
      </div>
      <div className="alert-content">
        <div className="alert-count">{count}</div>
        <div className="alert-message">{message}</div>
      </div>
    </div>
  );
};
