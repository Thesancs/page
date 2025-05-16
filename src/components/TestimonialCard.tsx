import React from 'react';
import { Star } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface TestimonialProps {
  testimonial: {
    name: string;
    location: string;
    image: string;
    text: string;
    stars: number;
  };
  delay: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial, delay }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  
  return (
    <div 
      ref={ref}
      className={`bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 transition-all duration-700 hover:bg-slate-800/60 hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1 ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-amber-400">
          <img 
            src={testimonial.image} 
            alt={testimonial.name} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div>
          <h3 className="font-bold text-lg">{testimonial.name}</h3>
          <p className="text-gray-400 text-sm">{testimonial.location}</p>
        </div>
      </div>
      
      <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
      
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < testimonial.stars ? "text-amber-400 fill-amber-400" : "text-gray-600"} 
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;