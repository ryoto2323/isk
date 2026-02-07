import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Projects } from './components/Projects';
import { ServiceFlow } from './components/ServiceFlow';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { CustomCursor } from './components/ui/CustomCursor';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { DustParticles } from './components/ui/DustParticles';
import { PrivacyPolicy } from './components/ui/PrivacyPolicy';

const App: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="antialiased bg-isk-bg min-h-screen selection:bg-isk-text selection:text-white cursor-none">
      <LoadingScreen />
      
      {/* Atmosphere & UI Layers */}
      <div className="bg-noise" />
      <DustParticles />
      <CustomCursor />
      <ScrollProgress />
      
      {/* Modals */}
      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Projects />
        <ServiceFlow />
        <FAQ />
        <Contact />
      </main>
      <Footer onPrivacyClick={() => setIsPrivacyOpen(true)} />
    </div>
  );
};

export default App;