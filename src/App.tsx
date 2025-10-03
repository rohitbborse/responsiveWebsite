// ===================================
// MAIN APP COMPONENT
// Application root with routing configuration
// ===================================

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './views/Dashboard';
import { AnnualPlanning } from './views/AnnualPlanning';
import { GanttChart } from './views/GanttChart';
import { Resources } from './views/Resources';
import { Materials } from './views/Materials';
import { Cost } from './views/Cost';

/**
 * MAINTENANCE PLANNING TOOL
 * 
 * A comprehensive web application for maintenance planning and scheduling
 * based on requirements from the Business Requirements Document (BRD).
 * 
 * Features:
 * - Real-time dashboard with key metrics and alerts
 * - Annual planning with advanced filtering
 * - Gantt chart visualization for work task scheduling
 * - Resource management and allocation tracking
 * - Materials and services management (PO, PR, Services)
 * - Cost analysis and breakdown by work orders
 * - Responsive design for all devices (mobile, tablet, desktop)
 * - WCAG compliant for accessibility
 * - One-click report export functionality
 * 
 * Technology Stack:
 * - React 18 with TypeScript
 * - React Router for navigation
 * - CSS3 with design system tokens (based on mds-foundations)
 * - Responsive design using Flexbox/Grid
 * 
 * API Integration:
 * See src/data/mockData.ts for sample API requests and payloads
 * that can be used to fetch data from ERPAPP10 system.
 */

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/planning" element={<AnnualPlanning />} />
          <Route path="/gantt" element={<GanttChart />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/cost" element={<Cost />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
