import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <span className="text-blue-700 font-bold tracking-widest uppercase text-xs sm:text-sm">Quem Somos</span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Especialistas em Gestão Condominial com Foco em Excelência
            </h2>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              A <strong>Bendinelli Gestora</strong> nasceu com a missão de transformar a administração de condomínios em São Paulo. Entendemos que cada condomínio é um ecossistema único que exige atenção aos detalhes, transparência financeira e um atendimento humano e ágil.
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Nossa equipe é composta por profissionais altamente qualificados, prontos para oferecer soluções inteligentes que reduzem custos operacionais sem comprometer a qualidade dos serviços e a valorização do patrimônio.
            </p>
            
            <div className="mt-10 space-y-4">
              {[
                'Atendimento personalizado e próximo ao síndico',
                'Transparência total em todas as movimentações financeiras',
                'Uso de tecnologia para agilizar processos burocráticos',
                'Foco na valorização do patrimônio e bem-estar dos moradores'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-blue-700 mt-1 flex-shrink-0" size={18} />
                  <span className="text-slate-700 font-medium text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-video sm:aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                alt="Prédio Comercial Moderno"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-32 h-32 md:w-48 md:h-48 bg-blue-700 rounded-3xl -z-10 opacity-10"></div>
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-32 h-32 md:w-48 md:h-48 bg-slate-900 rounded-3xl -z-10 opacity-5"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
