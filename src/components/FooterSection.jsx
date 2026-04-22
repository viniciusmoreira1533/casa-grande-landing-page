import WhatsAppIcon from './WhatsAppIcon';

export default function FooterSection({ onCtaClick }) {
  return (
    <footer
      id="urgencia"
      className="relative py-20 sm:py-28 overflow-hidden"
      aria-label="Seção de urgência e rodapé"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-black" />

      {/* Accent glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-whatsapp/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
            <svg className="w-4 h-4 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-orange-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
              Planeje-se com Antecedência
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            A Janela para a Otimização Térmica é{' '}
            <span className="text-orange-400">Curta.</span>
          </h3>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Antecipe a adequação do seu sistema. O planejamento técnico exige estudo de viabilidade e integração arquitetônica. Não espere o frio extremo chegar para buscar uma solução.
          </p>

          <button
            onClick={onCtaClick}
            className="btn-cta inline-flex items-center gap-3 px-10 py-5 rounded-xl text-white font-bold text-base sm:text-lg cursor-pointer animate-float"
            id="footer-cta"
          >
            <WhatsAppIcon className="w-6 h-6" />
            GARANTIR MEU CONFORTO TÉRMICO AGORA
          </button>

          {/* Separator */}
          <div className="section-divider my-16" />

          {/* Footer info */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src="/logo-casagrande.png"
                alt="Casagrande Aquecimentos"
                className="h-10"
              />
            </div>
            <p className="text-gray-500 text-xs sm:text-sm">
              © {new Date().getFullYear()} Casagrande Aquecimentos. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
              <span className="text-gray-500 text-xs sm:text-sm">Caxias do Sul · Serra Gaúcha</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
