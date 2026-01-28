
import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={handleLogoClick}>
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">E</span>
              </div>
              <span className="text-xl font-bold tracking-tight">EduVantage</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Мы создаем образование нового поколения, ориентированное на результат и практику. Присоединяйтесь к сообществу профессионалов.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold mb-6 text-indigo-400 uppercase text-xs tracking-widest">Курсы</h5>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#program" onClick={(e) => scrollToSection(e, '#program')} className="hover:text-white transition-colors">Веб-разработка</a></li>
              <li><a href="#program" onClick={(e) => scrollToSection(e, '#program')} className="hover:text-white transition-colors">Data Science</a></li>
              <li><a href="#program" onClick={(e) => scrollToSection(e, '#program')} className="hover:text-white transition-colors">UI/UX Дизайн</a></li>
              <li><a href="#program" onClick={(e) => scrollToSection(e, '#program')} className="hover:text-white transition-colors">Цифровой маркетинг</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-indigo-400 uppercase text-xs tracking-widest">О компании</h5>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#experts" onClick={(e) => scrollToSection(e, '#experts')} className="hover:text-white transition-colors">Наставники</a></li>
              <li><a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="hover:text-white transition-colors">Цены</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-indigo-400 uppercase text-xs tracking-widest">Поддержка</h5>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#faq" onClick={(e) => scrollToSection(e, '#faq')} className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-white transition-colors">Задать вопрос</a></li>
              <li><a href="#pricing" onClick={(e) => scrollToSection(e, '#pricing')} className="hover:text-white transition-colors">Рассрочка и оплата</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-white transition-colors">Карьера у нас</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-[10px] md:text-xs uppercase tracking-[0.2em] text-center md:text-left">
            © {new Date().getFullYear()} EduVantage Academy. Все права защищены.
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors font-black text-[10px] tracking-widest">
              VK
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors font-black text-[10px] tracking-widest">
              TG
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors font-black text-[10px] tracking-widest">
              YT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
