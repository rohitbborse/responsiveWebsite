// ===================================
// COST VIEW
// Cost analysis and breakdown by work orders
// ===================================

import React from 'react';
import { Card } from '../components/Card';
import { Table } from '../components/Table';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { mockCostBreakdown } from '../data/mockData';
import { CostBreakdown } from '../types';
import '../styles/Cost.css';

export const Cost: React.FC = () => {
  const handleExport = () => {
    console.log('Exporting cost data...');
    alert('Cost analysis export would be triggered here.');
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const calculatePercentage = (part: number, total: number) => {
    return ((part / total) * 100).toFixed(1);
  };

  const columns = [
    { key: 'workOrderId', header: 'Work Order', width: '130px' },
    { key: 'workTaskId', header: 'Work Task', width: '120px' },
    {
      key: 'workType',
      header: 'Type',
      width: '80px',
      render: (item: CostBreakdown) => (
        <Badge variant="info">{item.workType}</Badge>
      )
    },
    {
      key: 'totalCost',
      header: 'Total Cost',
      width: '120px',
      render: (item: CostBreakdown) => (
        <strong>{formatCurrency(item.totalCost)}</strong>
      )
    },
    {
      key: 'resourcesCost',
      header: 'Resources',
      width: '120px',
      render: (item: CostBreakdown) => formatCurrency(item.resourcesCost)
    },
    {
      key: 'materialsCost',
      header: 'Materials',
      width: '120px',
      render: (item: CostBreakdown) => formatCurrency(item.materialsCost)
    },
    {
      key: 'servicesCost',
      header: 'Services',
      width: '120px',
      render: (item: CostBreakdown) => formatCurrency(item.servicesCost)
    }
  ];

  const totalCost = mockCostBreakdown.reduce((sum, item) => sum + item.totalCost, 0);
  const totalResources = mockCostBreakdown.reduce((sum, item) => sum + item.resourcesCost, 0);
  const totalMaterials = mockCostBreakdown.reduce((sum, item) => sum + item.materialsCost, 0);
  const totalServices = mockCostBreakdown.reduce((sum, item) => sum + item.servicesCost, 0);

  return (
    <div className="cost-analysis">
      <div className="cost-header">
        <h1>Cost Analysis</h1>
        <Button onClick={handleExport} variant="primary">
          Export Cost Report
        </Button>
      </div>

      <div className="cost-summary-grid">
        <Card className="summary-card">
          <div className="summary-value">{formatCurrency(totalCost)}</div>
          <div className="summary-label">Total Cost</div>
        </Card>
        <Card className="summary-card">
          <div className="summary-value">{formatCurrency(totalResources)}</div>
          <div className="summary-label">Resources ({calculatePercentage(totalResources, totalCost)}%)</div>
        </Card>
        <Card className="summary-card">
          <div className="summary-value">{formatCurrency(totalMaterials)}</div>
          <div className="summary-label">Materials ({calculatePercentage(totalMaterials, totalCost)}%)</div>
        </Card>
        <Card className="summary-card">
          <div className="summary-value">{formatCurrency(totalServices)}</div>
          <div className="summary-label">Services ({calculatePercentage(totalServices, totalCost)}%)</div>
        </Card>
      </div>

      <Card title="Cost Breakdown by Work Order">
        <Table
          columns={columns}
          data={mockCostBreakdown}
          emptyMessage="No cost data available"
        />
      </Card>

      <Card title="Cost Distribution by Work Type">
        <div className="cost-distribution">
          <p className="cost-note">
            This section would display cost percentage per work type (PM, CM, BD, Project)
            broken down by cost category (man-hours, materials, services). This provides
            insights into which work types consume the most resources.
          </p>
          <div className="cost-chart-placeholder">
            <div className="chart-bar">
              <div className="bar-label">PM</div>
              <div className="bar-segment resources" style={{ width: '60%' }}>Resources 60%</div>
              <div className="bar-segment materials" style={{ width: '25%' }}>Materials 25%</div>
              <div className="bar-segment services" style={{ width: '15%' }}>Services 15%</div>
            </div>
            <div className="chart-bar">
              <div className="bar-label">CM</div>
              <div className="bar-segment resources" style={{ width: '70%' }}>Resources 70%</div>
              <div className="bar-segment materials" style={{ width: '10%' }}>Materials 10%</div>
              <div className="bar-segment services" style={{ width: '20%' }}>Services 20%</div>
            </div>
          </div>
        </div>
      </Card>

      <Card title="Backlog Cost">
        <p className="backlog-note">
          <strong>Cost of Overdue Tasks:</strong> This section tracks the financial impact
          of overdue maintenance tasks, helping prioritize resource allocation and budget planning.
        </p>
      </Card>
    </div>
  );
};
