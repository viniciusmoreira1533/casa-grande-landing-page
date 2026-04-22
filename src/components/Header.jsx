import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Principal">
          <a href="#" className="flex-shrink-0" aria-label="Casagrande Aquecimentos - Página inicial">
            <img
              src="/logo-casagrande.png"
              alt="Casagrande Aquecimentos - Soluções em conforto"
              className={`transition-all duration-500 ${scrolled ? 'h-10 sm:h-12' : 'h-12 sm:h-16'}`}
            />
          </a>
          <div className="hidden sm:flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
            <span className="text-xs text-gray-400 font-medium tracking-wide uppercase">
              Atendimento Online
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}
