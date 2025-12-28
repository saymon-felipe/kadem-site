export const COLORS = {
  deepBlue: '#1F274C',
  deepBlue2: '#344079',
  white: '#FFFFFF',
  textGray: '#808080',
  backgroundGray: '#CCCCCC',
  red: '#D64A2E',
  green: '#86CD82',
  yellow: '#FFCA37',
  orange: '#f39c12',
  blue: '#355AFD',
  gray700: '#F2F2F2',
};

export const SUBSCRIPTION_PLANS = {
  free: {
    id: 'free',
    name: "Kadem Free",
    value: 0,
    cycle: "MENSAL",
    description: "Assinatura Kadem Free - Bom para iniciantes.",
    limits: {
      max_projects: 3,
      max_members_by_project: 3,
      can_use_offline_radio: false,
    },
    features: ["Limite de 3 Projetos", "Até 3 membros/projeto", "Radio Flow (Online apenas)"],
    highlight: false
  },
  pro: {
    id: 'pro',
    name: "Kadem Pro",
    value: 29.9,
    cycle: "MENSAL",
    description: "Assinatura Kadem Pro - Acesso expandido a projetos e ferramentas.",
    limits: {
      max_projects: 7,
      max_members_by_project: 7,
      can_use_offline_radio: true,
    },
    features: [
      "Até 7 Projetos",
      "Até 5 membros/projeto",
      "Radio Flow (Online/Offline)",
      "Sync Prioritário",
    ],
    highlight: true
  },
  enterprise: {
    id: 'enterprise',
    name: "Kadem Enterprise",
    value: 149.9,
    cycle: "MENSAL",
    description: "Assinatura Kadem Enterprise - Para equipes e colaboração avançada.",
    limits: {
      max_projects: 20,
      max_members_by_project: 20,
      can_use_offline_radio: true,
    },
    features: [
      "Projetos Ilimitados",
      "Membros Ilimitados",
      "Acesso Total Offline",
      "Suporte Prioritário 24/7",
    ],
    highlight: false
  },
};

export const TESTIMONIALS = [
  {
    name: "Ricardo Silva",
    role: "Gerente de Projetos",
    text: "O Kadem mudou a forma como nossa equipe trabalha. O modo offline é um salva-vidas durante viagens.",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Amanda Costa",
    role: "Freelancer",
    text: "O Radio Flow é genial! Consigo me concentrar com minha playlist do YouTube sem precisar de internet o tempo todo.",
    avatar: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Tech Solutions Ltda",
    role: "Equipe de Dev",
    text: "A gestão visual do Kanban combinada com a visão de projeto detalhada nos deu a clareza que faltava.",
    avatar: "https://picsum.photos/100/100?random=3"
  }
];

export const FAQS = [
  {
    question: "O Kadem funciona realmente sem internet?",
    answer: "Sim! O Kadem foi construído com arquitetura 'Offline-First'. Você pode criar cards, editar projetos e ouvir seu Radio Flow offline. Assim que conectar, tudo sincroniza."
  },
  {
    question: "Como funciona o Radio Flow?",
    answer: "Você adiciona links do YouTube e o Kadem baixa o áudio para armazenamento local seguro, permitindo que você ouça suas músicas de foco mesmo sem conexão."
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Com certeza. Não há fidelidade nos planos mensais."
  },
  {
    question: "Quantos membros posso adicionar no plano gratuito?",
    answer: "No plano Free, você pode ter até 3 membros por projeto em até 3 projetos."
  }
];