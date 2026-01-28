import React, { useState } from 'react';
import { CURRICULUM, TRACKS } from '../constants';
import { Check } from 'lucide-react';

interface CurriculumProps {
  onActionClick: () => void;
}

const Curriculum: React.FC<CurriculumProps> = ({ onActionClick }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTrack, setActiveTrack] = useState<keyof typeof CURRICULUM>('frontend');

  const currentModules = CURRICULUM[activeTrack];

  return (
    <section id="program" className="py-16 md:py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-3">Программа обучения</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-6">От новичка до <span className="text-gradient">оффера</span></h3>
          
          {/* Track Selector */}
          <div className="inline-flex flex-wrap justify-center bg-slate-100 p-1.5 rounded-2xl gap-1 mx-auto max-w-full">
            {TRACKS.map((track) => (
              <button
                key={track.id}
                onClick={() => {
                  setActiveTrack(track.id as keyof typeof CURRICULUM);
                  setActiveTab(0); // Reset to first module when switching tracks
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all duration-300 ${
                  activeTrack === track.id 
                    ? 'bg-white text-indigo-600 shadow-md scale-100' 
                    : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                }`}
              >
                <span className={`${activeTrack === track.id ? 'text-indigo-600' : 'text-slate-400'}`}>
                  {track.icon}
                </span>
                {track.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start animate-in fade-in slide-in-from-bottom-4 duration-700" key={activeTrack}>
          {/* Module Selector - Mobile horizontal, Desktop vertical */}
          <div className="lg:col-span-4 overflow-x-auto lg:overflow-visible no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
            <div className="flex lg:flex-col gap-3 min-w-max lg:min-w-0">
              {currentModules.map((module, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-4 p-4 md:p-5 rounded-2xl transition-all border text-left min-w-[240px] lg:min-w-0 group ${
                    activeTab === idx 
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl shadow-indigo-100 lg:translate-x-2' 
                      : 'bg-slate-50 border-slate-100 text-slate-600 hover:bg-white hover:border-indigo-200'
                  }`}
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${activeTab === idx ? 'bg-white/20' : 'bg-white text-indigo-600 shadow-sm group-hover:scale-110'}`}>
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
            <div className="bg-slate-50 rounded-[2rem] p-6 md:p-10 border border-slate-100 min-h-[400px] relative overflow-hidden">
               {/* Decorative background blur */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <div className="animate-in fade-in slide-in-from-right-8 duration-500 relative z-10" key={`${activeTrack}-${activeTab}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 bg-white border border-indigo-100 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                    {TRACKS.find(t => t.id === activeTrack)?.label}
                  </span>
                  <div className="h-px flex-1 bg-slate-200"></div>
                </div>

                <h4 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">{currentModules[activeTab].title}</h4>
                <p className="text-slate-600 mb-8 leading-relaxed text-sm md:text-base max-w-2xl">{currentModules[activeTab].description}</p>
                
                <div className="grid sm:grid-cols-2 gap-3 mb-10">
                  {currentModules[activeTab].topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-sm hover:border-indigo-200 transition-colors">
                      <div className="w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="font-bold text-xs md:text-sm text-slate-700">{topic}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={onActionClick}
                    className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95"
                  >
                    Записаться на поток
                  </button>
                  <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-slate-50 transition-all hover:border-slate-300">
                    Скачать программу PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
