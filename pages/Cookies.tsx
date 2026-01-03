import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Cookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F2F2F2] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1F274C] mb-4">Política de Cookies</h1>
          <p className="text-gray-600 text-lg">
            Como utilizamos cookies e tecnologias similares para melhorar sua experiência.
          </p>
        </div>

        <div className="bg-white rounded-[clamp(1rem,0.9rem+0.5vw,1.125rem)] shadow-lg p-8 md:p-12 text-gray-600 leading-relaxed space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-[#1F274C] mb-4">1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos de texto armazenados no seu dispositivo (computador, tablet ou celular) quando você visita um site. Eles permitem que o site reconheça seu dispositivo e armazene certas informações sobre suas preferências ou ações passadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F274C] mb-4">2. Como Usamos os Cookies</h2>
            <p>
              Utilizamos cookies para as seguintes finalidades:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento do site, permitindo navegação e acesso a áreas seguras.</li>
              <li><strong>Cookies de Desempenho:</strong> Coletam informações anônimas sobre como os usuários usam o site para nos ajudar a melhorá-lo.</li>
              <li><strong>Cookies de Funcionalidade:</strong> Lembram suas escolhas (como nome de usuário ou idioma) para fornecer uma experiência personalizada.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F274C] mb-4">3. Gerenciamento de Cookies</h2>
            <p>
              Você pode controlar e/ou excluir cookies conforme desejar. A maioria dos navegadores permite que você recuse cookies ou apague cookies já armazenados. No entanto, se você desativar os cookies, algumas funcionalidades do Kadem podem não funcionar corretamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1F274C] mb-4">4. Armazenamento Local (Local Storage)</h2>
            <p>
              Além dos cookies, o Kadem utiliza o "Local Storage" do navegador para permitir a funcionalidade offline. Isso permite que suas tarefas e preferências sejam salvas no seu dispositivo e sincronizadas posteriormente, garantindo alta performance e disponibilidade.
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

export default Cookies;