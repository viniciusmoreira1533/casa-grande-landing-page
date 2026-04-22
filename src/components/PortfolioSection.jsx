import WhatsAppIcon from './WhatsAppIcon';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Calefação Invisível',
    subtitle: 'Piso Aquecido e Radiadores',
    description:
      'O máximo do conforto silencioso. Elimina zonas frias e suprime o mofo, protegendo a saúde da sua família com estética impecável e sem ocupar espaço.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Bombas de Calor e Caldeiras Inteligentes',
    subtitle: 'Potência e Economia',
    description:
      'A união definitiva entre potência e economia. Equipamentos de alto rendimento operando com matrizes ecológicas (pellets), gás ou lenha para garantir calor constante, mesmo nas piores geadas.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: 'Água Quente em Alta Demanda',
    subtitle: 'Estabilidade Sem Oscilações',
    description:
      'Estabilidade sem oscilações para residências premium, redes hoteleiras e hospitais. Pressão e temperatura perfeitas em múltiplos pontos de consumo simultâneos.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Controle Total',
    subtitle: 'Piscinas e Ar VRF',
    description:
      'Climatização completa para o seu lazer e para grandes espaços arquitetônicos, aliada à nossa manutenção preventiva e corretiva especializada para que nada falhe quando você mais precisar.',
  },
];

export default function PortfolioSection({ onCtaClick }) {
  return (
    <section
      id="portfolio"
      className="relative py-20 sm:py-28 bg-dark-800 overflow-hidden"
      aria-label="Nossos serviços"
    >
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-whatsapp/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-whatsapp/10 border border-whatsapp/20 mb-6">
            <span className="text-whatsapp text-xs font-semibold tracking-wide uppercase">Soluções</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
            Tecnologia Europeia Para Superar o{' '}
            <span className="text-whatsapp">Frio Mais Rigoroso</span>
          </h2>
        </div>

        {/* Service cards grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <article
              key={index}
              className="glass-card rounded-2xl p-6 sm:p-8 group"
            >
              {/* Icon */}
              <div className="icon-glow w-14 h-14 rounded-xl flex items-center justify-center text-whatsapp mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {service.title}
              </h3>
              <p className="text-whatsapp text-sm font-medium mb-3">
                {service.subtitle}
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={onCtaClick}
            className="btn-cta inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-sm sm:text-base cursor-pointer"
            id="portfolio-cta"
          >
            <WhatsAppIcon className="w-5 h-5" />
            DESCOBRIR O SISTEMA IDEAL PARA O MEU PROJETO
          </button>
        </div>
      </div>
    </section>
  );
}
