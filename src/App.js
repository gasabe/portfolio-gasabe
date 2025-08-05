import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from '../src/pages/Login/screens/Login';
import Experience from '../src/pages/Home/pages/Experience';
import Projects from '../src/pages/Home/pages/Projects';
import About from '../src/pages/Home/pages/About';
import Contact from '../src/pages/Home/pages/Contact';
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />}>
        <Route index element={<Experience />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}