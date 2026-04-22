import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PainSection from './components/PainSection';
import PortfolioSection from './components/PortfolioSection';
import AuthoritySection from './components/AuthoritySection';
import FooterSection from './components/FooterSection';
import Modal from './components/Modal';
import WhatsAppBubble from './components/WhatsAppBubble';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-dark-900 text-white min-h-screen font-sans antialiased">
      <Header />

      <main>
        <HeroSection onCtaClick={openModal} />
        <div className="section-divider" />
        <PainSection onCtaClick={openModal} />
        <div className="section-divider" />
        <PortfolioSection onCtaClick={openModal} />
        <div className="section-divider" />
        <AuthoritySection onCtaClick={openModal} />
      </main>

      <FooterSection onCtaClick={openModal} />

      {/* Floating WhatsApp bubble */}
      <WhatsAppBubble onClick={openModal} />

      {/* Lead capture modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
