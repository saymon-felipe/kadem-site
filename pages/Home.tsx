import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { TESTIMONIALS } from '../constants';

// --- KANBAN TYPES & MOCK DATA ---
type Task = {
  id: string;
  content: string;
  tag?: string;
  tagColor?: 'red' | 'orange' | 'blue' | 'green';
  avatar: string;
  userName: string;
};

type Column = {
  id: string;
  title: string;
  tasks: Task[];
};

const USERS = [
  { userName: 'Saymon', avatar: 'https://picsum.photos/40/40?random=1' },
  { userName: 'Ana Clara', avatar: 'https://picsum.photos/40/40?random=2' },
  { userName: 'Roberto', avatar: 'https://picsum.photos/40/40?random=3' },
  { userName: 'Julia', avatar: 'https://picsum.photos/40/40?random=4' },
  { userName: 'Lucas', avatar: 'https://picsum.photos/40/40?random=5' },
  { userName: 'Beatriz', avatar: 'https://picsum.photos/40/40?random=6' },
  { userName: 'Pedro', avatar: 'https://picsum.photos/40/40?random=7' },
  { userName: 'Mariana', avatar: 'https://picsum.photos/40/40?random=8' },
];

const getRandomUser = () => USERS[Math.floor(Math.random() * USERS.length)];

const INITIAL_DATA: Column[] = [
  {
    id: 'col-1',
    title: 'A FAZER',
    tasks: [
      { id: 't1', content: 'Fazer reunião com equipe marketing', tag: 'URGENTE', tagColor: 'red', ...getRandomUser() }
    ]
  },
  {
    id: 'col-2',
    title: 'FAZENDO',
    tasks: [
      { id: 't2', content: 'Configuração e otimização de campanhas', tag: 'IMPORTANTE', tagColor: 'orange', ...getRandomUser() },
      { id: 't3', content: 'Realização de treinamentos e workshops', tag: 'URGENTE', tagColor: 'red', ...getRandomUser() }
    ]
  },
  {
    id: 'col-3',
    title: 'TESTE',
    tasks: [
      { id: 't4', content: 'Pesquisa de mercado para identificar oportunidades', tag: 'IMPORTANTE', tagColor: 'orange', ...getRandomUser() }
    ]
  },
  {
    id: 'col-4',
    title: 'CONCLUÍDO',
    tasks: [
      { id: 't5', content: 'Desenvolvimento de um novo site corporativo', tag: 'IMPORTANTE', tagColor: 'orange', ...USERS[0] }, // Mantendo Saymon fixo em um para exemplo
      { id: 't6', content: 'Revisão de contratos anuais', tag: 'NOVO', tagColor: 'green', ...getRandomUser() }
    ]
  }
];

// --- COMPONENTS ---

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

