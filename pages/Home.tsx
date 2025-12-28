import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { TESTIMONIALS } from '../constants';

const FeatureCard: React.FC<{ icon: string; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
  <div 
    className="bg-white p-8 rounded-[clamp(1rem,0.9rem+0.5vw,1.125rem)] shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-transparent hover:border-[#355AFD]/20 hover:shadow-[0_8px_32px_rgba(31,38,135,0.1)] transition-all duration-300 transform hover:-translate-y-2 group"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="w-14 h-14 bg-[#1F274C]/5 rounded-2xl flex items-center justify-center text-[#355AFD] text-2xl mb-6 group-hover:bg-[#355AFD] group-hover:text-white transition-colors duration-300">
      <i className={icon}></i>
    </div>
    <h3 className="text-xl font-bold text-[#1F274C] mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed">{description}</p>
  </div>
);

const Home: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    // Calculate offset based on mouse position relative to center of screen
    const x = (clientX / window.innerWidth - 0.5) * 30; 
    const y = (clientY / window.innerHeight - 0.5) * 30;
    setOffset({ x, y });
  };

  return (
    <div className="w-full overflow-hidden" onMouseMove={handleMouseMove}>
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden bg-[#F2F2F2]">
        {/* Abstract Background Shapes with Parallax */}
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#355AFD]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 transition-transform duration-100 ease-out"
          style={{ transform: `translate(${offset.x * -1.5}px, ${offset.y * -1.5}px)` }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFCA37]/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 transition-transform duration-100 ease-out"
          style={{ transform: `translate(${offset.x * 1.5}px, ${offset.y * 1.5}px)` }}
        ></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 pt-10">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F274C]/5 text-[#1F274C] text-sm font-semibold border border-[#1F274C]/10">
              <span className="w-2 h-2 rounded-full bg-[#86CD82] animate-pulse"></span>
              Kadem 2.0 Disponível
            </div>
            <h1 className="text-[clamp(2.5rem,2rem+3vw,3.5rem)] font-black leading-[1.1] text-[#1F274C]">
              Gerencie Projetos. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#355AFD] to-[#1F274C]">
                Sem Limites de Conexão.
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              O Kadem une a potência do Kanban, a clareza da visão de projetos e a produtividade do Radio Flow. Tudo disponível 100% Offline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/plans">
                <Button variant="primary" size="lg" className="shadow-xl shadow-blue-900/20">
                  Começar Gratuitamente <i className="fa-solid fa-arrow-right ml-2"></i>
                </Button>
              </Link>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth'})}>
                Saiba Mais
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4 text-sm text-gray-500">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <img key={i} src={`https://picsum.photos/40/40?random=${i}`} alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                 ))}
               </div>
               <p>+2.000 equipes produtivas</p>
            </div>
          </div>

          <div className="relative lg:h-[600px] flex items-center justify-center perspective-1000">
             {/* Main App Mockup with Mouse Tilt Effect */}
             <div 
               className="relative w-full max-w-[600px] aspect-[4/3] glass bg-white/40 rounded-2xl p-4 shadow-2xl border border-white/60 transition-transform duration-100 ease-out"
               style={{ 
                 transform: `rotateY(${offset.x * 0.5}deg) rotateX(${offset.y * -0.5}deg)`
               }}
             >
                {/* Header Mock */}
                <div className="flex items-center justify-between mb-4 border-b border-[#1F274C]/10 pb-2">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   </div>
                   <div className="h-2 w-32 bg-[#1F274C]/10 rounded-full"></div>
                </div>
                {/* Kanban Columns Mock */}
                <div className="grid grid-cols-3 gap-4 h-[80%]">
                   {[1, 2, 3].map((col) => (
                     <div key={col} className="bg-[#F2F2F2]/50 rounded-lg p-3 flex flex-col gap-3">
                        <div className="h-4 w-20 bg-[#1F274C]/20 rounded mb-2"></div>
                        <div className="bg-white p-3 rounded shadow-sm border-l-4 border-[#355AFD] space-y-2">
                           <div className="h-3 w-full bg-gray-200 rounded"></div>
                           <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
                           <div className="flex justify-between items-center mt-2">
                              <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                              <i className="fa-solid fa-paperclip text-gray-300 text-xs"></i>
                           </div>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm border-l-4 border-[#FFCA37] space-y-2 opacity-80">
                           <div className="h-3 w-full bg-gray-200 rounded"></div>
                        </div>
                     </div>
                   ))}
                </div>
                
                {/* Radio Flow Float Card - Animated independently */}
                <div 
                  className="absolute -bottom-10 -left-10 w-64 bg-[#1F274C] text-white p-4 rounded-xl shadow-2xl border border-white/10 backdrop-blur-md"
                  style={{ transform: `translateY(${offset.y * -0.8}px)` }}
                >
                   <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                         <i className="fa-brands fa-youtube text-2xl"></i>
                      </div>
                      <div>
                         <h4 className="font-bold text-sm">Radio Flow</h4>
                         <p className="text-xs text-gray-300"><i className="fa-solid fa-wifi text-red-500 mr-1"></i> Offline Mode</p>
                      </div>
                   </div>
                   <div className="h-1 bg-white/20 rounded-full overflow-hidden mb-2">
                      <div className="h-full w-2/3 bg-[#86CD82]"></div>
                   </div>
                   <div className="flex justify-between text-xl">
                      <i className="fa-solid fa-backward-step cursor-pointer hover:text-[#355AFD]"></i>
                      <i className="fa-solid fa-circle-pause cursor-pointer hover:text-[#355AFD]"></i>
                      <i className="fa-solid fa-forward-step cursor-pointer hover:text-[#355AFD]"></i>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h2 className="text-[#355AFD] font-bold tracking-wide uppercase text-sm mb-3">Por que Kadem?</h2>
             <h3 className="text-4xl font-bold text-[#1F274C] mb-6">Produtividade redefinida para a era moderna.</h3>
             <p className="text-gray-500 text-lg">
               Não deixe a falta de internet parar seu fluxo. Kadem oferece um conjunto robusto de ferramentas que funcionam em qualquer lugar.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
               icon="fa-solid fa-wifi" 
               title="Offline First" 
               description="Trabalhe no avião, no campo ou quando a internet cair. Seus dados sincronizam automaticamente assim que a conexão volta."
               delay={0}
            />
            <FeatureCard 
               icon="fa-solid fa-layer-group" 
               title="Projetos Colaborativos" 
               description="Crie quadros Kanban, delegue tarefas com Cards detalhados e visualize o progresso do projeto em tempo real com sua equipe."
               delay={100}
            />
            <FeatureCard 
               icon="fa-solid fa-music" 
               title="Radio Flow" 
               description="Sua playlist de foco, offline. Adicione links do YouTube e o Kadem gerencia o áudio localmente para você não perder o ritmo."
               delay={200}
            />
            <FeatureCard 
               icon="fa-solid fa-chart-pie" 
               title="Analytics Visuais" 
               description="Dashboards automáticos que mostram a velocidade da equipe, gargalos e projeções de entrega."
               delay={300}
            />
            <FeatureCard 
               icon="fa-solid fa-shield-halved" 
               title="Segurança de Dados" 
               description="Criptografia de ponta a ponta para seus projetos e dados locais. Sua privacidade é nossa prioridade."
               delay={400}
            />
            <FeatureCard 
               icon="fa-solid fa-mobile-screen-button" 
               title="Totalmente Responsivo" 
               description="Uma experiência fluida no Desktop, Tablet ou Celular. Leve o Kadem no bolso."
               delay={500}
            />
          </div>
        </div>
      </section>

      {/* MODERNITY / RADIO FLOW SHOWCASE */}
      <section id="radioflow" className="py-24 bg-[#1F274C] relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
           <div>
              <div className="w-16 h-16 bg-[#D64A2E] rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-lg shadow-red-900/50">
                <i className="fa-brands fa-youtube"></i>
              </div>
              <h2 className="text-4xl font-bold mb-6">Conheça o Radio Flow.</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                 A maioria das ferramentas de produtividade ignora o ambiente. O Kadem não. 
                 Com o Radio Flow, você integra qualquer música ou playlist do YouTube diretamente no seu fluxo de trabalho.
                 <br/><br/>
                 O melhor? <strong>Disponível Offline.</strong> Baixe seus sons de foco favoritos e esqueça o buffering.
              </p>
              <ul className="space-y-4 mb-8">
                 <li className="flex items-center gap-3">
                    <i className="fa-solid fa-circle-check text-[#86CD82]"></i> Extração de áudio de alta qualidade
                 </li>
                 <li className="flex items-center gap-3">
                    <i className="fa-solid fa-circle-check text-[#86CD82]"></i> Controles de player integrados ao Kanban
                 </li>
                 <li className="flex items-center gap-3">
                    <i className="fa-solid fa-circle-check text-[#86CD82]"></i> Zero anúncios, foco total
                 </li>
              </ul>
              <Button variant="red" size="lg">Experimentar Radio Flow</Button>
           </div>
           <div className="relative">
              {/* Abstract decorative elements */}
              <div 
                className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFCA37] rounded-full filter blur-[80px] opacity-30 transition-transform duration-300"
                style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
              ></div>
              
              <div 
                className="glass bg-white/10 border-white/20 p-8 rounded-3xl relative transition-transform duration-300"
                style={{ transform: `translate(${offset.x * -0.5}px, ${offset.y * -0.5}px)` }}
              >
                 <div className="flex items-center gap-6 mb-8">
                    <img src="https://picsum.photos/200/200?random=music" className="w-32 h-32 rounded-lg object-cover shadow-lg" alt="Album Art" />
                    <div>
                       <h3 className="text-2xl font-bold">Lofi Hip Hop Radio</h3>
                       <p className="text-gray-400">Beats to Relax/Study to</p>
                       <div className="flex gap-2 mt-3">
                          <span className="text-xs bg-white/20 px-2 py-1 rounded">Lofi</span>
                          <span className="text-xs bg-white/20 px-2 py-1 rounded">Chill</span>
                       </div>
                    </div>
                 </div>
                 
                 {/* Progress Bar */}
                 <div className="mb-6">
                    <div className="w-full bg-white/10 h-1 rounded-full mb-2">
                       <div className="w-[45%] bg-gradient-to-r from-[#FFCA37] to-[#D64A2E] h-full rounded-full relative">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
                       </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                       <span>14:20</span>
                       <span>45:00</span>
                    </div>
                 </div>

                 {/* Controls */}
                 <div className="flex justify-between items-center px-4">
                    <i className="fa-solid fa-shuffle text-gray-400 hover:text-white cursor-pointer"></i>
                    <i className="fa-solid fa-backward-step text-2xl hover:text-[#FFCA37] cursor-pointer transition-colors"></i>
                    <div className="w-16 h-16 bg-white text-[#1F274C] rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer shadow-lg shadow-white/20">
                       <i className="fa-solid fa-pause"></i>
                    </div>
                    <i className="fa-solid fa-forward-step text-2xl hover:text-[#FFCA37] cursor-pointer transition-colors"></i>
                    <i className="fa-solid fa-repeat text-gray-400 hover:text-white cursor-pointer"></i>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-[#1F274C] mb-16">O que dizem nossos usuários</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm relative transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="absolute -top-5 left-8 w-10 h-10 bg-[#355AFD] flex items-center justify-center rounded-full text-white text-xl">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <p className="text-gray-600 mb-6 mt-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-[#1F274C]">{t.name}</h4>
                    <span className="text-sm text-gray-500">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-20 bg-gradient-to-r from-[#1F274C] to-[#344079] text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Pronto para elevar sua produtividade?</h2>
          <p className="text-xl text-blue-100 mb-10">Junte-se a milhares de equipes que usam o Kadem para entregar projetos, online ou offline.</p>
          <div className="flex justify-center gap-4 flex-col sm:flex-row">
            <Link to="/plans">
               <Button variant="secondary" size="lg" className="text-[#1F274C] font-bold">Ver Planos</Button>
            </Link>
            <Link to="/support">
               <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#1F274C]">Falar com Vendas</Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;