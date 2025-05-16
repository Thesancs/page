import React from 'react';
import { Instagram, MapPin, MessageCircle, DollarSign, ListChecks, ShieldCheck } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  
  return (
    <div 
      ref={ref}
      className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 transition-all duration-700 ease-out text-center ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="bg-gradient-to-br from-amber-500 to-amber-400 text-slate-900 rounded-lg w-12 h-12 flex items-center justify-center mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-yellow-400 [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)]">{title}</h3>
      <p className="text-yellow-400 [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)]">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const benefits = [
    {
      icon: <Instagram size={24} />,
      title: "Instagram Verificado",
      description: "Fornecedores com Instagram profissional e ativo para você verificar produtos atualizados."
    },
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp Direto",
      description: "Contato direto via WhatsApp para negociações rápidas e envio de catálogos."
    },
    {
      icon: <MapPin size={24} />,
      title: "Endereço Completo",
      description: "Endereço físico completo para visitas presenciais e compras no local."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Preços Acessíveis",
      description: "Acesso a produtos de qualidade com preços de atacado que garantem sua margem de lucro."
    },
    {
      icon: <ListChecks size={24} />,
      title: "100+ Fornecedores",
      description: "Mais de 100 fornecedores confiáveis selecionados após extensa pesquisa de mercado."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Fornecedores Verificados",
      description: "Todos os fornecedores são verificados e confiáveis, reduzindo riscos na sua operação."
    }
  ];

  return (
    <section id="beneficios" className="py-20 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      
      <div 
        ref={ref}
        className={`container mx-auto px-4 transition-all duration-700 ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-amber-300 text-transparent bg-clip-text">
              PORQUE O GUIA É ESSENCIAL
            </span>
          </h2>
          <p className="text-yellow-400 [text-shadow:_0_1px_0_rgb(255_255_255_/_40%)] text-lg">
            Economize tempo, dinheiro e estresse com nosso guia completo de fornecedores confiáveis 
            que já foram testados e aprovados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;