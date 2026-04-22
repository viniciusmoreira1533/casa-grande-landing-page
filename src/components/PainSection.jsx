import WhatsAppIcon from './WhatsAppIcon';

export default function PainSection({ onCtaClick }) {
  return (
    <section
      id="dor"
      className="relative py-20 sm:py-28 bg-dark-900 overflow-hidden"
      aria-label="O problema"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-whatsapp/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Problem */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <span className="text-red-400 text-xs font-semibold tracking-wide uppercase">O Problema</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              O Fim dos Ambientes Gelados e do{' '}
              <span className="text-red-400">Mofo.</span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-6">
              Conviver com áreas frias, correntes de ar e a proliferação de umidade compromete o seu conforto, a sua saúde e a estrutura do seu imóvel. Na Serra Gaúcha, soluções paliativas apenas aumentam a conta de luz sem resolver o problema real.
            </p>

            {/* Problem indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { icon: '🌡️', label: 'Áreas Geladas' },
                { icon: '💧', label: 'Umidade e Mofo' },
                { icon: '⚡', label: 'Conta de Luz Alta' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-dark-800 border border-red-500/10">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-gray-300 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Solution */}
          <div className="glass-card rounded-2xl p-8 sm:p-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-whatsapp/10 border border-whatsapp/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-whatsapp" />
              <span className="text-whatsapp text-xs font-semibold tracking-wide uppercase">A Solução</span>
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              A Casagrande Aquecimentos entrega conforto absoluto, homogêneo e invisível. Desenhamos e executamos projetos que transformam o clima da sua casa, hotel ou hospital, garantindo bem-estar contínuo e proteção ao seu patrimônio em qualquer dia do ano.
            </p>

            {/* Solution benefits */}
            <div className="space-y-4 mb-8">
              {[
                'Conforto térmico homogêneo',
                'Eliminação total de mofo',
                'Eficiência energética superior',
                'Proteção ao patrimônio',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-whatsapp/15 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-whatsapp" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onCtaClick}
              className="btn-cta inline-flex items-center gap-3 px-6 py-3.5 rounded-xl text-white font-bold text-sm sm:text-base w-full justify-center cursor-pointer"
              id="pain-cta"
            >
              <WhatsAppIcon className="w-5 h-5" />
              QUERO PROTEGER MEU IMÓVEL AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
