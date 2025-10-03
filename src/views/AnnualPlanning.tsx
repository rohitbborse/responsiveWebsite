// ===================================
// ANNUAL PLANNING VIEW
// Work tasks planning and filtering
// ===================================

import React, { useState, useMemo } from 'react';
import { Card } from '../components/Card';
import { FilterBar } from '../components/FilterBar';
import { Table } from '../components/Table';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { mockWorkTasks } from '../data/mockData';
import { FilterOptions, WorkTask, TaskStatus } from '../types';
import '../styles/AnnualPlanning.css';

export const AnnualPlanning: React.FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({});

  const filteredTasks = useMemo(() => {
    return mockWorkTasks.filter((task) => {
      if (filters.site && task.site !== filters.site) return false;
      if (filters.workType && task.workType !== filters.workType) return false;
      if (filters.priority && task.priority !== filters.priority) return false;
      if (filters.organization && task.organization !== filters.organization) return false;
      return true;
    });
  }, [filters]);

  const getStatusBadge = (status: TaskStatus) => {
    const statusMap = {
      'overdue': { variant: 'danger' as const, label: 'Overdue' },
      'due-soon': { variant: 'warning' as const, label: 'Due Soon' },
      'on-track': { variant: 'success' as const, label: 'On Track' },
      'completed': { variant: 'info' as const, label: 'Completed' },
      'unplanned': { variant: 'secondary' as const, label: 'Unplanned' }
    };
    const config = statusMap[status];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleExport = () => {
    console.log('Exporting planning data...');
    alert('Export to Excel functionality would be triggered here.');
  };

  const columns = [
    { key: 'id', header: 'WT ID', width: '100px' },
    { key: 'workOrderId', header: 'WO ID', width: '120px' },
    { key: 'objectId', header: 'Object ID', width: '120px' },
    { key: 'jobDescription', header: 'Job Description' },
    {
      key: 'status',
      header: 'Status',
      width: '130px',
      render: (task: WorkTask) => getStatusBadge(task.status)
    },
    {
      key: 'workType',
      header: 'Work Type',
      width: '100px',
      render: (task: WorkTask) => (
        <Badge variant="info">{task.workType}</Badge>
      )
    },
    {
      key: 'priority',
      header: 'Priority',
      width: '100px',
      render: (task: WorkTask) => (
        <Badge variant={task.priority === 'Critical' ? 'danger' : 'secondary'}>
          {task.priority}
        </Badge>
      )
    },
    {
      key: 'earliestStart',
      header: 'Earliest Start',
      width: '120px',
      render: (task: WorkTask) => formatDate(task.earliestStart)
    },
    {
      key: 'latestFinish',
      header: 'Latest Finish',
      width: '120px',
      render: (task: WorkTask) => formatDate(task.latestFinish)
    },
    {
      key: 'estimatedHours',
      header: 'Est. Hours',
      width: '100px',
      render: (task: WorkTask) => `${task.estimatedHours}h`
    },
    { key: 'assignedSpecialty', header: 'Specialty', width: '140px' }
  ];

  return (
    <div className="annual-planning">
      <div className="planning-header">
        <h1>Annual Planning</h1>
        <Button onClick={handleExport} variant="primary">
          Export to Excel
        </Button>
      </div>

      <FilterBar filters={filters} onFilterChange={setFilters} />

      <Card title={`Work Tasks (${filteredTasks.length})`}>
        <Table
          columns={columns}
          data={filteredTasks}
          emptyMessage="No work tasks found matching the selected filters"
        />
      </Card>

      <div className="planning-summary">
        <Card title="Summary by Asset/Action">
          <p className="summary-note">
            Summary table showing quantity of work tasks expected by month per Asset ID/Action ID would be displayed here.
            This provides a consolidated view for planning purposes.
          </p>
        </Card>
      </div>
    </div>
  );
};
