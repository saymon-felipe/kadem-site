import React, { useState } from 'react';
import { FAQS, COLORS } from '../constants';
import Button from '../components/Button';

const Support: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulating API Call to external service
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#1F274C] mb-4">Como podemos ajudar?</h1>
          <p className="text-gray-600 text-lg">
            Encontre respostas rápidas ou entre em contato com nossa equipe especializada.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-[clamp(1rem,0.9rem+0.5vw,1.125rem)] shadow-lg p-8 md:p-12 mb-16 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#355AFD]/5 rounded-bl-full"></div>
           
           <h2 className="text-2xl font-bold text-[#1F274C] mb-8 flex items-center gap-3">
             <i className="fa-regular fa-envelope text-[#355AFD]"></i> Envie uma mensagem
           </h2>

           {status === 'success' && (
             <div className="bg-[#86CD82]/20 text-[#2a5a27] p-4 rounded-lg mb-6 flex items-center gap-3 animate-fade-in-up">
               <i className="fa-solid fa-circle-check"></i> Mensagem enviada com sucesso! Entraremos em contato em breve.
             </div>
           )}

           {status === 'error' && (
             <div className="bg-[#D64A2E]/20 text-[#7a1e0b] p-4 rounded-lg mb-6 flex items-center gap-3 animate-fade-in-up">
               <i className="fa-solid fa-circle-exclamation"></i> Erro ao enviar. Tente novamente mais tarde.
             </div>
           )}

           <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="peer w-full h-[50px] px-4 pt-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#1F274C] transition-colors bg-white text-gray-800 placeholder-transparent"
                    placeholder="Seu Nome"
                    required
                  />
                  <label htmlFor="name" className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#1F274C] peer-focus:bg-white peer-focus:px-1 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1">Seu Nome</label>
                </div>

                <div className="form-group relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer w-full h-[50px] px-4 pt-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#1F274C] transition-colors bg-white text-gray-800 placeholder-transparent"
                    placeholder="Seu Email"
                    required
                  />
                  <label htmlFor="email" className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#1F274C] peer-focus:bg-white peer-focus:px-1 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1">Seu Email</label>
                </div>
              </div>

              <div className="form-group relative">
                 <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-[50px] px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#1F274C] bg-white text-gray-800"
                    required
                 >
                    <option value="" disabled>Selecione um assunto</option>
                    <option value="duvida">Dúvida sobre Planos</option>
                    <option value="tecnico">Suporte Técnico</option>
                    <option value="feedback">Feedback / Sugestão</option>
                    <option value="outro">Outro</option>
                 </select>
              </div>

              <div className="form-group relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="peer w-full h-[130px] px-4 pt-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#1F274C] transition-colors bg-white text-gray-800 placeholder-transparent resize-none"
                    placeholder="Sua Mensagem"
                    required
                  />
                  <label htmlFor="message" className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#1F274C] peer-focus:bg-white peer-focus:px-1 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:px-1">Sua Mensagem</label>
              </div>

              <Button type="submit" variant="primary" fullWidth disabled={status === 'loading'}>
                {status === 'loading' ? <span className="animate-pulse">Enviando...</span> : 'Enviar Mensagem'}
              </Button>
           </form>
        </div>

        {/* FAQ Section */}
        <div>
           <h2 className="text-2xl font-bold text-[#1F274C] mb-8 text-center">Perguntas Frequentes</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                   <h3 className="font-bold text-lg text-[#1F274C] mb-2 flex items-start gap-2">
                     <i className="fa-solid fa-circle-question text-[#355AFD] mt-1 shrink-0"></i>
                     {faq.question}
                   </h3>
                   <p className="text-gray-600 pl-7">{faq.answer}</p>
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  );
};

export default Support;