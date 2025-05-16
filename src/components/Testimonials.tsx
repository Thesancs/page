import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import TestimonialCard from './TestimonialCard';

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  const testimonials = [
    {
      name: "Mariana Silva",
      location: "Rio de Janeiro, RJ",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "Comecei meu negócio de revenda com apenas R$2.000 e o Guia Ouro do Brás foi essencial. Em 3 meses, já estava faturando R$5.000 por mês com as lojas que encontrei graças ao guia.",
      stars: 5
    },
    {
      name: "Lucas Oliveira",
      location: "Belo Horizonte, MG",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "Eu gastava dias pesquisando fornecedores confiáveis e acabava sendo enganado. Com o guia, economizei tempo e dinheiro, pois todos os contatos são verificados. Meu negócio decolou!",
      stars: 5
    },
    {
      name: "Fernanda Costa",
      location: "Salvador, BA",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "Sempre tive medo de iniciar meu negócio por não conhecer fornecedores confiáveis. O guia mudou isso. Agora tenho uma loja online de sucesso e estou expandindo para loja física.",
      stars: 5
    },
    {
      name: "Rafael Santos",
      location: "Curitiba, PR",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "As dicas de negociação incluídas no guia foram um diferencial. Consegui preços muito melhores e isso aumentou minha margem de lucro significativamente. Investimento que valeu cada centavo.",
      stars: 4
    }
  ];

  return (
    <section id="depoimentos" className="py-20 relative bg-slate-950">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-slate-900 to-slate-950"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3760514/pexels-photo-3760514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-5"></div>
      
      <div 
        ref={ref}
        className={`container mx-auto px-4 relative transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block p-2 rounded-full bg-indigo-500/10 text-indigo-400 mb-4">
            <Quote size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            DEPOIMENTOS REAIS
          </h2>
          <p className="text-gray-300 text-lg">
            Veja como o Guia Ouro do Brás ajudou empreendedores a iniciarem seus negócios de roupas e alcançarem resultados surpreendentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              testimonial={testimonial}
              delay={index + 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials