
import React, { useState, useEffect } from 'react';
import { Send, Check, Sparkles } from 'lucide-react';

interface ContactFormProps {
  initialPlan?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialPlan }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState('Сменить профессию');
  const [currentPlan, setCurrentPlan] = useState(initialPlan || '');

  // Keep internal state in sync with prop from parent
  useEffect(() => {
    if (initialPlan !== undefined) {
      setCurrentPlan(initialPlan);
    }
  }, [initialPlan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="bg-emerald-50 border border-emerald-100 p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] text-center animate-in zoom-in-95 duration-500">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-emerald-100">
              <Check className="w-8 h-8 md:w-10 md:h-10" />
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">Спасибо за заявку!</h3>
            <p className="text-sm md:text-base text-slate-600 max-w-sm mx-auto leading-relaxed">Наш менеджер свяжется с вами в течение 15 минут для уточнения деталей по тарифу <span className="font-bold text-emerald-600">{currentPlan || 'Базовый'}</span>.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-8 text-emerald-600 font-bold hover:underline text-sm md:text-base"
            >
              Отправить еще раз
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="bg-white p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 relative overflow-hidden">
          {currentPlan && (
            <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-bl-xl md:rounded-bl-2xl text-[10px] md:text-sm font-bold flex items-center gap-2 z-10">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              Тариф: {currentPlan}
            </div>
          )}
          
          <div className="text-center mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 md:mb-4">Начните свой путь сегодня</h3>
            <p className="text-sm md:text-base text-slate-500">Оставьте контакты, и мы подберем для вас оптимальный план обучения</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[11px] md:text-sm font-semibold text-slate-700 ml-1 uppercase tracking-wider">Как вас зовут?</label>
                <input 
                  required
                  type="text" 
                  placeholder="Александр" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl px-5 py-3.5 md:px-6 md:py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-sm md:text-base"
                />
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[11px] md:text-sm font-semibold text-slate-700 ml-1 uppercase tracking-wider">Телефон или Telegram</label>
                <input 
                  required
                  type="text" 
                  placeholder="+7 (___) ___-__-__" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl px-5 py-3.5 md:px-6 md:py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-sm md:text-base"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[11px] md:text-sm font-semibold text-slate-700 ml-1 uppercase tracking-wider">Цель обучения</label>
                <div className="relative">
                  <select 
                    value={selectedGoal}
                    onChange={(e) => setSelectedGoal(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl px-5 py-3.5 md:px-6 md:py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all appearance-none text-sm md:text-base"
                  >
                    <option>Сменить профессию</option>
                    <option>Повысить квалификацию</option>
                    <option>Просто интересно</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[11px] md:text-sm font-semibold text-slate-700 ml-1 uppercase tracking-wider">Тариф</label>
                <div className="relative">
                  <select 
                    value={currentPlan}
                    onChange={(e) => setCurrentPlan(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl px-5 py-3.5 md:px-6 md:py-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all appearance-none text-sm md:text-base"
                  >
                    <option value="">Не выбран</option>
                    <option value="Базовый">Базовый</option>
                    <option value="Продвинутый">Продвинутый</option>
                    <option value="VIP">VIP</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-indigo-600 text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 disabled:opacity-70 active:scale-[0.98] mt-4"
            >
              {loading ? (
                <div className="w-5 h-5 md:w-6 md:h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : (
                <>
                  Отправить заявку
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                </>
              )}
            </button>
            <p className="text-[9px] md:text-[10px] text-center text-slate-400 mt-6 leading-relaxed uppercase tracking-tight md:tracking-tighter">
              Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности <br className="hidden sm:block"/> и правилами обработки персональных данных.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
