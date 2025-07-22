import { HeroSection } from './components/HeroSection.jsx';
import { Navbar } from './components/Navbar.jsx';
import { About } from './components/About.jsx';
import { Projects } from './components/Projects.jsx';
// import { Contact } from './components/Contact.jsx';

function App() {

  return (
    <main id="home">
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      {/* <Contact /> */}
    </main>
  )
}

export default App
