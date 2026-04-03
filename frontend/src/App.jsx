import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import BirdSpeciesPage from './pages/BirdSpeciesPage'
import MigrationPage from './pages/MigrationPage'
import MonitoringPage from './pages/MonitoringPage'
import ConservationPage from './pages/ConservationPage'
import DataExplorerPage from './pages/DataExplorerPage'
import EducationPage from './pages/EducationPage'
import BirdLabPage from './pages/BirdLabPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/"              element={<HomePage />} />
          <Route path="/bird-species"  element={<BirdSpeciesPage />} />
          <Route path="/migration"     element={<MigrationPage />} />
          <Route path="/monitoring"    element={<MonitoringPage />} />
          <Route path="/conservation"  element={<ConservationPage />} />
          <Route path="/data-explorer" element={<DataExplorerPage />} />
          <Route path="/education"     element={<EducationPage />} />
          <Route path="/birdlab"       element={<BirdLabPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
