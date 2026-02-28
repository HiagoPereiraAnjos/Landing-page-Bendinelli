import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: 'Ricardo Oliveira',
    role: 'Síndico Profissional',
    content: 'A transição para a Bendinelli foi a melhor decisão que tomamos. A transparência nas contas e a agilidade no atendimento ao síndico facilitaram muito o meu trabalho.',
    stars: 5,
  },
  {
    name: 'Mariana Santos',
    role: 'Conselheira Fiscal',
    content: 'Como conselheira, prezo muito pelo detalhamento das contas. A Bendinelli entrega relatórios impecáveis e fáceis de entender. Recomendo fortemente.',
    stars: 5,
  },
  {
    name: 'Carlos Eduardo',
    role: 'Morador e Ex-Síndico',
    content: 'Notei uma melhora significativa na manutenção do prédio e na cordialidade dos funcionários desde que a Bendinelli assumiu a gestão. O condomínio está mais valorizado.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-blue-700 font-bold tracking-widest uppercase text-xs sm:text-sm">Depoimentos</span>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A satisfação de síndicos e moradores é o nosso maior indicador de sucesso.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
            >
              <div className="absolute -top-4 left-8 bg-blue-700 text-white p-3 rounded-xl shadow-lg">
                <Quote size={20} />
              </div>
              <div className="flex mb-4 mt-2">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-600 italic leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-bold text-slate-900">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

