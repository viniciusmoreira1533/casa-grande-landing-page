import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppBubble({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-whatsapp rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer group"
      aria-label="Abrir formulário de contato via WhatsApp"
      id="whatsapp-bubble"
    >
      {/* Pulse ring */}
      <span className="absolute w-full h-full rounded-full bg-whatsapp animate-pulse-ring" />
      <span className="absolute w-full h-full rounded-full bg-whatsapp animate-pulse-ring" style={{ animationDelay: '0.5s' }} />

      <WhatsAppIcon className="w-8 h-8 text-white relative z-10 group-hover:scale-110 transition-transform" />
    </button>
  );
}
