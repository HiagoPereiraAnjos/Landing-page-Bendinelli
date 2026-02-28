import { Facebook, Instagram, Menu, X, Phone, Mail, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BendinelliLogo } from './Icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white py-4'
      }`}
    >
      {/* Top Bar - Hidden on Scroll or Mobile */}
      <div className={`bg-slate-900 text-white transition-all duration-300 overflow-hidden ${
        isScrolled ? 'h-0' : 'h-10 hidden md:block'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center text-xs font-medium">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} className="text-blue-400" />
              <span>(11) 95772-6055</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} className="text-blue-400" />
              <span>atendimento.bendinelli@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={14} className="text-blue-400" />
            <span>Seg - Sex: 09h às 18h</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <BendinelliLogo className="scale-75 sm:scale-90 origin-left transition-transform duration-300" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-600 hover:text-blue-700 font-semibold text-sm transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-700 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4 border-l pl-4 border-slate-200">
              <a href="https://www.facebook.com/people/Bendinelli-Administradora-de-Condom%C3%ADnios/61581539198286/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-700 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/bendinelli_condominios" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-700 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
            <a
              href="#contato"
              className="bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/20 active:scale-95"
            >
              Solicitar Proposta
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-blue-700 p-2 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl text-base font-bold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-all"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex space-x-6 px-4 py-4">
                  <a href="https://www.facebook.com/people/Bendinelli-Administradora-de-Condom%C3%ADnios/61581539198286/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-700">
                    <Facebook size={24} />
                  </a>
                  <a href="https://www.instagram.com/bendinelli_condominios" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-700">
                    <Instagram size={24} />
                  </a>
                </div>
                <div className="px-4">
                  <a
                    href="#contato"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center bg-blue-700 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/20"
                  >
                    Solicitar Proposta
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
