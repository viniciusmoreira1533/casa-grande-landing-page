import WhatsAppIcon from './WhatsAppIcon';

const stats = [
  { value: '15+', label: 'Anos de Experiência' },
  { value: '500+', label: 'Projetos Executados' },
  { value: '100%', label: 'Compromisso com Qualidade' },
];

export default function AuthoritySection({ onCtaClick }) {
  return (
    <section
      id="autoridade"
      className="relative py-20 sm:py-28 bg-dark-900 overflow-hidden"
      aria-label="Por que escolher a Casagrande"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-whatsapp/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: Stats */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="grid gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-6 text-center group"
                >
                  <div className="text-3xl sm:text-4xl font-black text-whatsapp mb-1 glow-text group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-whatsapp/10 border border-whatsapp/20 mb-6">
              <span className="text-whatsapp text-xs font-semibold tracking-wide uppercase">Autoridade</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              Não Aposte a Qualidade do Seu Empreendimento.{' '}
              <span className="text-whatsapp">Conte com a Casagrande.</span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              Escolher os parceiros de climatização define as próximas décadas da estrutura física do seu imóvel ou a reputação do seu negócio. A Casagrande atua sob os mais rigorosos padrões de qualidade, pontualidade nas obras e excelência técnica de sua equipe. Quando o assunto é infraestrutura de aquecimento de alta performance em Caxias do Sul e região, nós somos a escolha segura para garantir tranquilidade e resultados definitivos.
            </p>

            {/* Differentials */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {[
                { icon: '🏆', text: 'Padrão Premium de Execução' },
                { icon: '⏱️', text: 'Pontualidade Garantida' },
                { icon: '🛡️', text: 'Equipe Técnica Certificada' },
                { icon: '📐', text: 'Projetos Sob Medida' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-dark-800 border border-white/5">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onCtaClick}
              className="btn-cta inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-sm sm:text-base cursor-pointer"
              id="authority-cta"
            >
              <WhatsAppIcon className="w-5 h-5" />
              FALAR COM UM ESPECIALISTA EM CLIMATIZAÇÃO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
