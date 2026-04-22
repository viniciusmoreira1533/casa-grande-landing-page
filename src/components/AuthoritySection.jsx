import WhatsAppIcon from './WhatsAppIcon';

const stats = [
  { value: '40+', label: 'Anos de experiência técnica' },
  { value: '1.000+', label: 'Projetos entregues' },
  { value: '100%', label: 'Foco em climatização de alta performance' },
];

export default function AuthoritySection({ onCtaClick }) {
  return (
    <section
      id="autoridade"
      className="relative py-20 sm:py-28 bg-dark-900 overflow-hidden"
      aria-label="Nosso Legado e Autoridade"
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
              <span className="text-whatsapp text-xs font-semibold tracking-wide uppercase">O Legado</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              4 décadas de Engenharia Térmica:{' '}
              <span className="text-whatsapp">De Geração em Geração, Dominando o Frio.</span>
            </h2>

            <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              A Casagrande não apenas instala equipamentos; nós escrevemos a história do conforto térmico na Serra Gaúcha. São mais de 40 anos de evolução técnica e experiência de mercado, partindo das primeiras caldeiras robustas até os mais sofisticados sistemas de bombas de calor e automação climática de hoje. Nossa trajetória é medida por milhares de ambientes transformados e pela confiança de quem sabe que, para enfrentar o rigor do nosso inverno, a experiência é o único componente que não pode ser improvisado.
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
              id="legacy-cta"
            >
              <WhatsAppIcon className="w-5 h-5" />
              QUERO A EXPERIÊNCIA DA CASAGRANDE NO MEU PROJETO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
