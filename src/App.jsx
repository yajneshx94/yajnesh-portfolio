import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Journey from './pages/Journey'
import Skills from './pages/Skills'
import Profile from './pages/Profile'
import Resume from './pages/Resume'
import ProjectDetail from './pages/ProjectDetail'

export default function App() {
  return (
    <BrowserRouter>
      <div className="content-layer min-h-screen flex">
        <Navbar />
        <div className="flex-1 ml-0 md:ml-20 lg:ml-64">
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/journey"  element={<Journey />} />
            <Route path="/skills"   element={<Skills />} />
            <Route path="/profile"  element={<Profile />} />
            <Route path="/resume"   element={<Resume />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  )
}