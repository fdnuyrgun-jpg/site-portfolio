import React from 'react';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

interface HeroProps {
  onStartClick: () => void;
}

const AVATARS = [
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80"
];

const Hero: React.FC<HeroProps> = ({ onStartClick }) => {
  return (
    <section className="relative pt-32 sm:pt-40 md:pt-48 pb-16 md:pb-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[60%] h-[40%] bg-indigo-50/50 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-bold text-indigo-600 uppercase tracking-widest">Набор 2025 открыт</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
            Твое <span className="text-gradient">новое будущее</span> начинается здесь
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Освойте востребованные IT-навыки под руководством экспертов. Гарантированный оффер или возврат денег.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button 
              onClick={onStartClick}
              className="flex items-center justify-center gap-3 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-900 transition-all shadow-xl shadow-indigo-100"
            >
              Начать обучение
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-8 border-t border-slate-100">
            <div className="flex -space-x-3">
              {AVATARS.map((url, i) => (
                <img key={i} src={url} className="w-10 h-10 rounded-xl border-2 border-white shadow-md object-cover" alt="Student" />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="flex text-amber-400 gap-0.5 mb-1 justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="text-xs font-bold text-slate-900">4.9/5 на основе 1200+ отзывов</p>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block">
           <div className="relative animate-float">
             <img 
               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" 
               className="w-full h-auto rounded-[2.5rem] shadow-2xl border border-slate-100" 
               alt="Experience" 
             />
             <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-50 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="block font-bold text-slate-900">+1200</span>
                    <span className="text-[10px] text-slate-500 uppercase">Офферов в 2024</span>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;