import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import ScrollIndicator from './components/ScrollIndicator';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-secondary-900 transition-colors duration-200">
          <ScrollIndicator />
          <Navbar />
          <main className="dark:text-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/properties/:id" element={<PropertyDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
          <ThemeSwitcher />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;