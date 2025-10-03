// ===================================
// MATERIALS VIEW
// Materials and services management
// ===================================

import React from 'react';
import { Card } from '../components/Card';
import { Table } from '../components/Table';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { mockMaterialOrders } from '../data/mockData';
import { MaterialOrder } from '../types';
import '../styles/Materials.css';

export const Materials: React.FC = () => {
  const handleExport = () => {
    console.log('Exporting materials data...');
    alert('Materials and services export would be triggered here.');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, 'success' | 'warning' | 'info' | 'secondary'> = {
      'Delivered': 'success',
      'Approved': 'info',
      'In Progress': 'warning',
      'Pending': 'secondary'
    };
    return <Badge variant={statusMap[status] || 'secondary'}>{status}</Badge>;
  };

  const getTypeBadge = (type: string) => {
    const typeMap: Record<string, 'info' | 'warning' | 'secondary'> = {
      'PO': 'info',
      'PR': 'warning',
      'Service': 'secondary'
    };
    return <Badge variant={typeMap[type] || 'secondary'}>{type}</Badge>;
  };

  const columns = [
    { key: 'id', header: 'Order ID', width: '130px' },
    {
      key: 'type',
      header: 'Type',
      width: '100px',
      render: (item: MaterialOrder) => getTypeBadge(item.type)
    },
    { key: 'workTaskId', header: 'Work Task', width: '120px' },
    { key: 'description', header: 'Description' },
    {
      key: 'status',
      header: 'Status',
      width: '130px',
      render: (item: MaterialOrder) => getStatusBadge(item.status)
    },
    {
      key: 'cost',
      header: 'Cost',
      width: '120px',
      render: (item: MaterialOrder) => formatCurrency(item.cost)
    },
    {
      key: 'requestedDate',
      header: 'Requested',
      width: '130px',
      render: (item: MaterialOrder) => formatDate(item.requestedDate)
    },
    {
      key: 'expectedDelivery',
      header: 'Expected Delivery',
      width: '150px',
      render: (item: MaterialOrder) =>
        item.expectedDelivery ? formatDate(item.expectedDelivery) : 'TBD'
    }
  ];

  const totalCost = mockMaterialOrders.reduce((sum, item) => sum + item.cost, 0);

  return (
    <div className="materials">
      <div className="materials-header">
        <h1>Materials & Services</h1>
        <Button onClick={handleExport} variant="primary">
          Export Materials
        </Button>
      </div>

      <div className="materials-summary">
        <Card className="summary-card">
          <div className="summary-value">{mockMaterialOrders.length}</div>
          <div className="summary-label">Total Orders</div>
        </Card>
        <Card className="summary-card">
          <div className="summary-value">{formatCurrency(totalCost)}</div>
          <div className="summary-label">Total Value</div>
        </Card>
        <Card className="summary-card">
          <div className="summary-value">
            {mockMaterialOrders.filter(o => o.type === 'PO').length}
          </div>
          <div className="summary-label">Purchase Orders</div>
        </Card>
        <Card className="summary-card">
          <div className="summary-value">
            {mockMaterialOrders.filter(o => o.type === 'Service').length}
          </div>
          <div className="summary-label">Service Orders</div>
        </Card>
      </div>

      <Card title="Purchase Orders, PRs & Services">
        <Table
          columns={columns}
          data={mockMaterialOrders}
          emptyMessage="No material orders or services found"
        />
      </Card>

      <Card title="Material Planning Notes">
        <div className="materials-info">
          <p>
            <strong>Purchase Orders (PO):</strong> Approved orders for inventoried materials
            with confirmed delivery dates. These are tracked for material availability planning.
          </p>
          <p>
            <strong>Purchase Requisitions (PR):</strong> Requests for materials that are awaiting
            approval. These should be monitored to prevent delays in work task execution.
          </p>
          <p>
            <strong>Services:</strong> External contractor services or specialized work required
            for maintenance tasks. Service status is tracked for scheduling coordination.
          </p>
        </div>
      </Card>
    </div>
  );
};
