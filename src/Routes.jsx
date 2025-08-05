import { Navigate, useRoutes } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import Login from '../src/pages/Login/screens/Login';
import About from '../src/pages/Home/pages/About';
import Experience from '../src/pages/Home/pages/Experience';
import Projects from '../src/pages/Home/pages/Projects';
import Contact from '../src/pages/Home/pages/Contact';

const AppRoutes = [
  { 
    path: '/login', 
    element: <Login /> 
  },
  {
    path: '/',
    element: <Home />,
    children: [
      { index: true, element: <Navigate to="experience" replace /> },
      { path: 'about', element: <About /> },
      { path: 'experience', element: <Experience /> },
      { path: 'projects', element: <Projects /> },
      { path: 'contact', element: <Contact /> },
      // no pongas '*' aquí si causa bucle
    ],
  },
  // Fallback para rutas fuera de todas las demás
  {
    path: '*',
    element: <Navigate to="/login" replace />
  }
];


export default function Routes() {
  return useRoutes(AppRoutes);
}
