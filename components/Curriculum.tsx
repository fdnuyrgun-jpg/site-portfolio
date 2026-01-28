import React, { useState } from 'react';
import { CURRICULUM } from '../constants';
import { Check } from 'lucide-react';

interface CurriculumProps {
  onActionClick: () => void;
}

const Curriculum: React.FC<CurriculumProps> = ({ onActionClick }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="program" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-3">Программа обучения</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">От новичка до <span className="text-gradient">оффера</span></h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Module Selector - Mobile horizontal, Desktop vertical */}
          <div className="lg:col-span-4 overflow-x-auto lg:overflow-visible no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
            <div className="flex lg:flex-col gap-3 min-w-max lg:min-w-0">
              {CURRICULUM.map((module, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-4 p-4 md:p-5 rounded-2xl transition-all border text-left min-w-[240px] lg:min-w-0 ${
                    activeTab === idx 
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-100' 
                      : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-white hover:border-indigo-200'
                  }`}
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 ${activeTab === idx ? 'bg-white/20' : 'bg-white text-indigo-600 shadow-sm'}`}>
                    {module.icon}
                  </div>
                  <div>
                    <span className={`block text-[10px] font-bold uppercase tracking-widest mb-0.5 ${activeTab === idx ? 'text-indigo-200' : 'text-slate-400'}`}>{module.week}</span>
                    <span className="font-bold text-sm md:text-base leading-tight block">{module.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Module Details */}
          <div className="lg:col-span-8">
            <div className="bg-slate-50 rounded-[2rem] p-6 md:p-10 border border-slate-100 min-h-[400px]">
              <div className="animate-in fade-in slide-in-from-right-4 duration-500" key={activeTab}>
                <h4 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">{CURRICULUM[activeTab].title}</h4>
                <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base">{CURRICULUM[activeTab].description}</p>
                
                <div className="grid sm:grid-cols-2 gap-3 mb-10">
                  {CURRICULUM[activeTab].topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100">
                      <div className="w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-bold text-xs md:text-sm text-slate-700">{topic}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={onActionClick}
                  className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-indigo-700 transition-all"
                >
                  Узнать больше о модуле
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;