
import React, { useState, useEffect } from 'react';
import { LOGO_SVG, BRAND_NAME, getWhatsAppLink } from '../constants';

interface NavbarProps {
  currentPage: string;
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // pagehide é o substituto moderno e recomendado pelo Chrome para o evento 'unload'
    const handlePageHide = (event: PageTransitionEvent) => {
      // Lógica de encerramento ou persistência de estado se necessária
      console.debug("Navegação detectada (pagehide):", event.persisted);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Registrar listeners com opções de compatibilidade moderna
    // passive: true é crítico para performance de scroll no Chrome
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('pagehide', handlePageHide);
    
    // Cleanup rigoroso para evitar memory leaks e warnings de listeners órfãos
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, []);

  const navLinks = [
    { id: 'home', label: 'Início' },
    { id: 'history', label: 'História' },
    { id: 'products', label: 'Produtos' },
    { id: 'process', label: 'Processo' },
    { id: 'videos', label: 'Vídeos' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || currentPage !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-lg py-1' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button 
            onClick={() => {
              setPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="flex items-center gap-3 md:gap-4 hover:opacity-90 transition-opacity"
          >
            <div className="flex-shrink-0">
              {LOGO_SVG}
            </div>
            <span className={`text-xl md:text-2xl font-bold font-serif ${scrolled || currentPage !== 'home' ? 'text-stone-900' : 'text-white'}`}>
              {BRAND_NAME}
            </span>
          </button>
          
          <div className="md:hidden flex items-center">
            {currentPage !== 'home' && (
              <button
                onClick={() => {
                  setPage('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all ${
                  scrolled || currentPage !== 'home'
                    ? 'text-stone-900 border-stone-200 bg-stone-100'
                    : 'text-white border-white/20 bg-white/10'
                }`}
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Início
              </button>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setPage(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`font-medium transition-colors ${
                  currentPage === link.id 
                    ? 'text-[#1B4332]' 
                    : (scrolled || currentPage !== 'home' ? 'text-stone-600 hover:text-[#1B4332]' : 'text-stone-200 hover:text-white')
                }`}
              >
                {link.label}
              </button>
            ))}
            <a 
              href={getWhatsAppLink("Olá! Gostaria de fazer um pedido de Café Maitá.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1B4332] text-white px-6 py-2 rounded-full font-bold hover:bg-[#081C15] transition-all transform hover:scale-105 shadow-lg"
            >
              Pedir Agora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
