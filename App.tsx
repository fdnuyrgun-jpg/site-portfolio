import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ExpertModal from './components/ExpertModal';
import TrustBar from './components/TrustBar';
import Stats from './components/Stats';
import { EXPERTS, REVIEWS } from './constants';
import { Expert } from './types';
import { ArrowUp, Target } from 'lucide-react';

const App: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState<Expert | null>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // После появления элемента отключаем наблюдение за ним
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach(el => observer.observe(el));

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToContact = (planName?: string) => {
    if (planName && typeof planName === 'string') {
      setSelectedPlan(planName);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-indigo-100 selection:text-indigo-900">
      <Navigation />
      
      <main>
        <Hero onStartClick={() => scrollToContact()} />
        
        <div className="scroll-reveal">
          <TrustBar />
        </div>

        <div className="scroll-reveal" id="about">
          <Features />
        </div>

        <div className="scroll-reveal">
          <Stats />
        </div>

        <div className="scroll-reveal" id="program">
          <Curriculum onActionClick={() => scrollToContact()} />
        </div>

        <section id="experts" className="py-24 bg-white border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-indigo-600 font-bold uppercase tracking-widest text-sm mb-3">Наши наставники</h2>
              <h3 className="text-4xl font-extrabold text-slate-900">Практики из <span className="text-gradient">Big Tech</span></h3>
            </div>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {EXPERTS.map(expert => (
                <div key={expert.id} className="scroll-reveal bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-50 flex flex-col sm:flex-row gap-6 items-center sm:items-start hover:shadow-2xl transition-all duration-500 group">
                  <div className="shrink-0 overflow-hidden rounded-3xl shadow-lg">
                    <img 
                      src={expert.image} 
                      className="w-24 h-24 sm:w-32 sm:h-32 object-cover group-hover:scale-110 transition-transform duration-500" 
                      alt={expert.name} 
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-slate-900 mb-1">{expert.name}</h4>
                    <p className="text-indigo-600 font-bold mb-4 text-xs tracking-wide uppercase">{expert.role}</p>
                    <button 
                      onClick={() => setSelectedExpert(expert)}
                      className="flex items-center gap-2 text-slate-900 font-bold hover:text-indigo-600 transition-colors group/btn"
                    >
                      Профиль 
                      <Target className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="scroll-reveal" id="pricing">
          <Pricing onSelectPlan={scrollToContact} />
        </div>

        <section className="py-24 bg-indigo-600 text-white relative overflow-hidden">
          {/* Декоративные элементы */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="text-indigo-200 font-bold uppercase tracking-widest text-sm mb-4">Отзывы</h2>
              <h3 className="text-4xl font-extrabold">Истории успеха</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {REVIEWS.map(review => (
                <div key={review.id} className="scroll-reveal bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2.5rem] hover:bg-white/[0.15] transition-colors">
                  <p className="text-lg italic mb-8 opacity-90 leading-relaxed">«{review.text}»</p>
                  <div className="flex items-center gap-4">
                    <img src={review.avatar} className="w-12 h-12 rounded-xl border border-white/30 object-cover" alt={review.name} />
                    <div>
                      <h5 className="font-bold">{review.name}</h5>
                      <p className="text-indigo-200 text-xs uppercase font-medium tracking-wider">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="scroll-reveal">
          <FAQ />
        </div>

        <div className="scroll-reveal" id="contact">
          <ContactForm initialPlan={selectedPlan} />
        </div>
      </main>

      <Footer />
      
      {selectedExpert && (
        <ExpertModal 
          expert={selectedExpert} 
          onClose={() => setSelectedExpert(null)} 
          onConsultationClick={() => { 
            setSelectedExpert(null); 
            scrollToContact(); 
          }} 
        />
      )}

      <button 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        aria-label="Наверх"
        className={`fixed bottom-8 right-6 w-14 h-14 bg-white rounded-full shadow-2xl flex items-center justify-center text-slate-900 border border-slate-100 transition-all z-40 hover:bg-indigo-600 hover:text-white group ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
};

export default App;