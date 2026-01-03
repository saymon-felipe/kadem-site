import React from 'react';
import { SUBSCRIPTION_PLANS } from '../constants';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const PlanCard: React.FC<{ plan: any }> = ({ plan }) => {
  const isPro = plan.highlight;

  return (
    <div className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
       isPro 
       ? 'bg-[#1F274C] text-white shadow-2xl scale-105 z-10 border border-[#355AFD]' 
       : 'bg-white text-[#1F274C] shadow-lg border border-gray-100 hover:shadow-xl'
    }`}>
      {isPro && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#FFCA37] to-[#f39c12] text-white text-xs font-bold px-4 py-1 rounded-full shadow-md uppercase tracking-wide">
          Mais Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className={`text-xl font-bold mb-2 ${isPro ? 'text-white' : 'text-[#1F274C]'}`}>{plan.name}</h3>
        <p className={`text-sm ${isPro ? 'text-gray-300' : 'text-gray-500'}`}>{plan.description}</p>
      </div>

      <div className="mb-8">
        <span className="text-4xl font-black">R$ {plan.value.toFixed(2).replace('.', ',')}</span>
        <span className={`text-sm ml-1 ${isPro ? 'text-gray-400' : 'text-gray-500'}`}>/mês</span>
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {plan.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-start gap-3">
            <i className={`fa-solid fa-check mt-1 ${isPro ? 'text-[#86CD82]' : 'text-[#355AFD]'}`}></i>
            <span className={`text-sm ${isPro ? 'text-gray-200' : 'text-gray-600'}`}>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Link para o App com parâmetro from_site=1 */}
      <a href="https://app-kadem.netlify.app/auth?from_site=1" target="_blank" className="w-full block">
        <Button 
          fullWidth 
          variant={isPro ? 'primary' : 'outline'}
          className={isPro ? 'bg-gradient-to-r from-[#355AFD] to-[#1F274C]' : ''}
        >
          Escolher {plan.name}
        </Button>
      </a>
    </div>
  );
};

const Plans: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-[#1F274C] mb-4">Planos Flexíveis para sua Produtividade</h1>
          <p className="text-gray-600 text-lg">
            Escolha o plano ideal para você ou sua equipe. Sem compromissos de longo prazo, mude quando quiser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          <PlanCard plan={SUBSCRIPTION_PLANS.free} />
          <PlanCard plan={SUBSCRIPTION_PLANS.pro} />
          <PlanCard plan={SUBSCRIPTION_PLANS.enterprise} />
        </div>

        <div className="mt-20 bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-[#1F274C] mb-2">Precisa de uma solução customizada?</h3>
              <p className="text-gray-600">Para grandes organizações que precisam de SSO, auditoria avançada e gerentes de conta dedicados.</p>
           </div>
           <Link to="/support">
              <Button variant="secondary">Falar com Consultor</Button>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Plans;