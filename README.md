# E-commerce UI Application

This is a UI-only version of the e-commerce application. It contains all the frontend components without requiring a backend server to run.

## Features

- Modern, responsive design with dark/light mode support
- Product browsing and filtering
- Cart functionality with localStorage persistence
- Checkout process
- Mobile-friendly layout

## Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Navigate to the ui-only directory:
   ```
   cd ui-only
   ```

2. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn
   ```

3. Start the development server:
   ```
   npm run dev
   ```
   or
   ```
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)

## Building for Production

To create a production build:

```
npm run build
```
or
```
yarn build
```

The build files will be generated in the `dist` directory, which can be deployed to any static hosting service.

To preview the production build locally:

```
npm run preview
```
or
```
yarn preview
```

## Project Structure

- `/src/components` - UI components organized by feature/section
- `/src/context` - React Context for global state management
- `/src/data` - Mock data for products and categories
- `/src/hooks` - Custom React hooks
- `/src/pages` - Page components for different routes
- `/src/types` - TypeScript type definitions
- `/src/utils` - Utility functions

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Wouter (for routing)
- Lucide React (for icons)