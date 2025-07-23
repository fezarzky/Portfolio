import { HeroSection } from './components/HeroSection.jsx';
import { Navbar } from './components/Navbar.jsx';
import { About } from './components/About.jsx';
import { Projects } from './components/Projects.jsx';
import { Contacts } from './components/Contacts.jsx';
import { Footer } from './components/Footer.jsx';

function App() {
  return (
    <div>
        <Navbar />
      <main id="home">
        <HeroSection />
        <About />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default App
