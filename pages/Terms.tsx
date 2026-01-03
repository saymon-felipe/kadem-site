import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1F274C] mb-4">Termos de Uso</h1>
          <p className="text-gray-600 text-lg">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        <div className="bg-white rounded-[clamp(1rem,0.9rem+0.5vw,1.125rem)] shadow-lg p-8 md:p-12 text-gray-600 leading-relaxed space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-[#1F274C] mb-4">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar o Kadem SaaS ("Serviço"), você concorda em cumprir e ficar vinculado aos seguintes termos e condições de uso. Se você não concordar com estes termos, não deverá utilizar nosso serviço.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F274C] mb-4">2. Descrição do Serviço</h2>
            <p>
              O Kadem é uma plataforma de gerenciamento de tarefas e produtividade que oferece funcionalidades online e offline, incluindo quadros Kanban e o recurso Radio Flow. Reservamo-nos o direito de modificar, suspender ou descontinuar o serviço a qualquer momento, com ou sem aviso prévio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F274C] mb-4">3. Contas de Usuário</h2>
            <p>
              Para acessar certos recursos, você deve criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais de login e por todas as atividades que ocorram sob sua conta. Notifique-nos imediatamente sobre qualquer uso não autorizado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F274C] mb-4">4. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo, design, gráficos e códigos relacionados ao Kadem são propriedade exclusiva do Kadem SaaS e estão protegidos pelas leis de propriedade intelectual aplicáveis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F274C] mb-4">5. Limitação de Responsabilidade</h2>
            <p>
              Em nenhuma circunstância o Kadem será responsável por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes do uso ou da incapacidade de usar o serviço.
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <Link to="/">
            <Button variant="outline">Voltar para o Início</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;