import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'py-3 bg-white shadow-lg md:glass' : 'py-5 bg-transparent'}`}>
        {/* Прогресс-бар перемещен выше, чтобы не перекрывать границу */}
        <div 
          className="absolute bottom-0 left-0 h-[3px] bg-indigo-600 transition-all duration-150 ease-out z-[101]" 
          style={{ width: `${scrollProgress}%` }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer relative z-[102]" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200">
              <span className="text-white font-black text-lg">E</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900">EduVantage</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {[
              { name: 'О школе', id: '#about' },
              { name: 'Программа', id: '#program' },
              { name: 'Эксперты', id: '#experts' },
              { name: 'Тарифы', id: '#pricing' }
            ].map((item, idx) => (
              <a 
                key={idx} 
                href={item.id} 
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 relative z-[102]">
            <button 
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden sm:block bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-600 transition-all"
            >
              Начать обучение
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Исправленное мобильное меню */}
      <div 
        className={`fixed inset-0 bg-white z-[90] transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-full invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {[
            { name: 'О школе', id: '#about' },
            { name: 'Программа', id: '#program' },
            { name: 'Эксперты', id: '#experts' },
            { name: 'Тарифы', id: '#pricing' }
          ].map((item, idx) => (
            <a 
              key={idx} 
              href={item.id} 
              onClick={(e) => scrollToSection(e, item.id)}
              className="text-2xl font-black text-slate-900"
            >
              {item.name}
            </a>
          ))}
          <button 
            onClick={() => {
               setIsMobileMenuOpen(false);
               const el = document.getElementById('contact');
               if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full max-w-xs bg-indigo-600 text-white py-4 rounded-2xl text-lg font-bold shadow-xl shadow-indigo-100"
          >
            Начать сейчас
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;