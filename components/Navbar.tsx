
import React, { useState, useEffect } from 'react';
import { LOGO_SVG, BRAND_NAME, getWhatsAppLink } from '../constants';
import { registerScrollHandler, createModernListener } from '../services/event-utils';

interface NavbarProps {
  currentPage: string;
  setPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Uso do utilitário moderno compatível com Chrome 130+
    const unregisterScroll = registerScrollHandler(handleScroll);
    
    // pagehide é o sucessor moderno do unload no Chrome/Safari
    const unregisterPageHide = createModernListener(window, 'pagehide', (e: any) => {
      console.debug("Preservando estado antes de ocultar a página:", e.persisted);
    });

    return () => {
      unregisterScroll();
      unregisterPageHide();
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || currentPage !== 'home' ? 'bg-white/80 backdrop-blur-xl shadow-sm py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => {
              setPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="group flex items-center gap-4 transition-transform active:scale-95"
          >
            <div className="relative">
              {LOGO_SVG}
              <div className="absolute -inset-1 bg-emerald-900/10 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className={`text-2xl font-bold font-serif tracking-tight ${scrolled || currentPage !== 'home' ? 'text-stone-900' : 'text-white'}`}>
              {BRAND_NAME}
            </span>
          </button>
          
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setPage(link.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`text-sm font-semibold tracking-wide uppercase transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-current after:transition-all hover:after:w-full ${
                  currentPage === link.id 
                    ? 'text-emerald-800 after:w-full' 
                    : (scrolled || currentPage !== 'home' ? 'text-stone-500 hover:text-emerald-800' : 'text-stone-300 hover:text-white')
                }`}
              >
                {link.label}
              </button>
            ))}
            <a 
              href={getWhatsAppLink("Olá! Gostaria de fazer um pedido de Café Maitá.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-900 text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-emerald-950 transition-all shadow-xl hover:shadow-emerald-900/20 active:translate-y-0.5"
            >
              Fazer Pedido
            </a>
          </div>

          {/* Mobile Menu Icon Simplificado */}
          <div className="md:hidden">
             <button className={`${scrolled || currentPage !== 'home' ? 'text-stone-900' : 'text-white'}`}>
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7"/></svg>
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
