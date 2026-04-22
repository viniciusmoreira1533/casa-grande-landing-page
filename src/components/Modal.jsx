import { useEffect, useRef } from 'react';

const WEBHOOK_URL = 'https://n8nwebhook.server2.wolframe.app/webhook/356b178f-8b4c-403b-80a8-101edb8fe8b0';
const WHATSAPP_URL = 'https://wa.me/5554991828990?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento%20para%20aquecimento.';

export default function Modal({ isOpen, onClose }) {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus the name field when modal opens
      setTimeout(() => nameRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      nome: formData.get('nome'),
      whatsapp: formData.get('whatsapp'),
    };

    // Fire webhook (fire-and-forget)
    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).catch(() => {
      // Silently ignore errors
    });

    // Redirect immediately
    window.location.href = WHATSAPP_URL;
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-dark-800 p-6 sm:p-8 shadow-2xl animate-fade-in-up"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Green accent line */}
        <div className="w-16 h-1 bg-whatsapp rounded-full mb-6 mx-auto" />

        <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-white text-center mb-2">
          Falta pouco para o seu conforto térmico!
        </h2>
        <p className="text-gray-400 text-center text-sm mb-6">
          Preencha seus dados e fale direto com um especialista.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="modal-nome" className="block text-sm font-medium text-gray-300 mb-1.5">
              Nome completo
            </label>
            <input
              ref={nameRef}
              type="text"
              id="modal-nome"
              name="nome"
              required
              placeholder="Seu nome completo"
              className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-whatsapp focus:ring-1 focus:ring-whatsapp/50 transition-all"
            />
          </div>
          <div>
            <label htmlFor="modal-whatsapp" className="block text-sm font-medium text-gray-300 mb-1.5">
              WhatsApp
            </label>
            <input
              type="tel"
              id="modal-whatsapp"
              name="whatsapp"
              required
              placeholder="(00) 00000-0000"
              className="w-full px-4 py-3 rounded-xl bg-dark-700 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-whatsapp focus:ring-1 focus:ring-whatsapp/50 transition-all"
            />
          </div>

          <button
            type="submit"
            className="btn-cta w-full py-4 rounded-xl text-white font-bold text-base sm:text-lg mt-2 flex items-center justify-center gap-2 cursor-pointer"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar com Especialista agora
          </button>
        </form>
      </div>
    </div>
  );
}
