import { createBrowserRouter, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import JanitorialPage from './pages/services/JanitorialPage';
import BiohazardPage from './pages/services/BiohazardPage';
import JunkRemovalPage from './pages/services/JunkRemovalPage';
import PressureWashingPage from './pages/services/PressureWashingPage';
import MaintenancePage from './pages/services/MaintenancePage';
import MoveInPage from './pages/services/MoveInPage';
import EmergencyServicesPage from './pages/services/EmergencyServicesPage';
import EmergencyPlumbingPage from './pages/services/EmergencyPlumbingPage';

function RootLayout() {
  return (
    <HelmetProvider>
      <Outlet />
    </HelmetProvider>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'services/janitorial', element: <JanitorialPage /> },
      { path: 'services/biohazard', element: <BiohazardPage /> },
      { path: 'services/junk-removal', element: <JunkRemovalPage /> },
      { path: 'services/pressure-washing', element: <PressureWashingPage /> },
      { path: 'services/maintenance-repairs', element: <MaintenancePage /> },
      { path: 'services/move-in-section-8', element: <MoveInPage /> },
      { path: 'services/emergency-services', element: <EmergencyServicesPage /> },
      { path: 'services/emergency-plumbing', element: <EmergencyPlumbingPage /> },
    ],
  },
]);
