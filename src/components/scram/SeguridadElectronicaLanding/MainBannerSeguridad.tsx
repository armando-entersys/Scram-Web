"use client";

import React from "react";
import ButtonWhatsapp from "../Layout/ButtonWhatsapp";
import { trackingConfig } from "@/config/tracking";

const MainBannerSeguridad = () => {
  const whatsappNumber = trackingConfig.whatsapp.number;

  return (
    <>
      <section
        className="hero-banner-seguridad"
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #3b82f6 100%)',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: '120px',
          paddingBottom: '100px'
        }}
      >
        {/* Patron de fondo */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
          opacity: 0.3
        }}></div>

        {/* Iconos decorativos flotantes */}
        <div style={{ position: 'absolute', top: '10%', right: '10%', fontSize: '80px', color: 'rgba(255,255,255,0.08)', transform: 'rotate(-15deg)' }}>
          <i className="bx bx-video-recording"></i>
        </div>
        <div style={{ position: 'absolute', bottom: '15%', left: '8%', fontSize: '60px', color: 'rgba(255,255,255,0.08)', transform: 'rotate(15deg)' }}>
          <i className="bx bx-shield-alt-2"></i>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center">
            <div className="col-lg-7">
              {/* Badge superior */}
              <div style={{ marginBottom: '25px' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  color: '#ffffff',
                  padding: '10px 25px',
                  borderRadius: '50px',
                  fontSize: '14px',
                  fontWeight: '600',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  <i className="bx bx-gift" style={{ fontSize: '20px' }}></i>
                  Diagnostico de Seguridad 100% GRATIS
                </span>
              </div>

              {/* Titulo principal */}
              <h1 style={{
                fontSize: '48px',
                fontWeight: '800',
                color: '#ffffff',
                lineHeight: '1.2',
                marginBottom: '20px',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)'
              }}>
                Protege tu Empresa con <br/>
                <span style={{
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Inteligencia Artificial
                </span>
              </h1>

              {/* Descripcion */}
              <p style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.95)',
                lineHeight: '1.6',
                marginBottom: '30px',
                maxWidth: '600px'
              }}>
                Videovigilancia 4K con IA, control de acceso biometrico y monitoreo 24/7.
                <strong style={{ color: '#fbbf24' }}> Reduce perdidas hasta 80%</strong> y
                aumenta productividad <strong style={{ color: '#fbbf24' }}>40%</strong>
              </p>

              {/* Stats rapidos */}
              <div style={{
                display: 'flex',
                gap: '30px',
                marginBottom: '35px',
                flexWrap: 'wrap'
              }}>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '700', color: '#fbbf24' }}>75%</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>Menos incidentes</div>
                </div>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '700', color: '#fbbf24' }}>24/7</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>Monitoreo continuo</div>
                </div>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '700', color: '#fbbf24' }}>25+</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>Anos experiencia</div>
                </div>
              </div>

              {/* CTAs principales */}
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', marginBottom: '30px' }}>
                <ButtonWhatsapp
                  className="btn btn-lg"
                  p="w"
                  nu={whatsappNumber}
                  href="?click=whatsappSeguridadBanner"
                  send_to="AW-949839800/73OWCNeAmNQZELjP9cQD"
                  style={{
                    background: '#25D366',
                    color: '#ffffff',
                    padding: '16px 35px',
                    fontSize: '18px',
                    fontWeight: '700',
                    border: 'none',
                    borderRadius: '12px',
                    boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <i className="bx bxl-whatsapp bx-tada" style={{ fontSize: '24px' }}></i>
                  Solicitar Diagnostico GRATIS
                </ButtonWhatsapp>

                <a
                  href="tel:+525511130259"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    color: '#ffffff',
                    padding: '16px 35px',
                    fontSize: '18px',
                    fontWeight: '700',
                    border: '2px solid rgba(255,255,255,0.3)',
                    borderRadius: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <i className="bx bx-phone-call" style={{ fontSize: '24px' }}></i>
                  Llamar Ahora
                </a>
              </div>

              {/* Trust badges */}
              <div style={{
                display: 'flex',
                gap: '25px',
                flexWrap: 'wrap',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255,255,255,0.2)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>
                  <i className="bx bx-check-circle" style={{ fontSize: '20px', color: '#fbbf24' }}></i>
                  Respuesta en 2 horas
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>
                  <i className="bx bx-check-circle" style={{ fontSize: '20px', color: '#fbbf24' }}></i>
                  Instalacion profesional
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>
                  <i className="bx bx-check-circle" style={{ fontSize: '20px', color: '#fbbf24' }}></i>
                  Soporte tecnico 24/7
                </div>
              </div>
            </div>

            {/* Columna derecha - Card de beneficios */}
            <div className="col-lg-5">
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
              }}>
                <h3 style={{ color: '#ffffff', fontSize: '24px', fontWeight: '700', marginBottom: '25px' }}>
                  Que Incluye el Sistema
                </h3>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="bx bx-video-recording" style={{ fontSize: '24px', color: '#1e3a8a' }}></i>
                    </div>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: '600', marginBottom: '5px' }}>Camaras 4K con IA</div>
                      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Vision nocturna y deteccion inteligente</div>
                    </div>
                  </li>

                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="bx bx-fingerprint" style={{ fontSize: '24px', color: '#1e3a8a' }}></i>
                    </div>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: '600', marginBottom: '5px' }}>Control Biometrico</div>
                      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Acceso facial y vehicular integrado</div>
                    </div>
                  </li>

                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '20px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="bx bx-cloud-upload" style={{ fontSize: '24px', color: '#1e3a8a' }}></i>
                    </div>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: '600', marginBottom: '5px' }}>Respaldo en la Nube</div>
                      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Almacenamiento seguro y accesible</div>
                    </div>
                  </li>

                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="bx bx-mobile-alt" style={{ fontSize: '24px', color: '#1e3a8a' }}></i>
                    </div>
                    <div>
                      <div style={{ color: '#ffffff', fontWeight: '600', marginBottom: '5px' }}>App Movil</div>
                      <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>Monitoreo desde tu celular iOS/Android</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-banner-seguridad h1 {
            font-size: 32px !important;
          }

          .hero-banner-seguridad {
            padding-top: 80px !important;
            padding-bottom: 60px !important;
          }
        }
      `}</style>
    </>
  );
};

export default MainBannerSeguridad;
