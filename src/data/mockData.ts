// ===================================
// MOCK DATA
// Sample data for the Maintenance Planning Tool
// In production, this would be fetched from ERPAPP10 system
// ===================================

import {
  WorkTask,
  ResourceAllocation,
  MaterialOrder,
  CostBreakdown,
  DashboardMetrics,
  ForecastData,
  PMWorkRate,
  Alert
} from '../types';

// Sample API Request URL and Payload (Commented for production use)
/*
// API CONFIGURATION
const API_BASE_URL = 'https://your-api-server.com/api/v1';

// 1. Fetch Work Tasks
// GET /work-tasks
// Query Parameters: { site?, workType?, priority?, startDate?, endDate? }
fetch(`${API_BASE_URL}/work-tasks?site=Terminal-A&startDate=2025-01-01&endDate=2025-12-31`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  }
})

// 2. Fetch Dashboard Metrics
// GET /dashboard/metrics
fetch(`${API_BASE_URL}/dashboard/metrics`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  }
})

// 3. Fetch Resource Allocation
// POST /resources/allocation
// Request Body: { startDate: string, endDate: string, specialty?: string }
fetch(`${API_BASE_URL}/resources/allocation`, {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    startDate: '2025-01-01',
    endDate: '2025-12-31',
    specialty: 'Mechanical'
  })
})

// 4. Generate Report
// POST /reports/generate
// Request Body: { format: 'excel' | 'pdf', filters: FilterOptions, includeCharts: boolean }
fetch(`${API_BASE_URL}/reports/generate`, {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    format: 'excel',
    filters: { workType: 'PM', site: 'Terminal-A' },
    includeCharts: true
  })
})

// 5. Fetch Cost Data
// GET /costs/breakdown
// Query Parameters: { workOrderId?, workType?, startDate?, endDate? }
fetch(`${API_BASE_URL}/costs/breakdown?workType=PM&startDate=2025-01-01`, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_TOKEN',
    'Content-Type': 'application/json'
  }
})
*/

// Mock Dashboard Metrics
export const mockDashboardMetrics: DashboardMetrics = {
  overdueTasks: 23,
  unplannedTasks: 8,
  tasksWithoutResources: 5,
  totalActiveTasks: 156,
  completionRate: 87.5,
  resourceUtilization: 78.3
};

// Mock Alerts
export const mockAlerts: Alert[] = [
  {
    id: 'alert-1',
    type: 'overdue',
    severity: 'high',
    message: 'Overdue Tasks Requiring Immediate Attention',
    count: 23,
    relatedTasks: ['WT-001', 'WT-045', 'WT-067']
  },
  {
    id: 'alert-2',
    type: 'unplanned',
    severity: 'medium',
    message: 'Unplanned Work Tasks',
    count: 8,
    relatedTasks: ['WT-123', 'WT-145']
  },
  {
    id: 'alert-3',
    type: 'no-resources',
    severity: 'medium',
    message: 'Tasks Without Assigned Resources',
    count: 5,
    relatedTasks: ['WT-089', 'WT-091']
  }
];

// Mock Work Tasks
export const mockWorkTasks: WorkTask[] = [
  {
    id: 'WT-001',
    workOrderId: 'WO-2025-0045',
    objectId: 'CRANE-01',
    objectType: 'RTG Crane',
    jobDescription: 'Preventive Maintenance - Hydraulic System Inspection',
    workType: 'PM',
    priority: 'High',
    status: 'overdue',
    site: 'Terminal-A',
    organization: 'Maintenance-Mechanical',
    earliestStart: '2025-09-15T08:00:00Z',
    latestFinish: '2025-09-30T17:00:00Z',
    actualStart: '2025-10-01T08:00:00Z',
    estimatedHours: 24,
    actualHours: 18,
    assignedSpecialty: 'Mechanical',
    pmLineNumber: 'PM-2025-001'
  },
  {
    id: 'WT-002',
    workOrderId: 'WO-2025-0046',
    objectId: 'CRANE-02',
    objectType: 'RTG Crane',
    jobDescription: 'Electrical System Maintenance - Motor Replacement',
    workType: 'PM',
    priority: 'Critical',
    status: 'due-soon',
    site: 'Terminal-A',
    organization: 'Maintenance-Electrical',
    earliestStart: '2025-10-05T08:00:00Z',
    latestFinish: '2025-10-15T17:00:00Z',
    estimatedHours: 32,
    assignedSpecialty: 'Electrical',
    pmLineNumber: 'PM-2025-002'
  },
  {
    id: 'WT-003',
    workOrderId: 'WO-2025-0047',
    objectId: 'CONV-BELT-A1',
    objectType: 'Conveyor System',
    jobDescription: 'Corrective Maintenance - Belt Alignment',
    workType: 'CM',
    priority: 'High',
    status: 'on-track',
    site: 'Terminal-B',
    organization: 'Maintenance-Mechanical',
    earliestStart: '2025-10-10T08:00:00Z',
    latestFinish: '2025-10-20T17:00:00Z',
    estimatedHours: 16,
    assignedSpecialty: 'Mechanical'
  },
  {
    id: 'WT-004',
    workOrderId: 'WO-2025-0048',
    objectId: 'PUMP-05',
    objectType: 'Hydraulic Pump',
    jobDescription: 'Breakdown Maintenance - Emergency Repair',
    workType: 'BD',
    priority: 'Critical',
    status: 'unplanned',
    site: 'Terminal-A',
    organization: 'Maintenance-Mechanical',
    earliestStart: '2025-10-03T08:00:00Z',
    latestFinish: '2025-10-04T17:00:00Z',
    estimatedHours: 8,
    assignedSpecialty: 'Mechanical'
  },
  {
    id: 'WT-005',
    workOrderId: 'WO-2025-0049',
    objectId: 'CRANE-03',
    objectType: 'RTG Crane',
    jobDescription: 'Instrumentation Calibration - Load Sensors',
    workType: 'PM',
    priority: 'Medium',
    status: 'on-track',
    site: 'Terminal-A',
    organization: 'Maintenance-Instrumentation',
    earliestStart: '2025-10-12T08:00:00Z',
    latestFinish: '2025-10-25T17:00:00Z',
    estimatedHours: 12,
    assignedSpecialty: 'Instrumentation',
    pmLineNumber: 'PM-2025-003'
  }
];

