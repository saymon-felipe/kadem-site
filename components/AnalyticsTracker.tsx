import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../services/api';

export default function AnalyticsTracker() {
  const location = useLocation();
  const lastTrackedPath = useRef('');

  useEffect(() => {
    const currentPath = location.pathname + location.search;
    
    if (lastTrackedPath.current === currentPath) return; 
    lastTrackedPath.current = currentPath;

    // Gera e gerencia o ID da Sessão Local
    let sessionId = sessionStorage.getItem('kadem_session');
    if (!sessionId) {
      sessionId = 'sess_' + Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
      sessionStorage.setItem('kadem_session', sessionId);
    }

    api.post('/analytics/track', {
      session_id: sessionId,
      page_url: location.pathname
    }).catch(() => {
      // Falha silenciosa para não incomodar o log do navegador do usuário
    });
    
  }, [location.pathname, location.search]);

  return null;
}