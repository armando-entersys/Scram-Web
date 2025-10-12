"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FeaturesSeguridad = () => {
  return (
    <section className="ml-services-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Soluciones de Seguridad Electrónica Empresarial</h2>
          <div className="bar"></div>
          <p>Protección integral 24/7 con tecnología de última generación e Inteligencia Artificial</p>
        </div>

        {/* Servicios Principales */}
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-video-recording" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Videovigilancia Inteligente</h3>
              <p>Cámaras 4K con visión nocturna avanzada, grabación en la nube y local. Resistentes a condiciones climáticas extremas</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-brain" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Análisis con IA</h3>
              <p>Detección inteligente de movimientos sospechosos, conteo de personas, reconocimiento facial y alertas automáticas</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-fingerprint" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Control de Acceso Biométrico</h3>
              <p>Sistemas de huella digital, facial y tarjetas inteligentes. Control peatonal, vehicular y de asistencia integrado</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-time-five" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Monitoreo 24/7 en Tiempo Real</h3>
              <p>Supervisa todas tus instalaciones desde cualquier dispositivo con acceso remoto seguro y notificaciones instantáneas</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-network-chart" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Integración Total de Sistemas</h3>
              <p>Conexión con alarmas anti-intrusión, detectores de incendio, controles de acceso y sensores IoT</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-wrench" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Mantenimiento Preventivo</h3>
              <p>Servicio técnico especializado, actualizaciones de firmware y operación óptima garantizada</p>
            </div>
          </div>
        </div>

        {/* Caso de Éxito */}
        <div className="row" style={{ marginTop: '60px', background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)', padding: '50px 30px', borderRadius: '15px', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', marginLeft: '0', marginRight: '0' }}>
          <div className="col-lg-12 text-center">
            <i className="bx bx-trophy" style={{ fontSize: '60px', marginBottom: '20px', color: '#ff9900' }}></i>
            <h3 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '28px', fontWeight: '700', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Cliente Destacado: Hertz México</h3>
            <p style={{ fontSize: '18px', marginBottom: '0', maxWidth: '800px', margin: '0 auto', color: '#ffffff', lineHeight: '1.6' }}>
              Implementamos un sistema completo de videovigilancia con IA en múltiples ubicaciones, reduciendo incidentes de seguridad en un <strong style={{ color: '#ff9900', fontSize: '22px' }}>75%</strong> y mejorando la eficiencia operativa
            </p>
          </div>
        </div>

        {/* Tecnologías y Marcas */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Marcas Líderes con las que Trabajamos</h3>
              <p>Partners tecnológicos certificados de clase mundial</p>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '30px' }}>
          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.hikvision.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <div>
                  <Image src="/images/scram/partners/hikvision.webp" alt="Hikvision" width={150} height={54} style={{ marginBottom: '10px' }} />
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.dahuasecurity.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <div>
                  <h5 style={{ marginBottom: '0', fontSize: '20px', fontWeight: '700', color: '#0066cc' }}>DAHUA</h5>
                  <p style={{ fontSize: '12px', color: '#666', marginTop: '5px', marginBottom: '0' }}>Technology</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.axis.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <div>
                  <h5 style={{ marginBottom: '0', fontSize: '20px', fontWeight: '700', color: '#000000' }}>AXIS</h5>
                  <p style={{ fontSize: '12px', color: '#666', marginTop: '5px', marginBottom: '0' }}>Communications</p>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.zkteco.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <div>
                  <h5 style={{ marginBottom: '0', fontSize: '20px', fontWeight: '700', color: '#e20025' }}>ZKTeco</h5>
                  <p style={{ fontSize: '12px', color: '#666', marginTop: '5px', marginBottom: '0' }}>Security & Time</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Beneficios Mejorados */}
        <div className="row" style={{ marginTop: '60px', background: '#f8f9fa', padding: '50px 0', marginLeft: '-15px', marginRight: '-15px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Beneficios Comprobados para tu Empresa</h3>
              <div className="bar"></div>
              <p>Resultados reales que impactan tu operación</p>
            </div>
          </div>
        </div>

        <div className="row" style={{ background: '#f8f9fa', paddingBottom: '50px', marginLeft: '-15px', marginRight: '-15px' }}>
          <div className="col-lg-6 col-md-6" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-trending-up" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Aumento de productividad del 40%</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Control efectivo del personal y reducción de tiempos muertos</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-shield-quarter" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Reducción de pérdidas hasta 80%</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Prevención efectiva de robo hormiga y merma en almacenes</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-video-recording" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Evidencia digital 24/7</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Grabación confiable con respaldo en la nube y almacenamiento local redundante</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-check-double" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Control total de accesos</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Gestión centralizada de personas, vehículos y asistencia del personal</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-bell" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Alertas inteligentes en tiempo real</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Notificaciones instantáneas ante eventos críticos vía email, SMS y app móvil</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-line-chart" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>ROI comprobado en 8-14 meses</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Retorno de inversión rápido gracias a reducción de pérdidas y mejor eficiencia</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final Mejorado */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-lg-12">
            <div style={{ background: 'linear-gradient(135deg, #ff9900 0%, #ff8c00 100%)', padding: '50px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 10px 40px rgba(255,153,0,0.3)' }}>
              <h3 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '32px', fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                ¿Listo para Proteger tu Empresa?
              </h3>
              <p style={{ fontSize: '18px', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px', color: '#ffffff', lineHeight: '1.6', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                Solicita una <strong style={{ backgroundColor: 'rgba(255,255,255,0.25)', padding: '2px 8px', borderRadius: '4px' }}>consultoría gratuita</strong> y cotización personalizada. Nuestros expertos analizarán tus necesidades sin compromiso.
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/529993882606?text=Hola%2C%20me%20interesa%20una%20cotizaci%C3%B3n%20de%20Seguridad%20Electr%C3%B3nica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light cta-whatsapp-btn"
                  style={{ padding: '15px 40px', fontSize: '18px', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '10px', backgroundColor: '#ffffff', color: '#ff9900', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#ff9900';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.color = '#ff9900';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                  }}
                >
                  <i className="bx bxl-whatsapp" style={{ fontSize: '24px' }}></i>
                  Cotizar por WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="btn cta-contact-btn"
                  style={{ padding: '15px 40px', fontSize: '18px', fontWeight: 'bold', backgroundColor: '#ffffff', color: '#ff9900', border: '3px solid #ffffff', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.borderColor = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.color = '#ff9900';
                    e.currentTarget.style.borderColor = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
                  }}
                >
                  Agendar Consultoría Gratis
                </Link>
              </div>
              <p style={{ marginTop: '25px', fontSize: '15px', color: '#ffffff', fontWeight: '500', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                <i className="bx bx-time-five"></i> Respuesta en menos de 2 horas • <i className="bx bx-shield-alt-2"></i> Desde 1997 protegiendo empresas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSeguridad;