// Mock Resource Allocation
export const mockResourceAllocation: ResourceAllocation[] = [
  {
    week: '2025-W40',
    specialty: 'Mechanical',
    plannedHours: 320,
    availableHours: 400,
    utilizationPercent: 80
  },
  {
    week: '2025-W40',
    specialty: 'Electrical',
    plannedHours: 280,
    availableHours: 360,
    utilizationPercent: 77.8
  },
  {
    week: '2025-W40',
    specialty: 'Instrumentation',
    plannedHours: 160,
    availableHours: 200,
    utilizationPercent: 80
  },
  {
    week: '2025-W41',
    specialty: 'Mechanical',
    plannedHours: 360,
    availableHours: 400,
    utilizationPercent: 90
  },
  {
    week: '2025-W41',
    specialty: 'Electrical',
    plannedHours: 300,
    availableHours: 360,
    utilizationPercent: 83.3
  }
];

// Mock Material Orders
export const mockMaterialOrders: MaterialOrder[] = [
  {
    id: 'PO-2025-101',
    type: 'PO',
    workTaskId: 'WT-001',
    description: 'Hydraulic Fluid - ISO VG 46 (200L)',
    status: 'Delivered',
    cost: 1200,
    requestedDate: '2025-09-10T00:00:00Z',
    expectedDelivery: '2025-09-28T00:00:00Z'
  },
  {
    id: 'PR-2025-205',
    type: 'PR',
    workTaskId: 'WT-002',
    description: 'Electric Motor 75kW - 3 Phase',
    status: 'Approved',
    cost: 8500,
    requestedDate: '2025-09-20T00:00:00Z',
    expectedDelivery: '2025-10-10T00:00:00Z'
  },
  {
    id: 'SRV-2025-045',
    type: 'Service',
    workTaskId: 'WT-003',
    description: 'Belt Alignment Service - External Contractor',
    status: 'In Progress',
    cost: 3200,
    requestedDate: '2025-10-01T00:00:00Z'
  }
];

// Mock Cost Breakdown
export const mockCostBreakdown: CostBreakdown[] = [
  {
    workOrderId: 'WO-2025-0045',
    workTaskId: 'WT-001',
    totalCost: 15800,
    resourcesCost: 12000,
    materialsCost: 2400,
    servicesCost: 1400,
    workType: 'PM'
  },
  {
    workOrderId: 'WO-2025-0046',
    workTaskId: 'WT-002',
    totalCost: 24500,
    resourcesCost: 16000,
    materialsCost: 8500,
    servicesCost: 0,
    workType: 'PM'
  },
  {
    workOrderId: 'WO-2025-0047',
    workTaskId: 'WT-003',
    totalCost: 11200,
    resourcesCost: 8000,
    materialsCost: 0,
    servicesCost: 3200,
    workType: 'CM'
  }
];

// Mock Forecast Data
export const mockForecastData: ForecastData[] = [
  {
    month: '2025-10',
    assetId: 'CRANE-01',
    actionId: 'ACT-001',
    expectedWorkTasks: 4,
    estimatedCost: 48000,
    requiredHours: 96
  },
  {
    month: '2025-11',
    assetId: 'CRANE-01',
    actionId: 'ACT-001',
    expectedWorkTasks: 3,
    estimatedCost: 36000,
    requiredHours: 72
  },
  {
    month: '2025-12',
    assetId: 'CRANE-02',
    actionId: 'ACT-002',
    expectedWorkTasks: 5,
    estimatedCost: 60000,
    requiredHours: 120
  }
];

// Mock PM Work Rates
export const mockPMWorkRates: PMWorkRate[] = [
  {
    workType: 'PM',
    period: '2025-Q3',
    workOrdersCount: 45,
    averageDowntime: 6.5,
    isBD: false
  },
  {
    workType: 'CM',
    period: '2025-Q3',
    workOrdersCount: 18,
    averageDowntime: 4.2,
    isBD: false
  },
  {
    workType: 'BD',
    period: '2025-Q3',
    workOrdersCount: 7,
    averageDowntime: 12.5,
    isBD: true
  }
];
