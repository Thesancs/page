import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Button from './Button';
import { useInView } from '../hooks/useInView';

const Pricing: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.2 });
  
  const features = [
    "Acesso a mais de 100 fornecedores verificados",
    "Contatos de Instagram e WhatsApp atualizados",
    "Endereços completos para visitas presenciais",
  ];

  return (
    <section id="precos" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
      
      <div 
        ref={ref}
        className={`container mx-auto px-4 relative transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            FAÇA DE 5.000 Á 10.000 MIL REAIS!
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Um pequeno investimento que pode transformar o seu futuro financeiro e aumentar lucros de até 80%
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div 
            id="comprar"
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Glow effect */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-300 blur-xl opacity-20 transition-opacity duration-300 ${isHovered ? 'opacity-50' : 'opacity-20'}`}></div>
            
            <div className="bg-slate-800/80 backdrop-blur-sm border-2 border-amber-400 rounded-xl overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-300"></div>
              
              <div className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">GUIA: Ouro do Brás</h3>
                <p className="text-gray-400 mb-4">eBook + Atualizações</p>
                
                <div className="mb-6">
                  <div className="inline-block bg-amber-500/10 text-amber-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
                    85% OFF
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-gray-400 line-through text-lg">R$197</span>
                    <span className="text-4xl font-bold text-amber-400">R$29,99</span>
                    <p className="text-gray-400 text-sm">Pagamento UNICO</p>
                  </div>
                </div>
                
                <div className="mb-8">
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-amber-400 mr-3 shrink-0 mt-0.5" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  href= 'https://checkout.viperpay.com.br/NlbWtRLE'
                  fullWidth
                  size="lg"
                  className="group animate-bounce hover:animate-none"
                >
                  <span>QUERO APROVEITAR AGORA</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                
                <p className="text-center text-gray-400 text-sm mt-4">
                  Pagamento seguro Pix 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing