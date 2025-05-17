import React from 'react';
import { ChevronDown } from 'lucide-react';
import Button from './Button';


const Hero: React.FC = () => {
  const scrollToPrice = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('comprar');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://imgur.com/a/4be2QHc')] bg-cover bg-center opacity-10"></div>
      
      <div className="absolute top-20 right-[20%] w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-red-800/10 text-yellow-400 font-medium text-sm mb-6 [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] animate-fadeIn">
            VAGAS LIMITADAS
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <img 
              src="https://i.imgur.com/aFWjttI.png" 
              alt="Ouro do Brás" 
               className="h-[13.5rem] md:h-[9rem] lg:h-[20rem] w-auto mx-auto mb-4"
            />
            <span className="block mb-2">GUIA:</span>
            <span className="text-yellow-400 [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)]">
           Ouro do Brás
          </span>
          </h1> 

          
          <p className="text-lg md:text-xl text-yellow-400 [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] mb-8 max-w-2xl mx-auto">
            O guia definitivo com mais de 100 fornecedores confiáveis do Brás para você iniciar seu negócio de revenda de roupas com baixo investimento.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button href="#comprar" size="lg" onClick={scrollToPrice}>
              GARANTIR MINHA VAGA
            </Button>
            <Button href="#beneficios" variant="outlined" size="lg">
              Saiba Mais
            </Button>
          </div>
          
          <div className="relative flex flex-col items-center">
            <div className="w-full max-w-xl mx-auto relative p-1 rounded-xl bg-gradient-to-r from-amber-400 to-indigo-500 animate-pulse">
              <div className="bg-slate-900 rounded-lg p-4 relative">
                <img 
                  src="https://i.imgur.com/No3bhqe.jpeg" 
                  alt="Brás - Centro de compras em São Paulo" 
                  className="w-full h-auto rounded-lg object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-lg flex items-end justify-center pb-4">
                  <span className="text-yellow-400 [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] font-medium">Brás - Centro comercial de São Paulo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <a 
          href="#beneficios" 
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-yellow-400 [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] flex flex-col items-center mt-12 animate-bounce"
          aria-label="Rolar para baixo"
        >
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;