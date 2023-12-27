import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Layout from './layout/Layout';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import AllWebsitesPage from './pages/AllWebsitesPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Layout>
      <LoadingScreen />
      <Header />
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/projects/all-websites' element={<AllWebsitesPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Layout>
  );
}

export default App;
