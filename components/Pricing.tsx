
import React from 'react';
import { PRICING, ICON_MAP } from '../constants';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-20 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-3">Стоимость обучения</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Выбирайте удобный формат</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRICING.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative p-8 md:p-10 rounded-3xl md:rounded-[2rem] bg-white border transition-all ${plan.isPopular ? 'border-indigo-600 shadow-2xl shadow-indigo-100 lg:scale-105 z-10' : 'border-slate-100 hover:border-slate-300'}`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-5 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-wider">
                  Популярный выбор
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 text-sm">/ курс</span>
                </div>
                <p className="text-xs md:text-sm text-slate-500 mt-2 leading-relaxed">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-1 shrink-0">
                      {ICON_MAP.CheckCircle2}
                    </div>
                    <span className="text-sm text-slate-600 leading-snug">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                type="button"
                onClick={() => onSelectPlan(plan.name)}
                className={`block w-full text-center py-4 md:py-5 rounded-2xl font-black text-sm uppercase tracking-wide transition-all active:scale-95 ${plan.isPopular ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-100' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
              >
                Выбрать тариф
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
