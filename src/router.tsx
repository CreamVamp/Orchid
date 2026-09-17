import { createBrowserRouter, Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import JanitorialPage from './pages/services/JanitorialPage';
import JunkRemovalPage from './pages/services/JunkRemovalPage';
import PressureWashingPage from './pages/services/PressureWashingPage';

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
      { path: 'services/junk-removal', element: <JunkRemovalPage /> },
      { path: 'services/pressure-washing', element: <PressureWashingPage /> },
    ],
  },
]);
