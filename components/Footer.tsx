import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1F274C] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold">K</div>
               <span className="text-2xl font-bold">Kadem</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transformando a produtividade com ferramentas offline-first. Gerencie projetos, ouça músicas e colabore em qualquer lugar.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#355AFD] transition-colors">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#355AFD] transition-colors">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#355AFD] transition-colors">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FFCA37]">Produto</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/#features" className="hover:text-white transition-colors">Recursos</Link></li>
              <li><Link to="/plans" className="hover:text-white transition-colors">Planos</Link></li>
              <li><Link to="/#radioflow" className="hover:text-white transition-colors">Radio Flow</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FFCA37]">Suporte</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/support" className="hover:text-white transition-colors">Central de Ajuda</Link></li>
              <li><Link to="/support" className="hover:text-white transition-colors">Fale Conosco</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Status do Servidor</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#FFCA37]">Legal</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Kadem SaaS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;