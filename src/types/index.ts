// ===================================
// TYPE DEFINITIONS
// Comprehensive type system for the Maintenance Planning Tool
// ===================================

// Work Task Status
export type TaskStatus = 'overdue' | 'due-soon' | 'on-track' | 'completed' | 'unplanned';

// Work Types
export type WorkType = 'PM' | 'CM' | 'BD' | 'Project';

// Priority Levels
export type Priority = 'Critical' | 'High' | 'Medium' | 'Low';

// Resource Specialty
export type Specialty = 'Mechanical' | 'Electrical' | 'Instrumentation' | 'Civil' | 'Operations';

// Work Task Interface
export interface WorkTask {
  id: string;
  workOrderId: string;
  objectId: string;
  objectType: string;
  jobDescription: string;
  workType: WorkType;
  priority: Priority;
  status: TaskStatus;
  site: string;
  organization: string;
  earliestStart: string; // ISO date
  latestFinish: string; // ISO date
  actualStart?: string; // ISO date
  actualFinish?: string; // ISO date
  estimatedHours: number;
  actualHours?: number;
  assignedSpecialty: Specialty;
  pmLineNumber?: string;
}

// Resource Allocation
export interface ResourceAllocation {
  week: string;
  specialty: Specialty;
  plannedHours: number;
  availableHours: number;
  utilizationPercent: number;
}

// Material/Service Order
export interface MaterialOrder {
  id: string;
  type: 'PO' | 'PR' | 'Service';
  workTaskId: string;
  description: string;
  status: 'Pending' | 'Approved' | 'In Progress' | 'Delivered';
  cost: number;
  requestedDate: string;
  expectedDelivery?: string;
}

// Cost Breakdown
export interface CostBreakdown {
  workOrderId: string;
  workTaskId: string;
  totalCost: number;
  resourcesCost: number;
  materialsCost: number;
  servicesCost: number;
  workType: WorkType;
}

// Dashboard Metrics
export interface DashboardMetrics {
  overdueTasks: number;
  unplannedTasks: number;
  tasksWithoutResources: number;
  totalActiveTasks: number;
  completionRate: number;
  resourceUtilization: number;
}

// Forecast Data
export interface ForecastData {
  month: string;
  assetId: string;
  actionId: string;
  expectedWorkTasks: number;
  estimatedCost: number;
  requiredHours: number;
}

// PM Work Rate
export interface PMWorkRate {
  workType: WorkType;
  period: string;
  workOrdersCount: number;
  averageDowntime: number; // in hours
  isBD: boolean;
}

// Alert Interface
export interface Alert {
  id: string;
  type: 'overdue' | 'unplanned' | 'no-resources' | 'material-delay';
  severity: 'high' | 'medium' | 'low';
  message: string;
  count: number;
  relatedTasks: string[];
}

// Filter Options
export interface FilterOptions {
  site?: string;
  workType?: WorkType;
  priority?: Priority;
  objectType?: string;
  organization?: string;
  dateRange?: {
    start: string;
    end: string;
  };
}

// Export Configuration
export interface ExportConfig {
  format: 'excel' | 'pdf' | 'csv';
  includeCharts: boolean;
  dateRange: {
    start: string;
    end: string;
  };
}
