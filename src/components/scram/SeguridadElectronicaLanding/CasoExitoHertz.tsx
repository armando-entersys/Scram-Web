"use client";

import React from "react";

const CasoExitoHertz = () => {
  return (
    <React.Fragment>
    <section className="case-study-visual ptb-80" style={{ background: '#f8f9fa' }}>
      <div className="container">
        {/* Badge superior */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
            padding: '10px 30px',
            borderRadius: '50px',
            marginBottom: '20px'
          }}>
            <i className="bx bx-trophy" style={{ fontSize: '24px', color: '#1e3a8a' }}></i>
            <span style={{ color: '#1e3a8a', fontWeight: '700', fontSize: '14px' }}>CASO DE EXITO COMPROBADO</span>
          </div>
          <h2 style={{ fontSize: '36px', fontWeight: '700', color: '#1e3a8a', marginBottom: '15px' }}>
            Hertz Mexico: Resultados Extraordinarios
          </h2>
          <p style={{ fontSize: '18px', color: '#666', maxWidth: '700px', margin: '0 auto' }}>
            Implementamos videovigilancia con IA en multiples ubicaciones, transformando su seguridad operativa
          </p>
        </div>

        <div className="row align-items-center" style={{ marginBottom: '40px' }}>
          {/* Columna izquierda - Imagen */}
          <div className="col-lg-6" style={{ marginBottom: '30px' }}>
            <div style={{
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)'
            }}>
              <img
                src="/images/scram/servicios/cctv.webp"
                alt="Sistema CCTV Hertz Mexico"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                background: 'rgba(30, 58, 138, 0.9)',
                backdropFilter: 'blur(10px)',
                padding: '15px 25px',
                borderRadius: '12px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="bx bx-video-recording" style={{ fontSize: '28px', color: '#fbbf24' }}></i>
                  <div>
                    <div style={{ color: '#ffffff', fontWeight: '700', fontSize: '16px' }}>30+ Camaras 4K</div>
                    <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Con IA integrada</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Metricas */}
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6" style={{ marginBottom: '20px' }}>
                <div style={{
                  background: '#ffffff',
                  padding: '30px',
                  borderRadius: '15px',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  border: '2px solid #fbbf24'
                }}>
                  <div style={{ fontSize: '48px', fontWeight: '700', color: '#fbbf24', marginBottom: '10px' }}>75%</div>
                  <p style={{ color: '#1e3a8a', fontSize: '15px', fontWeight: '600', marginBottom: '0' }}>
                    Reduccion de<br/>incidentes de seguridad
                  </p>
                </div>
              </div>

              <div className="col-md-6" style={{ marginBottom: '20px' }}>
                <div style={{
                  background: '#ffffff',
                  padding: '30px',
                  borderRadius: '15px',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}>
                  <div style={{ fontSize: '48px', fontWeight: '700', color: '#1e3a8a', marginBottom: '10px' }}>80%</div>
                  <p style={{ color: '#666', fontSize: '15px', fontWeight: '600', marginBottom: '0' }}>
                    Menos perdidas<br/>por robo hormiga
                  </p>
                </div>
              </div>

              <div className="col-md-6" style={{ marginBottom: '20px' }}>
                <div style={{
                  background: '#ffffff',
                  padding: '30px',
                  borderRadius: '15px',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}>
                  <div style={{ fontSize: '48px', fontWeight: '700', color: '#1e3a8a', marginBottom: '10px' }}>40%</div>
                  <p style={{ color: '#666', fontSize: '15px', fontWeight: '600', marginBottom: '0' }}>
                    Aumento de<br/>productividad
                  </p>
                </div>
              </div>

              <div className="col-md-6" style={{ marginBottom: '20px' }}>
                <div style={{
                  background: '#ffffff',
                  padding: '30px',
                  borderRadius: '15px',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
                }}>
                  <div style={{ fontSize: '48px', fontWeight: '700', color: '#1e3a8a', marginBottom: '10px' }}>12m</div>
                  <p style={{ color: '#666', fontSize: '15px', fontWeight: '600', marginBottom: '0' }}>
                    ROI<br/>recuperado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA destacado */}
        <div className="row">
          <div className="col-lg-12">
            <div style={{
              background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
              padding: '40px 50px',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: '0 10px 40px rgba(30, 58, 138, 0.25)'
            }}>
              <h3 style={{ color: '#ffffff', fontSize: '28px', fontWeight: '700', marginBottom: '15px' }}>
                Obten Resultados Similares en tu Empresa
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                Solicita el caso de exito completo de Hertz Mexico y descubre como podemos ayudarte
              </p>
              <a
                href="https://wa.me/529993882606?text=Hola%2C%20me%20interesa%20el%20caso%20de%20exito%20de%20Hertz%20Mexico"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#25D366',
                  color: '#ffffff',
                  padding: '18px 40px',
                  borderRadius: '12px',
                  fontSize: '18px',
                  fontWeight: '700',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(37,211,102,0.4)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(37,211,102,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.4)';
                }}
              >
                <i className="bx bxl-whatsapp bx-tada" style={{ fontSize: '26px' }}></i>
                Solicitar Caso de Exito Completo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <style jsx>{`
      @media (max-width: 768px) {
        .case-study-visual {
          padding: 50px 0 !important;
        }

        /* Badge y títulos */
        .case-study-visual h2 {
          font-size: 26px !important;
          margin-bottom: 12px !important;
        }

        .case-study-visual > div > div:first-child p {
          font-size: 15px !important;
        }

        .case-study-visual > div > div:first-child > div {
          padding: 8px 20px !important;
          font-size: 12px !important;
        }

        .case-study-visual > div > div:first-child > div i {
          font-size: 20px !important;
        }

        .case-study-visual > div > div:first-child > div span {
          font-size: 12px !important;
        }

        /* Imagen responsive */
        .case-study-visual .col-lg-6:first-of-type {
          margin-bottom: 30px !important;
        }

        /* Badge sobre imagen más pequeño */
        .case-study-visual img + div {
          padding: 12px 18px !important;
          bottom: 15px !important;
          left: 15px !important;
        }

        .case-study-visual img + div i {
          font-size: 22px !important;
        }

        .case-study-visual img + div > div > div:first-child {
          font-size: 14px !important;
        }

        .case-study-visual img + div > div > div:last-child {
          font-size: 11px !important;
        }

        /* Métricas más compactas en grid 2x2 */
        .case-study-visual .col-md-6 {
          padding: 0 7px !important;
        }

        .case-study-visual .col-md-6 > div {
          padding: 20px 15px !important;
          margin-bottom: 15px !important;
        }

        .case-study-visual .col-md-6 > div > div:first-child {
          font-size: 36px !important;
          margin-bottom: 8px !important;
        }

        .case-study-visual .col-md-6 p {
          font-size: 13px !important;
        }

        /* CTA section responsive */
        .case-study-visual .row:last-child > div > div {
          padding: 30px 20px !important;
        }

        .case-study-visual .row:last-child h3 {
          font-size: 22px !important;
          margin-bottom: 12px !important;
        }

        .case-study-visual .row:last-child p {
          font-size: 14px !important;
          margin-bottom: 25px !important;
        }

        .case-study-visual .row:last-child a {
          width: 100% !important;
          padding: 15px 30px !important;
          font-size: 16px !important;
          justify-content: center !important;
        }

        .case-study-visual .row:last-child a i {
          font-size: 22px !important;
        }
      }
    `}</style>
    </React.Fragment>
  );
};

export default CasoExitoHertz;
