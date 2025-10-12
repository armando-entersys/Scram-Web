"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FeaturesRedes = () => {
  return (
    <section className="ml-services-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Infraestructura de Red y Conectividad Certificada</h2>
          <div className="bar"></div>
          <p>Diseño, implementación y soporte de redes empresariales de alta disponibilidad</p>
        </div>

        {/* Servicios Principales */}
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-sitemap" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Cableado Estructurado Certificado</h3>
              <p>Cat5e, Cat6, Cat6A, Cat7. Certificación Fluke Networks, garantía 25 años, cumplimiento TIA/EIA</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-signal-5" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Fibra Óptica Monomodo/Multimodo</h3>
              <p>Instalación, fusión, certificación OTDR. Enlaces hasta 100Gbps para backbone empresarial y datacenter</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-server" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Centros de Datos (Data Centers)</h3>
              <p>Racks, cableado, cooling, energía, monitoreo ambiental. Tier II/III con redundancia N+1</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-wifi" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Redes LAN/WAN Empresariales</h3>
              <p>Switches, routers, SD-WAN, VPN site-to-site. Conectividad multi-sitio segura y redundante</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-network-chart" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Power over Ethernet (PoE/PoE+)</h3>
              <p>Switches PoE, injectors, splitters. Alimentación para AP, cámaras IP, VoIP hasta 90W</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-broadcast" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>WiFi Empresarial & DAS</h3>
              <p>WiFi 6/6E, controladores, sistemas de antenas distribuidas para cobertura total</p>
            </div>
          </div>
        </div>

        {/* Infraestructura Física */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Infraestructura Física y Protección</h3>
              <div className="bar"></div>
              <p>Componentes certificados para máxima confiabilidad</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '200px' }}>
              <i className="bx bx-cabinet" style={{ fontSize: '50px', color: '#ff9900', marginBottom: '15px' }}></i>
              <h5 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>Racks & Gabinetes</h5>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '0' }}>Racks 19", 42U/47U, gabinetes cerrados, PDUs inteligentes, organizadores</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '200px' }}>
              <i className="bx bx-plug" style={{ fontSize: '50px', color: '#ff9900', marginBottom: '15px' }}></i>
              <h5 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>Protección Eléctrica</h5>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '0' }}>UPS online/offline, supresores, reguladores, plantas eléctricas de respaldo</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '200px' }}>
              <i className="bx bx-wind" style={{ fontSize: '50px', color: '#ff9900', marginBottom: '15px' }}></i>
              <h5 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>Climatización</h5>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '0' }}>Aires acondicionados de precisión, ventilación forzada, monitoreo temperatura</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '200px' }}>
              <i className="bx bx-cable-car" style={{ fontSize: '50px', color: '#ff9900', marginBottom: '15px' }}></i>
              <h5 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>Canalización</h5>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '0' }}>Charolas, canaletas, tubería conduit, bandejas portacables, escalerillas</p>
            </div>
          </div>
        </div>

        {/* Caso de Éxito */}
        <div className="row" style={{ marginTop: '60px', background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)', padding: '50px 30px', borderRadius: '15px', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', marginLeft: '0', marginRight: '0' }}>
          <div className="col-lg-12 text-center">
            <i className="bx bx-buildings" style={{ fontSize: '60px', marginBottom: '20px', color: '#ff9900' }}></i>
            <h3 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '28px', fontWeight: '700', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Cliente Destacado: Chedraui Corporativo</h3>
            <p style={{ fontSize: '18px', marginBottom: '0', maxWidth: '800px', margin: '0 auto', color: '#ffffff', lineHeight: '1.6' }}>
              Implementamos infraestructura completa de <strong style={{ color: '#ff9900', fontSize: '22px' }}>red corporativa</strong> conectando 20 sucursales con fibra óptica y <strong style={{ color: '#ff9900', fontSize: '22px' }}>99.9%</strong> de disponibilidad garantizada
            </p>
          </div>
        </div>

        {/* Marcas Partners */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Partners Tecnológicos Certificados</h3>
              <p>Trabajamos con las marcas líderes en infraestructura</p>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '30px' }}>
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
            <a href="https://www.panduit.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <img src="/images/scram/partners/panduit.svg" alt="Panduit" width="120" height="43" />
              </div>
            </a>
          </div>

          <div className="col-lg-2 col-md-4 col-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.belden.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <img src="/images/scram/partners/belden.svg" alt="Belden" width="120" height="43" />
              </div>
            </a>
          </div>

          <div className="col-lg-2 col-md-4 col-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.commscope.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <img src="/images/scram/partners/commscope.svg" alt="CommScope" width="120" height="43" />
              </div>
            </a>
          </div>

          <div className="col-lg-2 col-md-4 col-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.apc.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <Image src="/images/scram/partners/apc.webp" alt="APC by Schneider Electric" width={120} height={43} />
              </div>
            </a>
          </div>

          <div className="col-lg-2 col-md-4 col-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.corning.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <img src="/images/scram/partners/corning.svg" alt="Corning" width="120" height="43" />
              </div>
            </a>
          </div>
        </div>

        {/* Beneficios */}
        <div className="row" style={{ marginTop: '60px', background: '#f8f9fa', padding: '50px 0', marginLeft: '-15px', marginRight: '-15px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Por Qué Elegir Nuestros Servicios</h3>
              <div className="bar"></div>
              <p>Experiencia y calidad garantizada desde 1997</p>
            </div>
          </div>
        </div>

        <div className="row" style={{ background: '#f8f9fa', paddingBottom: '50px', marginLeft: '-15px', marginRight: '-15px' }}>
          <div className="col-lg-6 col-md-6" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-certification" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Certificaciones Fluke & BICSI</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Técnicos certificados con equipos Fluke DTX/DSX. Garantía extendida 25 años</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-line-chart" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>99.9% de disponibilidad garantizada</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Diseño redundante N+1, enlaces backup, monitoreo 24/7 con NOC propio</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-file-find" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Documentación completa as-built</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Planos, etiquetado, reportes de certificación, manuales operativos</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-time-five" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Soporte técnico 24/7/365</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Mesa de ayuda, atención en sitio, SLAs de respuesta desde 2 horas</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-check-shield" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Cumplimiento normativo total</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>TIA/EIA, ISO/IEC 11801, NOM-001-SEDE, código eléctrico nacional</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-trending-up" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Escalabilidad garantizada</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Diseño modular preparado para crecimiento futuro hasta 10Gbps+</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-lg-12">
            <div style={{ background: 'linear-gradient(135deg, #ff9900 0%, #ff8c00 100%)', padding: '50px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 10px 40px rgba(255,153,0,0.3)' }}>
              <h3 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '32px', fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                ¿Necesitas Implementar o Modernizar tu Red?
              </h3>
              <p style={{ fontSize: '18px', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px', color: '#ffffff', lineHeight: '1.6', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                Solicita un <strong style={{ backgroundColor: 'rgba(255,255,255,0.25)', padding: '2px 8px', borderRadius: '4px' }}>site survey gratuito</strong> y recibe una propuesta técnico-económica personalizada
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/529993882606?text=Hola%2C%20necesito%20cotizar%20infraestructura%20de%20red"
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
                  Solicitar Site Survey Gratis
                </Link>
              </div>
              <p style={{ marginTop: '25px', fontSize: '15px', color: '#ffffff', fontWeight: '500', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                <i className="bx bx-certification"></i> Certificados Fluke • <i className="bx bx-support"></i> Soporte 24/7 • <i className="bx bx-award"></i> Desde 1997
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesRedes;
