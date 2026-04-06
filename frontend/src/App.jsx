import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import BirdSpeciesPage from './pages/BirdSpeciesPage'
import SpeciesOverviewPage from './pages/SpeciesOverviewPage'
import MigrationPage from './pages/MigrationPage'
import MigrationResourcePage from './pages/MigrationResourcePage'
import MonitoringPage from './pages/MonitoringPage'
import MonitoringResourcePage from './pages/MonitoringResourcePage'
import ConservationPage from './pages/ConservationPage'
import ConservationEndangeredPage from './pages/ConservationEndangeredPage'
import ConservationWildlifeActionPlanPage from './pages/ConservationWildlifeActionPlanPage'
import ExtinctBirdsPage from './pages/ExtinctBirdsPage'
import ExtinctSpeciesOverviewPage from './pages/ExtinctSpeciesOverviewPage'
import ConservationIssuesPage from './pages/ConservationIssuesPage'
import BirdOrganizationsPage from './pages/BirdOrganizationsPage'
import DataExplorerPage from './pages/DataExplorerPage'
import EducationPage from './pages/EducationPage'
import EducatorResourcesPage from './pages/EducatorResourcesPage'
import BirdingHotspotsPage from './pages/BirdingHotspotsPage'
import VolunteerOpportunitiesPage from './pages/VolunteerOpportunitiesPage'
import HelpingBirdsPage from './pages/HelpingBirdsPage'
import BirdLabPage from './pages/BirdLabPage'
import BirdLabPeoplePage from './pages/BirdLabPeoplePage'
import BirdLabHistoryPage from './pages/BirdLabHistoryPage'
import BirdLabResearchPage from './pages/BirdLabResearchPage'
import BirdLabResourcesPage from './pages/BirdLabResourcesPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/"              element={<HomePage />} />
          <Route path="/bird-species"              element={<BirdSpeciesPage />} />
          <Route path="/bird-species/:slug"        element={<SpeciesOverviewPage />} />
          <Route path="/migration"            element={<MigrationPage />} />
          <Route path="/migration/:slug"      element={<MigrationResourcePage />} />
          <Route path="/monitoring"           element={<MonitoringPage />} />
          <Route path="/monitoring/:slug"     element={<MonitoringResourcePage />} />
          <Route path="/conservation"                          element={<ConservationPage />} />
          <Route path="/conservation/endangered-species"      element={<ConservationEndangeredPage />} />
          <Route path="/conservation/wildlife-action-plan"    element={<ConservationWildlifeActionPlanPage />} />
          <Route path="/conservation/extinct-birds"           element={<ExtinctBirdsPage />} />
          <Route path="/conservation/extinct-birds/:slug"     element={<ExtinctSpeciesOverviewPage />} />
          <Route path="/conservation/major-issues"            element={<ConservationIssuesPage />} />
          <Route path="/conservation/organizations"           element={<BirdOrganizationsPage />} />
          <Route path="/data-explorer" element={<DataExplorerPage />} />
          <Route path="/education"                                    element={<EducationPage />} />
          <Route path="/education/educator-resources"                 element={<EducatorResourcesPage />} />
          <Route path="/education/birding-hotspots"                   element={<BirdingHotspotsPage />} />
          <Route path="/education/volunteer-opportunities"            element={<VolunteerOpportunitiesPage />} />
          <Route path="/education/helping-birds-from-home"            element={<HelpingBirdsPage />} />
          <Route path="/birdlab"                          element={<BirdLabPage />} />
          <Route path="/birdlab/people"                 element={<BirdLabPeoplePage />} />
          <Route path="/birdlab/history"                element={<BirdLabHistoryPage />} />
          <Route path="/birdlab/current-research"       element={<BirdLabResearchPage />} />
          <Route path="/birdlab/resources"              element={<BirdLabResourcesPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