const KanbanCardItem: React.FC<{
  task: Task;
  onDragStart: (e: React.DragEvent, taskId: string, colId: string) => void;
  onDragEnter: (e: React.DragEvent, taskId: string, colId: string) => void;
  colId: string;
}> = ({ task, onDragStart, onDragEnter, colId }) => {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, task.id, colId)}
      onDragEnter={(e) => onDragEnter(e, task.id, colId)}
      className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 cursor-grab active:cursor-grabbing hover:shadow-md transition-all duration-200 group relative select-none"
    >
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs text-gray-400 font-mono">#{task.id.replace('t', '32')}</span>
        {task.tag && (
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white uppercase tracking-wide
            ${task.tagColor === 'red' ? 'bg-[#D64A2E]' : ''}
            ${task.tagColor === 'orange' ? 'bg-[#f39c12]' : ''}
            ${task.tagColor === 'blue' ? 'bg-[#355AFD]' : ''}
            ${task.tagColor === 'green' ? 'bg-[#86CD82]' : ''}
          `}>
            {task.tag}
          </span>
        )}
      </div>
      <p className="text-[#1F274C] text-sm font-medium mb-4 leading-relaxed">
        {task.content}
      </p>
      <div className="flex items-center gap-2 mt-auto">
        <img src={task.avatar} alt="User" className="w-6 h-6 rounded-full object-cover" />
        <span className="text-xs text-gray-500">{task.userName}</span>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [columns, setColumns] = useState<Column[]>(INITIAL_DATA);
  const dragItem = useRef<{ taskId: string, colId: string } | null>(null);
  const dragNode = useRef<EventTarget | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 30;
    const y = (clientY / window.innerHeight - 0.5) * 30;
    setOffset({ x, y });
  };

  // --- DRAG AND DROP LOGIC ---
  const handleDragStart = (e: React.DragEvent, taskId: string, colId: string) => {
    dragItem.current = { taskId, colId };
    dragNode.current = e.target;
  };

  const handleDragEnter = (e: React.DragEvent, targetTaskId: string, targetColId: string) => {
    e.preventDefault();
    e.stopPropagation();

    if (!dragItem.current) return;

    const dragItemData = dragItem.current;

    if (dragItemData.taskId === targetTaskId) return;

    setColumns(oldList => {
      const newList = JSON.parse(JSON.stringify(oldList));

      const sourceColIdx = newList.findIndex((c: Column) => c.id === dragItemData.colId);
      const targetColIdx = newList.findIndex((c: Column) => c.id === targetColId);

      const sourceCol = newList[sourceColIdx];
      const targetCol = newList[targetColIdx];

      const sourceTaskIdx = sourceCol.tasks.findIndex((t: Task) => t.id === dragItemData.taskId);
      const targetTaskIdx = targetCol.tasks.findIndex((t: Task) => t.id === targetTaskId);

      const [movedTask] = sourceCol.tasks.splice(sourceTaskIdx, 1);
      targetCol.tasks.splice(targetTaskIdx, 0, movedTask);

      dragItem.current = { taskId: dragItemData.taskId, colId: targetColId };

      return newList;
    });
  };

  const handleDragOverColumn = (e: React.DragEvent, targetColId: string) => {
    e.preventDefault();
    if (!dragItem.current) return;

    const dragItemData = dragItem.current;

    const column = columns.find(c => c.id === targetColId);
    if (column?.tasks.length === 0 && dragItemData.colId !== targetColId) {
      setColumns(oldList => {
        const newList = JSON.parse(JSON.stringify(oldList));
        const sourceColIdx = newList.findIndex((c: Column) => c.id === dragItemData.colId);
        const targetColIdx = newList.findIndex((c: Column) => c.id === targetColId);

        const sourceTaskIdx = newList[sourceColIdx].tasks.findIndex((t: Task) => t.id === dragItemData.taskId);
        const [movedTask] = newList[sourceColIdx].tasks.splice(sourceTaskIdx, 1);

        newList[targetColIdx].tasks.push(movedTask);

        dragItem.current = { taskId: dragItemData.taskId, colId: targetColId };
        return newList;
      });
    }
  };

  const handleAddColumn = () => {
    const newCol: Column = {
      id: `col-${Date.now()}`,
      title: 'NOVA COLUNA',
      tasks: []
    };
    setColumns([...columns, newCol]);
  };

  const handleAddTask = (colId: string) => {
    const randomUser = getRandomUser();
    setColumns(columns.map(col => {
      if (col.id === colId) {
        return {
          ...col,
          tasks: [...col.tasks, {
            id: `t${Date.now()}`,
            content: 'Nova tarefa criada...',
            avatar: randomUser.avatar,
            userName: randomUser.userName,
            tag: 'NOVO',
            tagColor: 'blue'
          }]
        };
      }
      return col;
    }));
  };

  return (
    <div className="w-full overflow-hidden" onMouseMove={handleMouseMove}>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden bg-[#F2F2F2]">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#355AFD]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 transition-transform duration-100 ease-out"
          style={{ transform: `translate(${offset.x * -1.5}px, ${offset.y * -1.5}px)` }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFCA37]/10 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 transition-transform duration-100 ease-out"
          style={{ transform: `translate(${offset.x * 1.5}px, ${offset.y * 1.5}px)` }}
        ></div>

        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 pt-20 lg:pt-0">

          {/* TEXTO HERO */}
          <div className="space-y-8 animate-fade-in-up px-4 lg:pl-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1F274C]/5 text-[#1F274C] text-sm font-semibold border border-[#1F274C]/10">
              <span className="w-2 h-2 rounded-full bg-[#86CD82] animate-pulse"></span>
              Status: Online
            </div>
            <h1 className="text-[clamp(2.5rem,2rem+3vw,3.5rem)] font-black leading-[1.1] text-[#1F274C]">
              Gerencie Projetos. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#355AFD] to-[#1F274C]">
                Sem Limites de Criatividade.
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
              <Button variant="outline" size="lg" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
                Saiba Mais
              </Button>
            </div>

            {/* SOCIAL PROOF */}
            <div className="flex items-center gap-3 pt-4 text-sm text-gray-500 font-medium">
              <div className="w-10 h-10 rounded-full bg-[#86CD82]/20 flex items-center justify-center text-[#2a5a27]">
                <i className="fa-solid fa-shield-halved text-lg"></i>
              </div>
              <p>Comece grátis. Não exige cartão de crédito.</p>
            </div>
          </div>

          {/* INTERACTIVE KANBAN MINI-APP */}
          <div className="relative w-full h-[600px] flex items-center justify-center perspective-1000 p-4">
            <div
              className="relative w-full h-full bg-white/40 backdrop-blur-sm border border-white/60 rounded-3xl shadow-2xl p-4 flex flex-col overflow-hidden transition-transform duration-100 ease-out"
              style={{
                transform: `rotateY(${offset.x * 0.5}deg) rotateX(${offset.y * -0.5}deg)`
              }}
            >
              {/* Window Header Mock */}
              <div className="h-12 flex items-center justify-between px-4 border-b border-[#1F274C]/10 mb-4 bg-white/50 rounded-xl">
                <div className="font-bold text-[#1F274C] flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#1F274C] rounded-lg flex items-center justify-center text-white text-xs">
                    <i className="fa-solid fa-trello"></i>
                  </div>
                  Meus Projetos
                </div>
                <button
                  onClick={handleAddColumn}
                  className="px-4 py-1.5 bg-[#1F274C]/10 hover:bg-[#1F274C]/20 text-[#1F274C] text-xs font-bold rounded-lg transition-colors flex items-center gap-2"
                >
                  <i className="fa-solid fa-plus"></i> Nova Coluna
                </button>
              </div>

              {/* Columns Container */}
              <div className="flex-1 overflow-x-auto overflow-y-hidden flex gap-4 pb-4 custom-scrollbar px-2">
                {columns.map((col) => (
                  <div
                    key={col.id}
                    onDragOver={(e) => handleDragOverColumn(e, col.id)}
                    className="w-[280px] min-w-[280px] bg-[#F2F2F2]/80 rounded-2xl p-3 flex flex-col h-full border border-white/50"
                  >
                    {/* Column Header */}
                    <div className="flex justify-between items-center mb-4 px-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-[#666666] text-xs uppercase tracking-wider">{col.title}</h4>
                        <span className="bg-gray-300 text-gray-600 text-[10px] px-1.5 rounded-md font-bold">{col.tasks.length}</span>
                      </div>
                      <div className="flex gap-1 text-gray-400">
                        <i className="fa-solid fa-magnifying-glass hover:text-[#1F274C] cursor-pointer p-1"></i>
                        <i className="fa-solid fa-ellipsis hover:text-[#1F274C] cursor-pointer p-1"></i>
                        <i onClick={() => handleAddTask(col.id)} className="fa-solid fa-plus hover:text-[#1F274C] cursor-pointer p-1"></i>
                      </div>
                    </div>

                    {/* Tasks List */}
                    <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-1">
                      {col.tasks.map((task) => (
                        <KanbanCardItem
                          key={task.id}
                          task={task}
                          onDragStart={handleDragStart}
                          onDragEnter={handleDragEnter}
                          colId={col.id}
                        />
                      ))}
                      {col.tasks.length === 0 && (
                        <div className="h-24 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 text-xs select-none">
                          Arraste ou crie cards
                        </div>
                      )}
                    </div>
                  </div>
                ))}
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
              description="Sua playlist de foco. Adicione suas músicas preferidas do YouTube e o Kadem gerencia o áudio para você não perder o ritmo."
              delay={200}
            />
            {/* FEATURE SUBSTITUÍDA: De Analytics para Organização Visual */}
            <FeatureCard
              icon="fa-solid fa-tags"
              title="Organização Visual"
              description="Classifique suas tarefas, defina prioridades e filtre o que importa para manter o foco."
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
            <div className="w-16 h-16 bg-[#FFCA37] rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-lg shadow-yellow-900/50">
              <i className="fa-solid fa-radio"></i>
            </div>
            <h2 className="text-4xl font-bold mb-6">Conheça o Radio Flow.</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              A maioria das ferramentas de produtividade ignora o ambiente. O Kadem não.
              Com o Radio Flow, você integra qualquer música ou playlist do YouTube diretamente no seu fluxo de trabalho.
              <br /><br />
              O melhor? <strong>Disponível Offline. *</strong> Baixe seus sons de foco favoritos e esqueça o buffering.
              <br /><br />
              <small>* Funcionalidade offline do Radio Flow disponível somente a partir do plano PRO</small>
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-[#86CD82]"></i> Extração de áudio de alta qualidade
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-[#86CD82]"></i> Controles de player integrados ao sistema
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-[#86CD82]"></i> Zero anúncios, foco total
              </li>
            </ul>
            <Button variant="yellow" size="lg">Experimentar Radio Flow</Button>
          </div>

          <div className="relative">
            {/* Abstract decorative elements */}
            <div
              className="absolute -top-10 -right-10 w-40 h-40 bg-[#FFCA37] rounded-full filter blur-[80px] opacity-30 transition-transform duration-300"
              style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
            ></div>

            {/* RADIO FLOW WIDGET PREVIEW */}
            <div
              className="w-full max-w-[800px] p-6 relative rounded-[clamp(1rem,0.9rem+0.5vw,1.125rem)] border border-white/80 bg-white/70 backdrop-blur-[5px] shadow-[0_8px_32px_rgba(31,38,135,0.2)] transition-transform duration-300 text-[#1F274C]"
              style={{ transform: `translate(${offset.x * -0.5}px, ${offset.y * -0.5}px)` }}
            >
              {/* Widget Header */}
              <div className="flex gap-4 items-center mb-4">
                <div className="w-[100px] h-[100px] shrink-0 rounded-[clamp(1rem,0.9rem+0.5vw,1.125rem)] overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                  <img src="https://picsum.photos/200/200?random=music" className="w-full h-full object-cover" alt="Capa" />
                </div>

                <div className="flex flex-col justify-center gap-1 overflow-hidden flex-grow">
                  <span className="text-[clamp(1.25rem,1.1rem+1vw,1.5rem)] font-bold text-[#1F274C] whitespace-nowrap overflow-hidden text-ellipsis leading-[1.2]">
                    Lofi Hip Hop Radio
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#F2F2F2] text-[#666666] px-[8px] py-[4px] rounded-[clamp(0.75rem,0.65rem+0.5vw,0.875rem)] text-xs font-medium backdrop-blur-[4px]">
                      Beats to Study
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Section */}
              <div className="flex flex-col gap-2 mt-2">
                {/* Mocked slider style */}
                <div className="w-full h-[6px] bg-[#e0e0e0] rounded-[5px] relative cursor-pointer group">
                  <div className="absolute top-0 left-0 h-full w-[35%] bg-[#1F274C] rounded-[5px]"></div>
                  <div className="absolute top-1/2 left-[35%] w-[12px] h-[12px] bg-[#1F274C] rounded-full -translate-y-1/2 -translate-x-1/2 shadow-[0_0_2px_rgba(0,0,0,0.2)] group-hover:scale-120 transition-transform"></div>
                </div>

                <div className="flex justify-between text-xs text-[#1F274C] font-medium min-w-[35px]">
                  <span>14:20</span>
                  <span className="text-right">45:00</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-between items-center mt-2 px-1">
                &nbsp;
                <button className="text-[#1F274C] text-[1.2rem] hover:scale-110 transition-transform">
                  <i className="fa-solid fa-backward-step"></i>
                </button>

                <button className="w-[60px] h-[60px] rounded-full bg-[#1F274C] text-white border-none flex items-center justify-center text-[1.6rem] shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-200 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]">
                  <i className="fa-solid fa-pause ml-[2px]"></i>
                </button>

                <button className="text-[#1F274C] text-[1.2rem] hover:scale-110 transition-transform">
                  <i className="fa-solid fa-forward-step"></i>
                </button>
                &nbsp;
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#355AFD] font-bold tracking-wide uppercase text-sm mb-3">Público Alvo</h2>
            <h3 className="text-3xl font-bold text-[#1F274C]">O Kadem foi feito para você?</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1: Nômade Digital */}
            <div className="bg-white p-8 rounded-2xl shadow-sm relative transition-transform hover:-translate-y-1 hover:shadow-md border-t-4 border-[#355AFD]">
              <div className="w-14 h-14 bg-[#355AFD]/10 rounded-full flex items-center justify-center text-[#355AFD] text-2xl mb-6">
                <i className="fa-solid fa-plane-departure"></i>
              </div>
              <h4 className="font-bold text-xl text-[#1F274C] mb-3">O Nômade Digital</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Você trabalha em cafés, trens ou aviões. Precisa que seus projetos estejam acessíveis mesmo quando o Wi-Fi falha ou não existe.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Funciona 100% Offline</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Sync automático ao conectar</li>
              </ul>
            </div>

            {/* Card 2: Deep Worker */}
            <div className="bg-white p-8 rounded-2xl shadow-sm relative transition-transform hover:-translate-y-1 hover:shadow-md border-t-4 border-[#FFCA37]">
              <div className="w-14 h-14 bg-[#FFCA37]/10 rounded-full flex items-center justify-center text-[#f39c12] text-2xl mb-6">
                <i className="fa-solid fa-brain"></i>
              </div>
              <h4 className="font-bold text-xl text-[#1F274C] mb-3">O Focado (Deep Work)</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Você se distrai fácil com abas do navegador. Precisa de um ambiente único que une sua música e suas tarefas sem anúncios.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Radio Flow Integrado</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Interface Minimalista</li>
              </ul>
            </div>

            {/* Card 3: Desenvolvedor Indie */}
            <div className="bg-white p-8 rounded-2xl shadow-sm relative transition-transform hover:-translate-y-1 hover:shadow-md border-t-4 border-[#D64A2E]">
              <div className="w-14 h-14 bg-[#D64A2E]/10 rounded-full flex items-center justify-center text-[#D64A2E] text-2xl mb-6">
                <i className="fa-solid fa-code"></i>
              </div>
              <h4 className="font-bold text-xl text-[#1F274C] mb-3">O Desenvolvedor</h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Você quer gerenciar seus projetos pessoais sem a complexidade (e o custo) de ferramentas corporativas gigantes como o Jira.
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Kanban Simples e Poderoso</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-check text-green-500"></i> Dados locais e seguros</li>
              </ul>
            </div>

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
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">Falar com Vendas</Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;