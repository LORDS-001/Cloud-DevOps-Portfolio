import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation"
import { Hero } from "./components/Hero"
import { About } from "./components/About"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Experience } from "./components/Experience"
import { PersonalDetails } from "./components/PersonalDetails"
import { Certifications } from "./components/Certifications"
import { SystemStatus } from "./components/SystemStatus"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<div className="min-h-screen bg-slate-900">
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <PersonalDetails />
          <Certifications />
          <SystemStatus />
          <Contact />
          <Footer />
        </div>} />
      </Routes>
    </BrowserRouter>
  )
}