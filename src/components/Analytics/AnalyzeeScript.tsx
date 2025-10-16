"use client";

import { useEffect } from 'react';
import Script from 'next/script';

/**
 * Componente para cargar Analyzee Analytics de forma segura
 *
 * Características:
 * - Solo carga en producción (NODE_ENV === 'production')
 * - Solo carga en dominios autorizados (scram2k.com)
 * - Maneja errores de conexión sin romper la app
 * - No genera warnings en desarrollo
 */
const AnalyzeeScript = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const isAuthorizedDomain = typeof window !== 'undefined' &&
    (window.location.hostname === 'scram2k.com' ||
     window.location.hostname === 'www.scram2k.com');

  useEffect(() => {
    // En desarrollo, solo log para debug
    if (!isProduction) {
      console.log('[Analyzee] Script deshabilitado en desarrollo');
      return;
    }

    if (!isAuthorizedDomain) {
      console.warn('[Analyzee] Dominio no autorizado:', window.location.hostname);
      return;
    }

    // Manejar errores de WebSocket globalmente
    const handleWebSocketError = (event: ErrorEvent) => {
      if (event.message?.includes('analyzee.io')) {
        // Suprimir errores de Analyzee para que no molesten
        event.preventDefault();
        console.log('[Analyzee] Conectando con analytics...');
      }
    };

    window.addEventListener('error', handleWebSocketError);

    return () => {
      window.removeEventListener('error', handleWebSocketError);
    };
  }, [isProduction, isAuthorizedDomain]);

  // No renderizar nada si no estamos en producción o dominio autorizado
  if (!isProduction || !isAuthorizedDomain) {
    return null;
  }

  // Obtener el Project ID desde variables de entorno
  const projectId = process.env.NEXT_PUBLIC_ANALYZEE_PROJECT_ID || 'WJ9shmvFDGySBxuQvEoh';

  return (
    <Script
      id="analyzee-analytics"
      strategy="afterInteractive"
      src={`https://cdn.analyzee.io/sdk/${projectId}.js`}
      onLoad={() => {
        console.log('[Analyzee] Analytics cargado exitosamente');
      }}
      onError={(e) => {
        console.warn('[Analyzee] Error al cargar analytics:', e);
      }}
    />
  );
};

export default AnalyzeeScript;
