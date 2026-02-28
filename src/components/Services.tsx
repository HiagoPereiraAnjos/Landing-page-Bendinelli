import { 
  BarChart3, 
  FileText, 
  Scale, 
  Wrench, 
  UserRoundCheck 
} from 'lucide-react';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Gestão Financeira',
    description: 'Controle rigoroso de contas, elaboração de previsões orçamentárias e relatórios detalhados para total transparência.',
    icon: BarChart3,
  },
  {
    title: 'Gestão Administrativa',
    description: 'Organização de assembleias, gestão de documentos, cobranças e suporte completo ao dia a dia do condomínio.',
    icon: FileText,
  },
  {
    title: 'Assessoria Jurídica',
    description: 'Suporte legal especializado para questões condominiais, trabalhistas e mediação de conflitos.',
    icon: Scale,
  },
  {
    title: 'Gestão de Manutenção',
    description: 'Acompanhamento de cronogramas de manutenção preventiva e corretiva para garantir a segurança e valorização.',
    icon: Wrench,
  },
  {
    title: 'Atendimento ao Síndico',
    description: 'Suporte direto e consultoria estratégica para auxiliar o síndico em suas tomadas de decisão.',
    icon: UserRoundCheck,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-blue-700 font-bold tracking-widest uppercase text-xs sm:text-sm">Nossos Serviços</span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Soluções Completas para uma Gestão Eficiente
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Oferecemos um leque de serviços especializados para atender todas as necessidades do seu condomínio com profissionalismo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

