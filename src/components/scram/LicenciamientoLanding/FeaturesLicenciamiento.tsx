"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FeaturesLicenciamiento = () => {
  return (
    <section className="ml-services-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Licenciamiento de Software y Seguridad Cibernética Empresarial</h2>
          <div className="bar"></div>
          <p>Soluciones legales y seguras para tu infraestructura tecnológica</p>
        </div>

        {/* Servicios Principales de Licenciamiento */}
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bxs-certification" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Licencias Originales Microsoft</h3>
              <p>Windows Server, SQL Server, Office 365, Azure. Licenciamiento por volumen, CSP y EA para empresas</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-data" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Oracle Database & Middleware</h3>
              <p>Licencias perpetuas y por suscripción. Oracle Database, WebLogic, SOA Suite con soporte completo</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-chip" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>IBM & Red Hat Enterprise</h3>
              <p>Soluciones empresariales IBM, RHEL, OpenShift. Licenciamiento flexible adaptado a tu infraestructura</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-network-chart" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Cisco & VMware Networking</h3>
              <p>Cisco Umbrella, Meraki, Webex. VMware vSphere, vCenter para virtualización empresarial</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-shield-alt-2" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Fortinet & Seguridad Perimetral</h3>
              <p>FortiGate, FortiAnalyzer, FortiManager. Protección avanzada contra amenazas y DLP empresarial</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-briefcase-alt" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Software Empresarial Especializado</h3>
              <p>Autodesk, Adobe Creative Cloud, QuickBooks, Smartsheet y soluciones verticales certificadas</p>
            </div>
          </div>
        </div>

        {/* Servicios de Seguridad Cibernética */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Servicios de Seguridad Cibernética Incluidos</h3>
              <div className="bar"></div>
              <p>Protección integral contra amenazas digitales modernas</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '200px' }}>
              <i className="bx bx-bug-alt" style={{ fontSize: '50px', color: '#ff9900', marginBottom: '15px' }}></i>
              <h5 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>Antivirus & Antimalware</h5>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '0' }}>Protección en tiempo real contra virus, ransomware y malware</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '200px' }}>
              <i className="bx bx-lock-open-alt" style={{ fontSize: '50px', color: '#ff9900', marginBottom: '15px' }}></i>
              <h5 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>Firewall Empresarial</h5>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '0' }}>Filtrado avanzado de tráfico y prevención de intrusiones</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '200px' }}>
              <i className="bx bx-server" style={{ fontSize: '50px', color: '#ff9900', marginBottom: '15px' }}></i>
              <h5 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>DLP & Cifrado</h5>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '0' }}>Prevención de fuga de datos y cifrado de información crítica</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '200px' }}>
              <i className="bx bx-search-alt" style={{ fontSize: '50px', color: '#ff9900', marginBottom: '15px' }}></i>
              <h5 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>Monitoreo SIEM</h5>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '0' }}>Análisis de eventos y respuesta ante incidentes 24/7</p>
            </div>
          </div>
        </div>

        {/* Caso de Éxito */}
        <div className="row" style={{ marginTop: '60px', background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)', padding: '50px 30px', borderRadius: '15px', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', marginLeft: '0', marginRight: '0' }}>
          <div className="col-lg-12 text-center">
            <i className="bx bx-award" style={{ fontSize: '60px', marginBottom: '20px', color: '#ff9900' }}></i>
            <h3 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '28px', fontWeight: '700', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Clientes Destacados: FEMSA & Grupo Modelo</h3>
            <p style={{ fontSize: '18px', marginBottom: '0', maxWidth: '800px', margin: '0 auto', color: '#ffffff', lineHeight: '1.6' }}>
              Gestionamos más de <strong style={{ color: '#ff9900', fontSize: '22px' }}>5,000 licencias</strong> empresariales con cumplimiento normativo al 100% y ahorro de <strong style={{ color: '#ff9900', fontSize: '22px' }}>30%</strong> en costos operativos
            </p>
          </div>
        </div>

        {/* Marcas Principales */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Marcas Líderes que Licenciamos</h3>
              <p>Partners certificados con descuentos corporativos exclusivos</p>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '30px' }}>
          <div className="col-lg-2 col-md-4 col-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <Image src="/images/scram/partners/microsoft.webp" alt="Microsoft" width={120} height={43} />
              </div>
            </a>
          </div>

          <div className="col-lg-2 col-md-4 col-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.oracle.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <Image src="/images/scram/partners/oracle.webp" alt="Oracle" width={120} height={43} />
              </div>
            </a>
          </div>

          <div className="col-lg-2 col-md-4 col-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.ibm.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <Image src="/images/scram/partners/ibm.webp" alt="IBM" width={120} height={43} />
              </div>
            </a>
          </div>

          <div className="col-lg-2 col-md-4 col-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.cisco.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <Image src="/images/scram/partners/cisco.webp" alt="Cisco" width={120} height={43} />
              </div>
            </a>
          </div>

          <div className="col-lg-2 col-md-4 col-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.vmware.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <Image src="/images/scram/partners/vmware.webp" alt="VMware" width={120} height={43} />
              </div>
            </a>
          </div>

          <div className="col-lg-2 col-md-4 col-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.fortinet.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <Image src="/images/scram/partners/fortinet.webp" alt="Fortinet" width={120} height={43} />
              </div>
            </a>
          </div>
        </div>

        {/* Beneficios Comprobados */}
        <div className="row" style={{ marginTop: '60px', background: '#f8f9fa', padding: '50px 0', marginLeft: '-15px', marginRight: '-15px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Beneficios que Transforman tu Operación</h3>
              <div className="bar"></div>
              <p>Resultados medibles con impacto directo en tu negocio</p>
            </div>
          </div>
        </div>

        <div className="row" style={{ background: '#f8f9fa', paddingBottom: '50px', marginLeft: '-15px', marginRight: '-15px' }}>
          <div className="col-lg-6 col-md-6" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-check-shield" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>100% Cumplimiento Legal</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Licencias originales con auditorías sin riesgos. Evita multas de hasta $250,000 USD por software pirata</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-dollar-circle" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Ahorro del 25-35% en licenciamiento</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Optimización de licencias, contratos corporativos y eliminación de redundancias</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-time-five" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Gestión automatizada de renovaciones</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Sistema de alertas y renovación automática. Nunca más licencias vencidas</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-shield-quarter" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Protección contra ciberataques 24/7</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Reducción del 90% en incidentes de seguridad con monitoreo proactivo</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-support" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Soporte técnico especializado incluido</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Ingenieros certificados disponibles para instalación, configuración y troubleshooting</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-bar-chart-alt-2" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Visibilidad total del inventario</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Dashboard centralizado con reportes en tiempo real de todas tus licencias</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-lg-12">
            <div style={{ background: 'linear-gradient(135deg, #ff9900 0%, #ff8c00 100%)', padding: '50px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 10px 40px rgba(255,153,0,0.3)' }}>
              <h3 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '32px', fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                ¿Listo para Optimizar tu Licenciamiento?
              </h3>
              <p style={{ fontSize: '18px', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px', color: '#ffffff', lineHeight: '1.6', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                Obtén una <strong style={{ backgroundColor: 'rgba(255,255,255,0.25)', padding: '2px 8px', borderRadius: '4px' }}>auditoría gratuita</strong> de tu inventario de licencias y descubre oportunidades de ahorro
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/529993882606?text=Hola%2C%20me%20interesa%20una%20cotizaci%C3%B3n%20de%20Licenciamiento%20y%20Seguridad%20Cibern%C3%A9tica"
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
                  Solicitar Auditoría Gratis
                </Link>
              </div>
              <p style={{ marginTop: '25px', fontSize: '15px', color: '#ffffff', fontWeight: '500', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                <i className="bx bx-time-five"></i> Respuesta en 24 horas • <i className="bx bx-award"></i> Partners certificados desde 1997
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesLicenciamiento;
