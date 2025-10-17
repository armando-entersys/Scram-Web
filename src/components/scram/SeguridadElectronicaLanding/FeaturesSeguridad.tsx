"use client";

import React from "react";
import Image from "next/image";

const FeaturesSeguridad = () => {
  return (
    <section className="ml-services-area ptb-80" id="servicios" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="section-title">
          <h2>Soluciones de Seguridad Electronica con IA</h2>
          <div className="bar"></div>
          <p>Proteccion integral 24/7 con tecnologia de ultima generacion</p>
        </div>

        {/* Servicios Principales con Iconos Visuales */}
        <div className="row">
          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-video-recording" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Videovigilancia Inteligente</h3>
              <p>Camaras 4K con vision nocturna avanzada, grabacion en la nube y local. Resistentes a condiciones climaticas extremas</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-brain" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Analisis con IA</h3>
              <p>Deteccion inteligente de movimientos sospechosos, conteo de personas, reconocimiento facial y alertas automaticas</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-fingerprint" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Control de Acceso Biometrico</h3>
              <p>Sistemas de huella digital, facial y tarjetas inteligentes. Control peatonal, vehicular y de asistencia integrado</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-time-five" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Monitoreo 24/7 en Tiempo Real</h3>
              <p>Supervisa todas tus instalaciones desde cualquier dispositivo con acceso remoto seguro y notificaciones instantaneas</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-network-chart" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Integracion Total de Sistemas</h3>
              <p>Conexion con alarmas anti-intrusion, detectores de incendio, controles de acceso y sensores IoT</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-wrench" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Mantenimiento Preventivo</h3>
              <p>Servicio tecnico especializado, actualizaciones de firmware y operacion optima garantizada</p>
            </div>
          </div>
        </div>

        {/* Marcas Partner con Logos */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Marcas Lideres con las que Trabajamos</h3>
              <p>Partners tecnologicos certificados de clase mundial</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center" style={{ marginTop: '30px' }}>
          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#ffffff', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
              <Image src="/images/scram/partners/hikvision.webp" alt="Hikvision" width={150} height={54} />
            </div>
          </div>

          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#ffffff', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
              <div>
                <h5 style={{ marginBottom: '0', fontSize: '24px', fontWeight: '700', color: '#0066cc' }}>DAHUA</h5>
                <p style={{ fontSize: '14px', color: '#666', marginTop: '5px', marginBottom: '0' }}>Technology</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#ffffff', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
              <div>
                <h5 style={{ marginBottom: '0', fontSize: '24px', fontWeight: '700', color: '#000000' }}>AXIS</h5>
                <p style={{ fontSize: '14px', color: '#666', marginTop: '5px', marginBottom: '0' }}>Communications</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#ffffff', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
              <div>
                <h5 style={{ marginBottom: '0', fontSize: '24px', fontWeight: '700', color: '#e20025' }}>ZKTeco</h5>
                <p style={{ fontSize: '14px', color: '#666', marginTop: '5px', marginBottom: '0' }}>Security & Time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios Section */}
        <div className="row" style={{ marginTop: '80px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Beneficios Clave de Nuestras Soluciones</h3>
              <p>Mejora tangible en seguridad, productividad y rentabilidad</p>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '30px' }}>
          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#ffffff', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', height: '100%' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#ff9900', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <i className="bx bx-shield-quarter" style={{ fontSize: '30px', color: '#ffffff' }}></i>
              </div>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#1e3a8a' }}>75% Menos Incidentes</h4>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', marginBottom: '0' }}>
                Reducción comprobada en robos, intrusiones y accidentes laborales
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#ffffff', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', height: '100%' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#ff9900', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <i className="bx bx-trending-up" style={{ fontSize: '30px', color: '#ffffff' }}></i>
              </div>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#1e3a8a' }}>ROI en 12 Meses</h4>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', marginBottom: '0' }}>
                Recupera tu inversión mediante ahorros en pérdidas y seguros
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#ffffff', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', height: '100%' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#ff9900', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <i className="bx bx-time" style={{ fontSize: '30px', color: '#ffffff' }}></i>
              </div>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#1e3a8a' }}>Respuesta en 2 Horas</h4>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', marginBottom: '0' }}>
                Soporte técnico de emergencia garantizado en CDMX y Estado de México
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#ffffff', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', height: '100%' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#ff9900', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <i className="bx bx-cloud-upload" style={{ fontSize: '30px', color: '#ffffff' }}></i>
              </div>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#1e3a8a' }}>Almacenamiento Híbrido</h4>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', marginBottom: '0' }}>
                Respaldo local y en la nube con retención de 30-90 días
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#ffffff', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', height: '100%' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#ff9900', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <i className="bx bx-certification" style={{ fontSize: '30px', color: '#ffffff' }}></i>
              </div>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#1e3a8a' }}>Certificaciones y Garantías</h4>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', marginBottom: '0' }}>
                Ingenieros certificados con garantía de 1-3 años en equipos
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#ffffff', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', height: '100%' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#ff9900', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <i className="bx bx-mobile-alt" style={{ fontSize: '30px', color: '#ffffff' }}></i>
              </div>
              <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#1e3a8a' }}>Apps iOS y Android</h4>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', marginBottom: '0' }}>
                Monitoreo desde cualquier lugar con notificaciones en tiempo real
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-lg-12">
            <div style={{
              background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
              padding: '50px',
              borderRadius: '20px',
              textAlign: 'center',
              boxShadow: '0 10px 40px rgba(30, 58, 138, 0.25)'
            }}>
              <h3 style={{ color: '#ffffff', fontSize: '32px', fontWeight: '700', marginBottom: '20px' }}>
                ¿Listo para Proteger tu Empresa?
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', marginBottom: '35px', maxWidth: '700px', margin: '0 auto 35px' }}>
                Obtén un diagnóstico gratuito y cotización personalizada en menos de 24 horas
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/529993882606?text=Hola%2C%20quiero%20una%20cotización%20de%20seguridad%20electrónica"
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
                  Cotizar por WhatsApp
                </a>
                <a
                  href="/contact"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    color: '#ffffff',
                    padding: '18px 40px',
                    borderRadius: '12px',
                    fontSize: '18px',
                    fontWeight: '700',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    textDecoration: 'none',
                    border: '2px solid rgba(255,255,255,0.3)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                  }}
                >
                  <i className="bx bx-phone-call" style={{ fontSize: '26px' }}></i>
                  Llamar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSeguridad;
