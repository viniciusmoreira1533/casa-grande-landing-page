import WhatsAppIcon from './WhatsAppIcon';

export default function HeroSection({ onCtaClick }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.png"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-whatsapp/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-whatsapp/3 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-whatsapp/10 border border-whatsapp/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
            <span className="text-whatsapp text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Serra Gaúcha · Climatização Premium
            </span>
          </div>

          <h1 className="animate-fade-in-up-delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            Inverno Sem Sofrimento.{' '}
            <span className="text-whatsapp glow-text">
              Aquecimento Inteligente, Eficiente e Definitivo.
            </span>
          </h1>

          <p className="animate-fade-in-up-delay-2 mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
            Sistemas de aquecimento de alto padrão que garantem a temperatura perfeita no inverno da Serra Gaúcha, com máxima eficiência energética e zero dor de cabeça.
          </p>

          <div className="animate-fade-in-up-delay-3 mt-10">
            <button
              onClick={onCtaClick}
              className="btn-cta inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-base sm:text-lg cursor-pointer"
              id="hero-cta"
            >
              <WhatsAppIcon className="w-6 h-6" />
              SOLICITAR ORÇAMENTO VIA WHATSAPP
            </button>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in-up-delay-3 mt-12 flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-whatsapp" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-400">Tecnologia Europeia</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-whatsapp" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-400">Projetos Sob Medida</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-whatsapp" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-400">Eficiência Energética</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent" />
    </section>
  );
}
