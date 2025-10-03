// ===================================
// RESOURCES VIEW
// Resource allocation and availability management
// ===================================

import React from 'react';
import { Card } from '../components/Card';
import { Table } from '../components/Table';
import { Button } from '../components/Button';
import { mockResourceAllocation } from '../data/mockData';
import { ResourceAllocation } from '../types';
import '../styles/Resources.css';

export const Resources: React.FC = () => {
  const handleExport = () => {
    console.log('Exporting resource data...');
    alert('Resource allocation export would be triggered here.');
  };

  const getUtilizationColor = (percent: number) => {
    if (percent >= 90) return '#dc3545';
    if (percent >= 75) return '#ffc107';
    return '#28a745';
  };

  const columns = [
    { key: 'week', header: 'Week', width: '120px' },
    { key: 'specialty', header: 'Specialty', width: '150px' },
    {
      key: 'plannedHours',
      header: 'Planned Hours',
      width: '130px',
      render: (item: ResourceAllocation) => `${item.plannedHours}h`
    },
    {
      key: 'availableHours',
      header: 'Available Hours',
      width: '130px',
      render: (item: ResourceAllocation) => `${item.availableHours}h`
    },
    {
      key: 'utilizationPercent',
      header: 'Utilization',
      width: '150px',
      render: (item: ResourceAllocation) => (
        <div className="utilization-cell">
          <div className="utilization-bar-container">
            <div
              className="utilization-bar"
              style={{
                width: `${item.utilizationPercent}%`,
                backgroundColor: getUtilizationColor(item.utilizationPercent)
              }}
            />
          </div>
          <span className="utilization-text">
            {item.utilizationPercent.toFixed(1)}%
          </span>
        </div>
      )
    }
  ];

  return (
    <div className="resources">
      <div className="resources-header">
        <h1>Resource Management</h1>
        <Button onClick={handleExport} variant="primary">
          Export Resources
        </Button>
      </div>

      <Card title="Planned vs Available Man Hours">
        <Table
          columns={columns}
          data={mockResourceAllocation}
          emptyMessage="No resource allocation data available"
        />
      </Card>

      <div className="resources-info">
        <Card title="Resource Planning Notes">
          <div className="info-content">
            <h4>Utilization Indicators:</h4>
            <ul className="info-list">
              <li><span className="indicator green"></span> &lt; 75%: Good - Resources available</li>
              <li><span className="indicator yellow"></span> 75-90%: Caution - High utilization</li>
              <li><span className="indicator red"></span> &gt; 90%: Critical - Overbooked</li>
            </ul>
            <p className="note">
              <strong>Note:</strong> Resource hours are grouped at the week level. When a specific day is selected,
              it maps to the corresponding week for analysis. This view shows both planned hours
              based on work task assignments and available hours based on workforce capacity.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
