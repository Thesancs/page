import React from 'react';
import { ShoppingBag, ShieldCheck, CreditCard, HeartHandshake } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 border-t border-slate-800 relative">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center mb-4">
              <ShoppingBag className="h-6 w-6 text-amber-400 mr-2" />
              <span className="font-bold text-xl">Ouro do Brás</span>
            </div>
            <p className="text-gray-400 mb-4">
              O guia definitivo para quem deseja iniciar no mercado de revenda de roupas com fornecedores confiáveis.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#beneficios" className="text-gray-400 hover:text-amber-400 transition-colors">Benefícios</a></li>
              <li><a href="#depoimentos" className="text-gray-400 hover:text-amber-400 transition-colors">Depoimentos</a></li>
              <li><a href="#precos" className="text-gray-400 hover:text-amber-400 transition-colors">Preços</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Formas de Pagamento</h4>
            <div className="flex flex-wrap gap-2">
              <div className="bg-slate-800 p-2 rounded text-gray-300 text-sm">Cartão de Crédito</div>
              <div className="bg-slate-800 p-2 rounded text-gray-300 text-sm">Pix</div>
              <div className="bg-slate-800 p-2 rounded text-gray-300 text-sm">Boleto</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <p className="text-gray-400 mb-2">
              Email: agenciasancs@gmail.com
            </p>
            <p className="text-gray-400">
              WhatsApp: (19)97421-0646
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border-t border-slate-800 pt-6">
          <div className="flex items-center justify-center md:justify-start text-gray-500 text-sm">
            <ShieldCheck size={16} className="mr-1" />
            <span>Pagamento Seguro</span>
          </div>
          <div className="flex items-center justify-center md:justify-start text-gray-500 text-sm">
            <CreditCard size={16} className="mr-1" />
            <span>Até 12x no Cartão</span>
          </div>
          <div className="flex items-center justify-center md:justify-start text-gray-500 text-sm">
            <HeartHandshake size={16} className="mr-1" />
            <span>Garantia de 7 Dias</span>
          </div>
          <div className="text-center md:text-right text-gray-500 text-sm">
            &copy; {currentYear} Guia Ouro do Brás. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;