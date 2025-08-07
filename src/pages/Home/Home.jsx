import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import '../../../src/pages/Home/styles/Home.css';

export default function Home() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
