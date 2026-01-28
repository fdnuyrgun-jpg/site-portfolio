import React from 'react';
import { FEATURES, ICON_MAP } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-3">Почему выбирают нас</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">Ваш результат — наш главный приоритет</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-all hover:shadow-xl hover:shadow-indigo-50 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {ICON_MAP[feature.icon]}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;