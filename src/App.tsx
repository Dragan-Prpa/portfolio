import { useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [active, setActive] = useState<'about' | 'projects' | 'contact'>('about');
  const [transitioning, setTransitioning] = useState(false);
  const [next, setNext] = useState<'about' | 'projects' | 'contact'>('about');

  const handleClick = (section: typeof active) => {
    if (section === active || transitioning) return;
    setTransitioning(true);
    setNext(section);

    // screen "off" duration
    setTimeout(() => {
      setActive(section);
      // screen "on" duration
      setTimeout(() => setTransitioning(false), 50);
    }, 50);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="flex gap-4 p-4 bg-gray-900">
        <button onClick={() => handleClick('about')}>About</button>
        <button onClick={() => handleClick('projects')}>Projects</button>
        <button onClick={() => handleClick('contact')}>Contact</button>
      </header>

      <main className="relative flex-1 flex items-center justify-center">
        {/* screen overlay efekat */}
        {transitioning && (
          <div className="absolute inset-0 bg-black z-50 animate-screen-off"></div>
        )}

        <div className={`absolute inset-0 transition-opacity duration-50 ${transitioning ? 'opacity-0' : 'opacity-100'}`}>
          {active === 'about' && <About />}
          {active === 'projects' && <Projects />}
          {active === 'contact' && <Contact />}
        </div>
      </main>
    </div>
  );
}