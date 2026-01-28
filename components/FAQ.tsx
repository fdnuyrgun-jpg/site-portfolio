
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: "Нужен ли опыт программирования для старта?",
    a: "Наши базовые курсы рассчитаны на новичков 'с нуля'. Мы постепенно погружаем вас в среду, начиная с самых основ логики и синтаксиса."
  },
  {
    q: "Можно ли совмещать обучение с работой?",
    a: "Да, более 70% наших студентов работают full-time. Все лекции доступны в записи, а на выполнение домашних заданий требуется 6-8 часов в неделю."
  },
  {
    q: "Помогаете ли вы с трудоустройством?",
    a: "На тарифах 'Продвинутый' и 'VIP' работает карьерный центр: мы помогаем составить резюме, готовим к интервью и рекомендуем вас нашим компаниям-партнерам."
  },
  {
    q: "Что если мне не понравится курс?",
    a: "У нас действует политика возврата средств в течение первых 14 дней обучения, если вы поймете, что формат вам не подходит."
  }
];

const FAQItem: React.FC<{ q: string, a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-indigo-600 transition-colors focus:outline-none"
      >
        <span className="font-bold text-lg text-slate-800">{q}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-600 leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 justify-center mb-12">
          <HelpCircle className="w-8 h-8 text-indigo-600" />
          <h3 className="text-3xl font-extrabold text-slate-900">Часто задаваемые вопросы</h3>
        </div>
        <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 shadow-inner border border-slate-100">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
