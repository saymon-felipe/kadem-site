import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1F274C] mb-4">Política de Privacidade</h1>
          <p className="text-gray-600 text-lg">
            Sua privacidade é nossa prioridade. Entenda como tratamos seus dados.
          </p>
        </div>

        <div className="bg-white rounded-[clamp(1rem,0.9rem+0.5vw,1.125rem)] shadow-lg p-8 md:p-12 text-gray-600 leading-relaxed space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-[#1F274C] mb-4">1. Coleta de Dados</h2>
            <p>
              Coletamos informações que você nos fornece diretamente ao criar uma conta, como nome, endereço de e-mail e dados de perfil. Também podemos coletar dados de uso automaticamente para melhorar a experiência do usuário.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F274C] mb-4">2. Uso das Informações</h2>
            <p>
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Fornecer, manter e melhorar nossos serviços;</li>
              <li>Processar transações e enviar avisos relacionados;</li>
              <li>Responder a seus comentários, perguntas e solicitações de suporte;</li>
              <li>Comunicar novidades e eventos (você pode optar por não receber).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F274C] mb-4">3. Armazenamento Offline</h2>
            <p>
              Como o Kadem possui funcionalidade "Offline-First", certos dados (como tarefas e configurações do Radio Flow) são armazenados localmente no seu dispositivo. Esses dados são sincronizados com nossos servidores seguros quando uma conexão com a internet é restabelecida.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F274C] mb-4">4. Compartilhamento de Dados</h2>
            <p>
              Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros, exceto quando necessário para fornecer o serviço (ex: processadores de pagamento) ou quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F274C] mb-4">5. Segurança</h2>
            <p>
              Implementamos medidas de segurança robustas, incluindo criptografia de ponta a ponta para dados sensíveis, para proteger suas informações contra acesso não autorizado.
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

export default Privacy;