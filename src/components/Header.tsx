import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/90 backdrop-blur-lg shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://i.imgur.com/fEF3kDb.png" 
            alt="Logo Ouro do Brás" 
            className="h-12 w-auto"
          />
        </div>

        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#beneficios" className="text-yellow-400 hover:text-white transition-colors [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)]">Benefícios</a>
          <a href="#depoimentos" className="text-yellow-400 hover:text-white transition-colors [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)]">Depoimentos</a>
          <a href="#precos" className="text-yellow-400 hover:text-white transition-colors [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)]">Preços</a>
          <Button 
            href="#comprar"
            size="sm"
          >
            GARANTIR MINHA VAGA
          </Button>
        </nav>

        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-lg md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a 
                href="#beneficios" 
                className="text-yellow-400 hover:text-white transition-colors [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] py-2 border-b border-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#depoimentos" 
                className="text-yellow-400 hover:text-white transition-colors [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] py-2 border-b border-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#precos" 
                className="text-yellow-400 hover:text-white transition-colors [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] py-2 border-b border-gray-800"
                onClick={() => setMenuOpen(false)}
              >
                Preços
              </a>
              <Button 
                href="#comprar"
                fullWidth
                onClick={() => setMenuOpen(false)}
              >
                GARANTIR MINHA VAGA
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;