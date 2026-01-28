
import React from 'react';
import { X, ExternalLink, MessageCircle } from 'lucide-react';
import { Expert } from '../types';

interface ExpertModalProps {
  expert: Expert;
  onClose: () => void;
  onConsultationClick: () => void;
}

const ExpertModal: React.FC<ExpertModalProps> = ({ expert, onClose, onConsultationClick }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
        <button onClick={onClose} className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-2 bg-white/80 md:bg-slate-100 hover:bg-slate-200 rounded-full text-slate-900 transition-colors shadow-sm">
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        
        <div className="flex flex-col md:flex-row overflow-y-auto">
          <div className="md:w-2/5 relative shrink-0">
            <img src={expert.image} className="w-full h-64 md:h-full object-cover" alt={expert.name} />
            <div className="absolute bottom-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase">
              Pro Mentor
            </div>
          </div>
          <div className="md:w-3/5 p-6 md:p-12">
            <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 leading-tight">{expert.name}</h4>
            <p className="text-indigo-600 font-bold mb-6 text-xs md:text-sm tracking-widest uppercase">{expert.role}</p>
            
            <div className="space-y-4 mb-8">
              <p className="text-sm md:text-base text-slate-600 leading-relaxed italic">"{expert.bio}"</p>
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div>
                  <span className="block text-[9px] md:text-[10px] text-slate-400 font-bold uppercase">Опыт</span>
                  <span className="font-bold text-sm md:text-base text-slate-800">10+ лет</span>
                </div>
                <div>
                  <span className="block text-[9px] md:text-[10px] text-slate-400 font-bold uppercase">Студентов</span>
                  <span className="font-bold text-sm md:text-base text-slate-800">500+</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={onConsultationClick}
                className="w-full flex items-center justify-center gap-3 bg-indigo-600 text-white py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 active:scale-95 text-sm"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                Записаться
              </button>
              <a 
                href={`https://www.linkedin.com/search/results/all/?keywords=${encodeURIComponent(expert.name)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-slate-50 text-slate-600 py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold hover:bg-slate-100 transition-all border border-slate-100 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertModal;
