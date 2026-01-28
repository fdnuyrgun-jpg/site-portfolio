
import React from 'react';
import { COMPANIES } from '../constants';

const TrustBar: React.FC = () => {
  return (
    <div className="py-12 bg-white border-b border-slate-100 overflow-hidden group">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em]">Наши выпускники работают в</p>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap gap-16 items-center">
          {[...COMPANIES, ...COMPANIES].map((company, i) => (
            <div key={i} className="flex items-center gap-3 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center font-black text-slate-400 group-hover:text-indigo-600 transition-colors">
                {company[0]}
              </div>
              <span className="text-2xl font-black text-slate-800 tracking-tighter">{company}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default TrustBar;
