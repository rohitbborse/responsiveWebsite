// ===================================
// GANTT CHART VIEW
// Visual timeline for work task scheduling
// ===================================

import React from 'react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { mockWorkTasks } from '../data/mockData';
import '../styles/GanttChart.css';

export const GanttChart: React.FC = () => {
  const handleExport = () => {
    console.log('Exporting Gantt chart data...');
    alert('Gantt chart data export (min info: OID/Job desc/WT or PM N/Due date/execution time) would be triggered here.');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'overdue': return '#dc3545';
      case 'due-soon': return '#ffc107';
      case 'on-track': return '#28a745';
      case 'completed': return '#6c757d';
      default: return '#17a2b8';
    }
  };

  return (
    <div className="gantt-chart">
      <div className="gantt-header">
        <h1>Planning Board - Gantt View</h1>
        <Button onClick={handleExport} variant="primary">
          Export Gantt Data
        </Button>
      </div>

      <Card title="Work Task Timeline">
        <div className="gantt-container" role="region" aria-label="Gantt Chart Timeline">
          <div className="gantt-timeline" role="list">
            {mockWorkTasks.map((task) => (
              <div 
                key={task.id} 
                className="gantt-row"
                role="listitem"
                tabIndex={0}
                aria-label={`Work Task ${task.id}: ${task.jobDescription}`}
              >
                <div className="gantt-task-info">
                  <div className="task-id">{task.id}</div>
                  <div className="task-object">{task.objectId}</div>
                  <div className="task-description">{task.jobDescription}</div>
                  <div className="task-meta">
                    <Badge variant="info">{task.workType}</Badge>
                    <span className="task-hours" aria-label={`Estimated ${task.estimatedHours} hours`}>
                      {task.estimatedHours}h
                    </span>
                  </div>
                </div>
                <div 
                  className="gantt-bar-container"
                  role="img"
                  aria-label={`Task timeline from ${formatDate(task.earliestStart)} to ${formatDate(task.latestFinish)}, status: ${task.status}`}
                >
                  <div
                    className="gantt-bar"
                    style={{ backgroundColor: getStatusColor(task.status) }}
                  >
                    <span className="gantt-bar-label">
                      {formatDate(task.earliestStart)} - {formatDate(task.latestFinish)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <div className="gantt-legend">
        <Card title="Legend & Integration">
          <div className="legend-grid">
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: '#dc3545' }}></div>
              <span>Overdue</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: '#ffc107' }}></div>
              <span>Due Soon</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: '#28a745' }}></div>
              <span>On Track</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: '#17a2b8' }}></div>
              <span>Unplanned</span>
            </div>
          </div>
          <p className="integration-note">
            <strong>Integration:</strong> This view can be integrated with Berth Plan to show
            operational execution windows alongside maintenance planning timelines.
          </p>
        </Card>
      </div>
    </div>
  );
};
