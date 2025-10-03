// ===================================
// DASHBOARD VIEW
// Main dashboard with key metrics and alerts
// ===================================

import React, { useState } from 'react';
import { Card } from '../components/Card';
import { AlertComponent } from '../components/Alert';
import { Button } from '../components/Button';
import { mockDashboardMetrics, mockAlerts } from '../data/mockData';
import '../styles/Dashboard.css';

export const Dashboard: React.FC = () => {
  const [selectedAlert, setSelectedAlert] = useState<string | null>(null);

  const handleAlertClick = (alertId: string) => {
    setSelectedAlert(alertId);
    console.log('Alert clicked:', alertId);
  };

  const handleExport = () => {
    console.log('Exporting dashboard report...');
    alert('Report export functionality would trigger here. In production, this would generate and download an Excel/PDF report.');
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Maintenance Planning Dashboard</h1>
        <Button onClick={handleExport} variant="primary">
          Export Report
        </Button>
      </div>

      <div className="metrics-grid" role="region" aria-label="Key Performance Metrics">
        <Card className="metric-card metric-primary">
          <div 
            className="metric-value" 
            role="status" 
            aria-label="Total Active Tasks"
          >
            {mockDashboardMetrics.totalActiveTasks}
          </div>
          <div className="metric-label">Total Active Tasks</div>
        </Card>

        <Card className="metric-card metric-danger">
          <div 
            className="metric-value" 
            role="status" 
            aria-label="Overdue Tasks Count"
          >
            {mockDashboardMetrics.overdueTasks}
          </div>
          <div className="metric-label">Overdue Tasks</div>
        </Card>

        <Card className="metric-card metric-warning">
          <div 
            className="metric-value" 
            role="status" 
            aria-label="Unplanned Tasks Count"
          >
            {mockDashboardMetrics.unplannedTasks}
          </div>
          <div className="metric-label">Unplanned Tasks</div>
        </Card>

        <Card className="metric-card metric-info">
          <div 
            className="metric-value" 
            role="status" 
            aria-label="Tasks Without Resources Count"
          >
            {mockDashboardMetrics.tasksWithoutResources}
          </div>
          <div className="metric-label">Tasks Without Resources</div>
        </Card>

        <Card className="metric-card metric-success">
          <div 
            className="metric-value" 
            role="status" 
            aria-label="Completion Rate Percentage"
          >
            {mockDashboardMetrics.completionRate.toFixed(1)}%
          </div>
          <div className="metric-label">Completion Rate</div>
        </Card>

        <Card className="metric-card metric-secondary">
          <div 
            className="metric-value" 
            role="status" 
            aria-label="Resource Utilization Percentage"
          >
            {mockDashboardMetrics.resourceUtilization.toFixed(1)}%
          </div>
          <div className="metric-label">Resource Utilization</div>
        </Card>
      </div>

      <Card title="Active Alerts" className="alerts-section">
        <div className="alerts-grid">
          {mockAlerts.map((alert) => (
            <AlertComponent
              key={alert.id}
              severity={alert.severity}
              count={alert.count}
              message={alert.message}
              onClick={() => handleAlertClick(alert.id)}
            />
          ))}
        </div>
        {selectedAlert && (
          <div className="alert-details">
            <p className="alert-details-text">
              Click on an alert to view related work tasks in the Annual Planning tab.
            </p>
          </div>
        )}
      </Card>

      <div className="dashboard-info">
        <Card title="Quick Actions">
          <div className="quick-actions">
            <Button variant="primary" size="sm">View Annual Plan</Button>
            <Button variant="secondary" size="sm">Resource Planning</Button>
            <Button variant="secondary" size="sm">Cost Analysis</Button>
            <Button variant="secondary" size="sm">Generate Forecast</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
