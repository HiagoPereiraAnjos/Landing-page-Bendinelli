import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { WhatsAppLogo } from './Icons';

export default function Contact() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-700 font-bold tracking-widest uppercase text-xs sm:text-sm">Contato</span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Pronto para elevar o nível da gestão do seu condomínio?
            </h2>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Entre em contato conosco hoje mesmo e solicite uma proposta personalizada. Nossa equipe está pronta para tirar todas as suas dúvidas.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-3 sm:p-4 rounded-xl text-blue-700">
                  <Phone size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">Telefone</p>
                  <p className="text-base sm:text-lg font-bold text-slate-900">(11) 95772-6055</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-green-50 p-3 sm:p-4 rounded-xl text-[#25D366]">
                  <WhatsAppLogo size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">WhatsApp</p>
                  <p className="text-base sm:text-lg font-bold text-slate-900">55 11 95772-6055</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-3 sm:p-4 rounded-xl text-blue-700">
                  <Mail size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">E-mail</p>
                  <p className="text-base sm:text-lg font-bold text-slate-900 break-all sm:break-normal">atendimento.bendinelli@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-50 p-3 sm:p-4 rounded-xl text-blue-700">
                  <MapPin size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-semibold uppercase tracking-wider">Endereço</p>
                  <p className="text-base sm:text-lg font-bold text-slate-900">Av. Montemagno, 259 - São Paulo, SP</p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl overflow-hidden shadow-lg h-48 sm:h-64 border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.406824982468!2d-46.56586392376269!3d-23.553818361280337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e9334444445%3A0x4444444444444444!2sAv.%20Montemagno%2C%20259%20-%20Vila%20Formosa%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003344-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Solicite uma Proposta</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Telefone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition-all"
                    placeholder="(11) 00000-0000"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">E-mail</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Nome do Condomínio</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition-all"
                  placeholder="Ex: Edifício Solar"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition-all"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/20 flex items-center justify-center group"
              >
                Enviar Solicitação
                <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
