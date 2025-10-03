# Maintenance Planning Tool

## Overview
A comprehensive, responsive web application for maintenance planning and scheduling based on the Business Requirements Document (BRD). This tool enables real-time visualization and management of maintenance activities, resource allocation, cost analysis, and material tracking for terminal planning teams.

## Purpose
The application addresses key improvements needed for the Power BI Planning Tool by providing:
- Real-time data visualization from ERPAPP10 system
- Automated report generation and forecasting (12-18 months ahead)
- Comprehensive planning and scheduling support
- Material and resource management
- Cost analysis and breakdown
- One-click export functionality

## Technology Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Routing**: React Router DOM v6
- **Styling**: CSS3 with APM Terminals design system
- **Design Principles**: Responsive design (Flexbox/Grid), WCAG AA compliance
- **Package Manager**: npm

## Design System - APM Terminals Branding
The application follows APM Terminals' corporate design language:

### Color Palette
- **Primary (Navy Blue)**: #1f3250 - Header, titles, primary text
- **Accent (Maersk Blue)**: #1565C0 - Buttons, active states (WCAG AA compliant 4.6:1)
- **Accent Medium**: #1E88E5 - Filter borders, non-text elements
- **Accent Light**: #42A5F5 - Info badges, hover effects
- **Success**: #28a745 - Completion indicators
- **Warning**: #ff9800 - Attention items
- **Danger**: #d32f2f - Overdue/critical alerts
- **Neutrals**: Gray scale from #fafafa to #212121

### Typography
- **Headings**: Roboto, medium weight (500), navy blue color
- **Body**: Open Sans, system font stack fallback
- **Font Sizes**: Responsive scale from 0.75rem to 2.25rem

### Components
- **Header**: Navy gradient with white text, sticky positioning
- **Navigation**: Sidebar with blue accent for active states
- **Buttons**: Blue accent with shadows, hover lift effect
- **Cards**: White background, subtle borders, navy titles
- **Filters**: Uppercase labels, bordered inputs, blue focus states
- **Tables**: Responsive with horizontal scroll, ARIA support

### Accessibility (WCAG AA)
- Contrast ratio ≥4.5:1 for all text
- ARIA labels and roles throughout
- Keyboard navigation support
- Focus visible indicators
- Screen reader friendly
- Semantic HTML structure

## Features Implemented

### 1. Dashboard (/)
- Key metrics display (Active Tasks, Overdue, Unplanned, etc.)
- Real-time alerts for overdue tasks, unplanned tasks, and tasks without resources
- Quick actions for navigation
- Resource utilization and completion rate tracking

### 2. Annual Planning (/planning)
- Comprehensive work task table with all relevant columns
- Advanced filtering by site, work type, priority, object type, organization
- Status indicators (Overdue, Due Soon, On Track, Completed, Unplanned)
- Summary views by Asset ID/Action ID
- Export to Excel functionality

### 3. Planning Board - Gantt View (/gantt)
- Visual timeline of work tasks
- Color-coded status indicators
- Job descriptions and estimated hours
- Integration notes for Berth Plan
- Exportable Gantt data (min info: OID/Job desc/WT or PM N/Due date/execution time)

### 4. Resources Management (/resources)
- Planned vs Available man hours visualization
- Weekly resource allocation by specialty
- Utilization percentage with color-coded indicators
- Resource capacity planning notes

### 5. Materials & Services (/materials)
- Purchase Orders (PO) tracking
- Purchase Requisitions (PR) tracking
- Service orders management
- Status tracking and cost monitoring

### 6. Cost Analysis (/cost)
- Total cost breakdown by work orders
- Cost distribution by type (Resources, Materials, Services)
- Cost percentage per work type
- Backlog cost tracking

## Project Structure
```
maintenance-planning-tool/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Alert.tsx
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── FilterBar.tsx
│   │   ├── Layout.tsx
│   │   └── Table.tsx
│   ├── views/               # Page components
│   │   ├── Dashboard.tsx
│   │   ├── AnnualPlanning.tsx
│   │   ├── GanttChart.tsx
│   │   ├── Resources.tsx
│   │   ├── Materials.tsx
│   │   └── Cost.tsx
│   ├── styles/              # Component styles
│   ├── types/               # TypeScript type definitions
│   ├── data/                # Mock data and API integration
│   ├── App.tsx              # Main application
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── attached_assets/         # Design system packages and BRD
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies
```

## API Integration
The application uses mock data for demonstration. For production integration with ERPAPP10:

See `src/data/mockData.ts` for:
- Sample API request URLs
- Request payloads
- Response data structures
- API endpoint examples

Example API endpoints:
- `GET /work-tasks` - Fetch work tasks with filters
- `GET /dashboard/metrics` - Fetch dashboard metrics
- `POST /resources/allocation` - Get resource allocation
- `POST /reports/generate` - Generate and download reports
- `GET /costs/breakdown` - Fetch cost data

## Responsive Design
The application is fully responsive and adapts to:
- **Mobile phones** (< 640px): Stacked layout, mobile navigation
- **Tablets** (640px - 1024px): Optimized layout
- **iPads** (768px - 1024px): Tablet-optimized views
- **Laptops/Desktops** (> 1024px): Full-width layout

## Accessibility (WCAG Compliance)
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus visible indicators
- Color contrast compliance
- Screen reader friendly
- Alt text for icons

## Design System
Based on mds-foundations and mds-react-wrapper packages:
- Consistent color tokens
- Typography scale
- Spacing system
- Border radius tokens
- Shadow tokens
- Transition animations

## Development

### Running the Application
```bash
npm install          # Install dependencies
npm run dev          # Start development server (port 5000)
npm run build        # Build for production
```

### Key Configuration
- Server binds to `0.0.0.0:5000` for Replit compatibility
- Vite configured with host allowance for iframe support
- Path aliases: `@/` for src, `@assets/` for attached_assets

## Recent Changes
- [2025-10-03] Redesigned to match APM Terminals branding
  - Updated color system with navy blue (#1f3250) and Maersk blue (#1565C0)
  - Redesigned header with navy gradient and white text
  - Enhanced button styling with shadows and hover effects
  - Improved filter components with modern styling
  - Updated typography with Roboto/Open Sans fonts
  - Ensured WCAG AA compliance (4.6:1 contrast ratio on all interactive elements)
- [2025-10-03] Initial implementation of all core features
  - Created responsive layout with mobile-first approach
  - Implemented all six main views (Dashboard, Planning, Gantt, Resources, Materials, Cost)
  - Added mock data with comprehensive API integration comments
  - Added ARIA labels, roles, and keyboard navigation support

## Future Enhancements
- Real-time data integration with ERPAPP10
- Advanced forecasting with variance modeling
- Interactive Planning Board with drag-and-drop
- Real-time KPI tracking
- Advanced reporting and export options
- Integration with Berth Plan

## User Preferences
- Clean, professional design following mds design system
- Responsive across all devices
- Focus on usability and data clarity
- One-click export functionality prioritized
