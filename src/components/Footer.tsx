import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { BendinelliLogo } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 md:pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-16">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <BendinelliLogo light className="mb-6 sm:items-start" />
            <p className="mt-6 text-slate-400 leading-relaxed max-w-xs mx-auto sm:mx-0">
              Administradora de condomínios em São Paulo com foco em transparência, eficiência e valorização do seu patrimônio.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold mb-6">Menu</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 text-center sm:text-left">
            <h4 className="text-lg font-bold mb-6">Informações de Contato</h4>
            <ul className="space-y-6 text-slate-400">
              <li className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                <Phone className="text-blue-500 flex-shrink-0" size={20} />
                <span>(11) 95772-6055</span>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                <Mail className="text-blue-500 flex-shrink-0" size={20} />
                <span className="break-all sm:break-normal">atendimento.bendinelli@gmail.com</span>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                <MapPin className="text-blue-500 flex-shrink-0" size={20} />
                <span>Av. Montemagno, 259 - São Paulo, SP</span>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                <Facebook className="text-blue-500 flex-shrink-0" size={20} />
                <a href="https://www.facebook.com/people/Bendinelli-Administradora-de-Condom%C3%ADnios/61581539198286/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
              </li>
              <li className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                <Instagram className="text-blue-500 flex-shrink-0" size={20} />
                <a href="https://www.instagram.com/bendinelli_condominios" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 text-center text-slate-500 text-xs sm:text-sm">
          <p>© {currentYear} Bendinelli Gestora. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

