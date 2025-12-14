import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Vision from './pages/Vision';
import Gamification from './pages/Gamification';
import GameDesign from './pages/GameDesign';
import Education from './pages/Education';
import ESG from './pages/ESG';
import EmergingTech from './pages/EmergingTech';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main className="flex-grow" style={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/vision" element={<Vision />} />
              <Route path="/gamification" element={<Gamification />} />
              <Route path="/game-design-studio" element={<GameDesign />} />
              <Route path="/education" element={<Education />} />
              <Route path="/esg" element={<ESG />} />
              <Route path="/emerging-tech" element={<EmergingTech />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
