import { 
  TrendingDown, 
  ShieldCheck, 
  Zap, 
  Users, 
  Cpu 
} from 'lucide-react';
import { motion } from 'motion/react';

const benefits = [
  {
    title: 'Redução de Custos',
    description: 'Análise criteriosa de contratos e otimização de recursos para diminuir a taxa condominial.',
    icon: TrendingDown,
  },
  {
    title: 'Transparência Total',
    description: 'Acesso fácil a todas as contas e documentos através de nossa plataforma digital.',
    icon: ShieldCheck,
  },
  {
    title: 'Atendimento Rápido',
    description: 'Respostas ágeis para síndicos e moradores, eliminando esperas desnecessárias.',
    icon: Zap,
  },
  {
    title: 'Equipe Especializada',
    description: 'Profissionais com vasta experiência no mercado imobiliário e condominial.',
    icon: Users,
  },
  {
    title: 'Tecnologia Moderna',
    description: 'Sistemas integrados que facilitam a gestão e a comunicação interna do condomínio.',
    icon: Cpu,
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-700 font-bold tracking-widest uppercase text-xs sm:text-sm">Por que nos escolher</span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Benefícios que Fazem a Diferença no seu Dia a Dia
            </h2>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed">
              Trabalhamos para que a gestão do seu condomínio seja sinônimo de tranquilidade e valorização. Nossos pilares são construídos sobre a confiança e a eficiência.
            </p>
            
            <div className="mt-10 md:mt-12 space-y-6 md:space-y-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-50 p-2.5 sm:p-3 rounded-lg text-blue-700 flex-shrink-0">
                    <benefit.icon size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">{benefit.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 mt-1">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-blue-700 rounded-full blur-[80px] md:blur-[100px] opacity-20 -mr-24 -mt-24 md:-mr-32 md:-mt-32"></div>
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Nossa Promessa</h3>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed italic">
                  "Comprometemo-nos a entregar uma gestão onde a transparência não é apenas um valor, mas uma prática diária. Queremos que cada morador sinta que seu investimento está sendo bem cuidado."
                </p>
                <div className="mt-8 md:mt-10 flex items-center space-x-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-700 flex items-center justify-center font-bold text-lg md:text-xl">B</div>
                  <div>
                    <p className="font-bold text-sm md:text-base">Diretoria Bendinelli</p>
                    <p className="text-xs md:text-sm text-slate-400">Gestão de Condomínios</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-slate-100 hidden sm:block">
              <p className="text-2xl md:text-3xl font-bold text-blue-700">20%</p>
              <p className="text-xs md:text-sm font-semibold text-slate-600">Média de redução<br/>de custos iniciais</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
