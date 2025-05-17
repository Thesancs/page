import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Guarantee: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      
      <div 
        ref={ref}
        className={`container mx-auto px-4 relative transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-3xl mx-auto bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 md:p-10 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl"></div>
          
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 text-amber-400 mb-6">
            <ShieldCheck size={32} />
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Garantia de 7 dias ou seu dinheiro de volta
          </h2>
          
          <p className="text-gray-300 mb-6">
            Confiamos tanto na qualidade do nosso guia que oferecemos uma garantia completa.
            Se você não ficar satisfeito por qualquer motivo, devolvemos 100% do seu dinheiro em até 7 dias após a compra.
            Sem perguntas, sem complicação.
          </p>
          
          <div className="pt-6 border-t border-slate-700/50">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <img 
                src="https://i.imgur.com/V6yZtqF.png" 
                alt="Pagamento seguro" 
                className="w-32 h-auto rounded-lg"
              />
              <div className="text-left">
                <h4 className="font-bold mb-1">Pagamento 100% Seguro</h4>
                <p className="text-gray-400 text-sm">
                  Transações protegidas e dados criptografados.
                  Aceitamos Cartão de Crédito, Pix e Boleto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;