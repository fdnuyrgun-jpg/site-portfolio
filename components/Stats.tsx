
import React from 'react';
import { Trophy, Users, Star, Rocket } from 'lucide-react';

const STATS = [
  { label: "Студентов", value: "15,000+", icon: <Users className="w-6 h-6" />, color: "bg-indigo-50 text-indigo-600" },
  { label: "Рейтинг", value: "4.95/5", icon: <Star className="w-6 h-6" />, color: "bg-amber-50 text-amber-600" },
  { label: "Партнеров", value: "120+", icon: <Rocket className="w-6 h-6" />, color: "bg-cyan-50 text-cyan-600" },
  { label: "Наград", value: "12", icon: <Trophy className="w-6 h-6" />, color: "bg-emerald-50 text-emerald-600" },
];

const Stats: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, i) => (
            <div key={i} className="scroll-reveal bg-white p-6 md:p-8 rounded-2xl md:rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex sm:flex-col items-center sm:items-start gap-4 sm:gap-0">
              <div className={`w-12 h-12 md:w-14 md:h-14 ${stat.color} rounded-xl md:rounded-2xl flex items-center justify-center sm:mb-6 group-hover:scale-110 transition-transform shrink-0`}>
                {stat.icon}
              </div>
              <div>
                <h4 className="text-2xl md:text-3xl font-black text-slate-900 mb-0.5 md:mb-1">{stat.value}</h4>
                <p className="text-slate-500 font-bold uppercase text-[9px] md:text-[10px] tracking-widest">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
