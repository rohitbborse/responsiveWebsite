// ===================================
// TABLE COMPONENT
// Responsive data table component
// ===================================

import React from 'react';
import '../styles/Table.css';

interface Column<T> {
  key: string;
  header: string;
  render?: (item: T) => React.ReactNode;
  width?: string;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  className?: string;
  emptyMessage?: string;
}

export function Table<T extends Record<string, any>>({
  columns,
  data,
  className = '',
  emptyMessage = 'No data available'
}: TableProps<T>) {
  return (
    <div 
      className="table-container" 
      role="region" 
      aria-label="Data table"
      tabIndex={0}
    >
      <table className={`data-table ${className}`} role="table">
        <thead>
          <tr role="row">
            {columns.map((column) => (
              <th
                key={column.key}
                role="columnheader"
                scope="col"
                style={column.width ? { width: column.width } : undefined}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr role="row">
              <td colSpan={columns.length} className="empty-message" role="cell">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((item, index) => (
              <tr key={index} role="row">
                {columns.map((column) => (
                  <td key={column.key} role="cell">
                    {column.render
                      ? column.render(item)
                      : item[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
