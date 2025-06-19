import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';
import Navigation from './components/Navigation';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import './App.css'

// Layout component that includes navigation
const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

// Create router using the new createBrowserRouter API
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <WelcomePage />
      },
      {
        path: "home",
        element: <HomePage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
