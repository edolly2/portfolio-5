import './App.css';
import { useState } from 'react';
import Layout from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import MobileMenu from './components/MobileMenu';


function App() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  return (
    <Layout>
      <Routes>

        <MobileMenu onMenuClick={() => { setMobileMenuActive(true) }} style={{ display: mobileMenuActive ? 'flex' : 'none' }} onExitClick={() => { setMobileMenuActive(false) }} onNavLinkClick={() => { setMobileMenuActive(false) }} />
        <Route to='/' element={<HomePage />} />
        <Route to='/about' element={<AboutPage />} />
        <Route to='/skills' element={<SkillsPage />} />
        <Route to='/projects' element={<ProjectsPage />} />
        <Route to='/contact' element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
