"use client";

import React from 'react';
import { useGeoLocation } from '@/hooks/useGeoLocation';

const GeoBanner = () => {
  const geo = useGeoLocation();

  // No mostrar nada mientras se carga
  if (!geo) {
    return null;
  }

  // Si está en la zona de servicio prioritaria, mostrar banner especial
  if (geo.isInServiceArea && geo.city !== 'UNKNOWN') {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        padding: '15px 20px',
        textAlign: 'center',
        color: '#ffffff',
        borderBottom: '3px solid #047857',
        position: 'relative',
        zIndex: 100
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            <i className="bx bx-map-pin bx-tada" style={{ fontSize: '24px', color: '#fbbf24' }}></i>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span style={{ fontWeight: '700', fontSize: '16px' }}>
                ¡Genial! Damos servicio en {geo.city}
              </span>
              <span style={{ fontSize: '15px', opacity: 0.95 }}>
                • Instalación en menos de 48 horas • Diagnóstico GRATIS
              </span>
            </div>
            <i className="bx bx-check-circle" style={{ fontSize: '24px', color: '#fbbf24' }}></i>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            div[style*="fontSize: '16px'"] {
              font-size: 14px !important;
            }
            div[style*="fontSize: '15px'"] {
              font-size: 13px !important;
            }
          }
        `}</style>
      </div>
    );
  }

  // Si está en Estado de México pero no en zona prioritaria
  if (geo.isInEstadoMexico && geo.city !== 'UNKNOWN') {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
        padding: '15px 20px',
        textAlign: 'center',
        color: '#ffffff',
        borderBottom: '3px solid #1d4ed8',
        position: 'relative',
        zIndex: 100
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            <i className="bx bx-map" style={{ fontSize: '24px', color: '#fbbf24' }}></i>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span style={{ fontWeight: '700', fontSize: '16px' }}>
                Servicio disponible en {geo.city}, Estado de México
              </span>
              <span style={{ fontSize: '15px', opacity: 0.95 }}>
                • Consulta disponibilidad inmediata
              </span>
            </div>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            div[style*="fontSize: '16px'"] {
              font-size: 14px !important;
            }
            div[style*="fontSize: '15px'"] {
              font-size: 13px !important;
            }
          }
        `}</style>
      </div>
    );
  }

  // Si está en México pero fuera de Estado de México
  if (geo.isInMexico) {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        padding: '15px 20px',
        textAlign: 'center',
        color: '#ffffff',
        borderBottom: '3px solid #b45309',
        position: 'relative',
        zIndex: 100
      }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap'
          }}>
            <i className="bx bx-info-circle" style={{ fontSize: '24px' }}></i>
            <span style={{ fontWeight: '600', fontSize: '15px' }}>
              Zona de servicio principal: Estado de México y CDMX • Consulta cobertura en tu zona
            </span>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            span[style*="fontSize: '15px'"] {
              font-size: 13px !important;
            }
          }
        `}</style>
      </div>
    );
  }

  // No mostrar nada si no está en México
  return null;
};

export default GeoBanner;
