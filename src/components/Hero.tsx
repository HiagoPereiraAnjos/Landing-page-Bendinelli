import { ArrowRight, ShieldCheck, Star, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';
import { WhatsAppLogo } from './Icons';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 hidden lg:block -skew-x-6 translate-x-24 z-0"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 z-0"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-blue-700 mb-8"
            >
              <ShieldCheck size={16} />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">Gestão 100% Transparente</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
              A Gestão que seu <br className="hidden lg:block" />
              <span className="text-blue-700">Condomínio Merece</span>
            </h1>
            
            <p className="mt-8 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Especialistas em administração condominial em São Paulo. Reduzimos custos, aumentamos a segurança e garantimos transparência total em cada centavo.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
              <a
                href="#contato"
                className="inline-flex items-center justify-center px-10 py-5 bg-blue-700 text-white rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all shadow-2xl shadow-blue-700/30 group"
              >
                Solicitar Proposta
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
              </a>
              <a
                href="https://wa.me/5511957726055?text=Olá, gostaria de solicitar uma proposta para administração do meu condomínio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all group"
              >
                <WhatsAppLogo className="mr-2 text-[#25D366] group-hover:scale-110 transition-transform" size={26} />
                Falar no WhatsApp
              </a>
            </div>
            
            <div className="mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-8 border-t border-slate-100 pt-10">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                      <img src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-xs font-bold text-slate-900">+50 Condomínios Atendidos</p>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg text-green-700">
                  <TrendingDown size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900">Economia Real</p>
                  <p className="text-xs text-slate-500">Até 20% de redução de custos</p>
                </div>
              </div>
            </div>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000"
                alt="Condomínio Moderno"
                className="w-full h-auto object-cover aspect-[4/5] lg:aspect-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                <p className="text-sm font-medium opacity-80 mb-1">Destaque do Mês</p>
                <h3 className="text-xl font-bold">Gestão Eficiente em São Paulo</h3>
              </div>
            </div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-6 bg-white p-5 rounded-2xl shadow-2xl z-20 hidden md:block border border-slate-50"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900">Segurança Jurídica</p>
                  <p className="text-xs text-slate-500">Suporte 24 horas</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 hidden md:block border border-slate-50"
            >
              <div className="text-center">
                <p className="text-3xl font-black text-blue-700">100%</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Digital & Transparente</p>
              </div>
            </motion.div>

            {/* Decorative Dots */}
            <div className="absolute top-1/2 -right-12 w-24 h-24 grid grid-cols-4 gap-2 opacity-20 hidden lg:grid">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-blue-700 rounded-full"></div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center opacity-30"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}

