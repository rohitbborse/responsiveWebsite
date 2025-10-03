// ===================================
// FILTER BAR COMPONENT
// Filtering interface for data tables
// ===================================

import React from 'react';
import { FilterOptions, WorkType, Priority } from '../types';
import '../styles/FilterBar.css';

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange
}) => {
  const handleChange = (key: keyof FilterOptions, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label htmlFor="site-filter" className="filter-label">Site:</label>
        <select
          id="site-filter"
          className="filter-select"
          value={filters.site || ''}
          onChange={(e) => handleChange('site', e.target.value || undefined)}
        >
          <option value="">All Sites</option>
          <option value="Terminal-A">Terminal A</option>
          <option value="Terminal-B">Terminal B</option>
          <option value="Terminal-C">Terminal C</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="work-type-filter" className="filter-label">Work Type:</label>
        <select
          id="work-type-filter"
          className="filter-select"
          value={filters.workType || ''}
          onChange={(e) => handleChange('workType', e.target.value as WorkType || undefined)}
        >
          <option value="">All Types</option>
          <option value="PM">Preventive Maintenance</option>
          <option value="CM">Corrective Maintenance</option>
          <option value="BD">Breakdown</option>
          <option value="Project">Project</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="priority-filter" className="filter-label">Priority:</label>
        <select
          id="priority-filter"
          className="filter-select"
          value={filters.priority || ''}
          onChange={(e) => handleChange('priority', e.target.value as Priority || undefined)}
        >
          <option value="">All Priorities</option>
          <option value="Critical">Critical</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="org-filter" className="filter-label">Organization:</label>
        <select
          id="org-filter"
          className="filter-select"
          value={filters.organization || ''}
          onChange={(e) => handleChange('organization', e.target.value || undefined)}
        >
          <option value="">All Organizations</option>
          <option value="Maintenance-Mechanical">Maintenance-Mechanical</option>
          <option value="Maintenance-Electrical">Maintenance-Electrical</option>
          <option value="Maintenance-Instrumentation">Maintenance-Instrumentation</option>
          <option value="Maintenance-Civil">Maintenance-Civil</option>
        </select>
      </div>
    </div>
  );
};
