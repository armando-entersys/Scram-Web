"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';

/**
 * Componente para proteger SEO cuando se accede desde subdominio
 * Añade noindex, nofollow y canonical correcto
 */
export default function SubdomainSEO() {
  const [isSubdomain, setIsSubdomain] = useState(false);
  const [currentDomain, setCurrentDomain] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname;
      const isSubdomainDetected = hostname.startsWith('seguridad-electronica.');
      setIsSubdomain(isSubdomainDetected);
      setCurrentDomain(hostname);
    }
  }, []);

  if (!isSubdomain) {
    return null;
  }

  return (
    <>
      <Head>
        {/* Protección SEO: Evitar indexación desde subdominio */}
        <meta name="robots" content="noindex, nofollow, noarchive" />
        <meta name="googlebot" content="noindex, nofollow" />

        {/* Canonical apunta al subdominio (no al dominio principal) */}
        <link rel="canonical" href={`https://${currentDomain}/`} />

        {/* Evitar que Google confunda esto con contenido duplicado */}
        <meta name="google" content="nositelinkssearchbox" />
      </Head>

      {/* Meta tags visibles para debugging (solo en dev) */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          background: '#ff9900',
          color: '#fff',
          padding: '10px',
          borderRadius: '5px',
          fontSize: '12px',
          zIndex: 9999
        }}>
          🔒 SEO Protected (Subdomain Mode)
        </div>
      )}
    </>
  );
}
