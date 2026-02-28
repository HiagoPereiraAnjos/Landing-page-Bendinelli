import { WhatsAppLogo } from './Icons';

export default function WhatsAppButton() {
  const phoneNumber = '5511957726055';
  const message = encodeURIComponent('Olá, gostaria de solicitar uma proposta para administração do meu condomínio.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all hover:scale-110 group animate-bounce"
      aria-label="Falar no WhatsApp"
    >
      <WhatsAppLogo size={32} />
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
        Fale Conosco
      </span>
    </a>
  );
}

