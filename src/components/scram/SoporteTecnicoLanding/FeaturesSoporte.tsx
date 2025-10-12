"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FeaturesSoporte = () => {
  return (
    <section className="ml-services-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Pólizas de Soporte Técnico IT Empresarial</h2>
          <div className="bar"></div>
          <p>Mantenimiento preventivo y correctivo con SLAs garantizados</p>
        </div>

        {/* 3 Planes de Soporte */}
        <div className="row" style={{ marginBottom: '60px' }}>
          <div className="col-lg-4 col-md-6">
            <div style={{ background: '#f8f9fa', padding: '40px 30px', borderRadius: '15px', minHeight: '480px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
              }}>
              <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <i className="bx bx-briefcase" style={{ fontSize: '50px', color: '#ff9900', marginBottom: '15px' }}></i>
                <h3 style={{ color: '#ff9900', fontSize: '26px', fontWeight: '700', marginBottom: '10px' }}>Plan Negocios</h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '0' }}>Para pequeñas empresas</p>
              </div>
              <ul style={{ listStyle: 'none', padding: '0', marginBottom: '0' }}>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
                  <i className="bx bx-check-circle" style={{ fontSize: '20px', color: '#ff9900', marginRight: '10px' }}></i>
                  <span><strong>Hasta 12 equipos</strong> de cómputo</span>
                </li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
                  <i className="bx bx-check-circle" style={{ fontSize: '20px', color: '#ff9900', marginRight: '10px' }}></i>
                  <span><strong>1 servidor</strong> físico/virtual</span>
                </li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
                  <i className="bx bx-check-circle" style={{ fontSize: '20px', color: '#ff9900', marginRight: '10px' }}></i>
                  <span><strong>8 eventos remotos</strong> (2hrs máx)</span>
                </li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
                  <i className="bx bx-check-circle" style={{ fontSize: '20px', color: '#ff9900', marginRight: '10px' }}></i>
                  <span><strong>1 visita mensual</strong> en sitio (4hrs)</span>
                </li>
                <li style={{ padding: '10px 0', display: 'flex', alignItems: 'center' }}>
                  <i className="bx bx-check-circle" style={{ fontSize: '20px', color: '#ff9900', marginRight: '10px' }}></i>
                  <span><strong>Respuesta 24 horas</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div style={{ background: 'linear-gradient(135deg, #ff9900 0%, #ff8c00 100%)', padding: '40px 30px', borderRadius: '15px', minHeight: '480px', boxShadow: '0 10px 30px rgba(255,153,0,0.3)', transform: 'scale(1.05)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-15px', right: '20px', background: '#ffffff', color: '#ff9900', padding: '5px 15px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                MÁS POPULAR
              </div>
              <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <i className="bx bx-buildings" style={{ fontSize: '50px', color: '#ffffff', marginBottom: '15px' }}></i>
                <h3 style={{ color: '#ffffff', fontSize: '26px', fontWeight: '700', marginBottom: '10px' }}>Plan Pyme</h3>
                <p style={{ fontSize: '14px', color: '#ffffff', marginBottom: '0', opacity: '0.95' }}>Para empresas en crecimiento</p>
              </div>
              <ul style={{ listStyle: 'none', padding: '0', marginBottom: '0' }}>
                <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center' }}>
                  <i className="bx bx-check-circle" style={{ fontSize: '20px', color: '#ffffff', marginRight: '10px' }}></i>
                  <span style={{ color: '#ffffff' }}><strong>Hasta 25 equipos</strong> de cómputo</span>
                </li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center' }}>
                  <i className="bx bx-check-circle" style={{ fontSize: '20px', color: '#ffffff', marginRight: '10px' }}></i>
                  <span style={{ color: '#ffffff' }}><strong>2 servidores</strong> físicos/virtuales</span>
                </li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center' }}>
                  <i className="bx bx-check-circle" style={{ fontSize: '20px', color: '#ffffff', marginRight: '10px' }}></i>
                  <span style={{ color: '#ffffff' }}><strong>20 eventos remotos</strong> (2hrs máx)</span>
                </li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center' }}>
                  <i className="bx bx-check-circle" style={{ fontSize: '20px', color: '#ffffff', marginRight: '10px' }}></i>
                  <span style={{ color: '#ffffff' }}><strong>2 visitas mensuales</strong> en sitio (5hrs)</span>
                </li>
                <li style={{ padding: '10px 0', display: 'flex', alignItems: 'center' }}>
                  <i className="bx bx-check-circle" style={{ fontSize: '20px', color: '#ffffff', marginRight: '10px' }}></i>
                  <span style={{ color: '#ffffff' }}><strong>Respuesta 12 horas</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div style={{ background: '#f8f9fa', padding: '40px 30px', borderRadius: '15px', minHeight: '480px', boxShadow: '0 5px 20px rgba(0,0,0,0.08)', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.08)';
              }}>
              <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <i className="bx bx-building" style={{ fontSize: '50px', color: '#ff9900', marginBottom: '15px' }}></i>
                <h3 style={{ color: '#ff9900', fontSize: '26px', fontWeight: '700', marginBottom: '10px' }}>Plan Empresarial</h3>
                <p style={{ fontSize: '14px', color: '#666', marginBottom: '0' }}>Para grandes empresas</p>
              </div>
              <ul style={{ listStyle: 'none', padding: '0', marginBottom: '0' }}>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
                  <i className="bx bx-check-circle" style={{ fontSize: '20px', color: '#ff9900', marginRight: '10px' }}></i>
                  <span><strong>Hasta 60+ equipos</strong> de cómputo</span>
                </li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
                  <i className="bx bx-check-circle" style={{ fontSize: '20px', color: '#ff9900', marginRight: '10px' }}></i>
                  <span><strong>4+ servidores</strong> físicos/virtuales</span>
                </li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
                  <i className="bx bx-check-circle" style={{ fontSize: '20px', color: '#ff9900', marginRight: '10px' }}></i>
                  <span><strong>40 eventos remotos</strong> (2hrs máx)</span>
                </li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
                  <i className="bx bx-check-circle" style={{ fontSize: '20px', color: '#ff9900', marginRight: '10px' }}></i>
                  <span><strong>4 visitas mensuales</strong> en sitio (5hrs)</span>
                </li>
                <li style={{ padding: '10px 0', display: 'flex', alignItems: 'center' }}>
                  <i className="bx bx-check-circle" style={{ fontSize: '20px', color: '#ff9900', marginRight: '10px' }}></i>
                  <span><strong>Respuesta 4 horas</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Servicios Incluidos en Todas las Pólizas */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Servicios Incluidos en Todas las Pólizas</h3>
              <div className="bar"></div>
              <p>Mantenimiento integral para tu infraestructura IT</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-desktop" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Mantenimiento de Hardware</h3>
              <p>Limpieza, diagnóstico, reparación de equipos de cómputo, impresoras, UPS, periféricos</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-code-alt" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Soporte de Software</h3>
              <p>Windows, Office, aplicaciones empresariales, actualizaciones, parches de seguridad</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-server" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Administración de Servidores</h3>
              <p>Windows Server, Active Directory, Exchange, SQL Server, backups, monitoreo</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-network-chart" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Soporte de Redes</h3>
              <p>Switches, routers, firewall, WiFi, cableado, diagnóstico de conectividad</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-shield-quarter" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Seguridad IT</h3>
              <p>Antivirus empresarial, firewall, políticas de seguridad, respaldo de datos</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-phone-call" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Mesa de Ayuda (Help Desk)</h3>
              <p>Soporte remoto, resolución de incidencias, atención telefónica, ticketing</p>
            </div>
          </div>
        </div>

        {/* Caso de Éxito */}
        <div className="row" style={{ marginTop: '60px', background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)', padding: '50px 30px', borderRadius: '15px', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', marginLeft: '0', marginRight: '0' }}>
          <div className="col-lg-12 text-center">
            <i className="bx bx-award" style={{ fontSize: '60px', marginBottom: '20px', color: '#ff9900' }}></i>
            <h3 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '28px', fontWeight: '700', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Cliente Destacado: Grupo Farmacéutico</h3>
            <p style={{ fontSize: '18px', marginBottom: '0', maxWidth: '800px', margin: '0 auto', color: '#ffffff', lineHeight: '1.6' }}>
              Póliza empresarial para <strong style={{ color: '#ff9900', fontSize: '22px' }}>45 equipos y 3 servidores</strong> - Reducción de <strong style={{ color: '#ff9900', fontSize: '22px' }}>85% en tiempo de inactividad</strong> y ahorro del 40% en costos operativos IT
            </p>
          </div>
        </div>

        {/* Tecnologías Soportadas */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Tecnologías que Soportamos</h3>
              <p>Experiencia certificada en las principales plataformas</p>
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
            <a href="https://www.dell.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <h6 style={{ marginBottom: '0', fontSize: '18px', fontWeight: '700', color: '#007DB8' }}>DELL</h6>
              </div>
            </a>
          </div>

          <div className="col-lg-2 col-md-4 col-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.hp.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <h6 style={{ marginBottom: '0', fontSize: '18px', fontWeight: '700', color: '#0096D6' }}>HP</h6>
              </div>
            </a>
          </div>

          <div className="col-lg-2 col-md-4 col-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.lenovo.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <h6 style={{ marginBottom: '0', fontSize: '18px', fontWeight: '700', color: '#E2231A' }}>Lenovo</h6>
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
        </div>

        {/* Beneficios */}
        <div className="row" style={{ marginTop: '60px', background: '#f8f9fa', padding: '50px 0', marginLeft: '-15px', marginRight: '-15px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Beneficios de Nuestras Pólizas de Soporte</h3>
              <div className="bar"></div>
              <p>Maximiza el rendimiento de tu infraestructura IT</p>
            </div>
          </div>
        </div>

        <div className="row" style={{ background: '#f8f9fa', paddingBottom: '50px', marginLeft: '-15px', marginRight: '-15px' }}>
          <div className="col-lg-6 col-md-6" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-trending-down" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Reducción de costos operativos</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Elimina bomberazos de emergencia. Ahorra 30-40% vs. soporte reactivo</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-time-five" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>SLAs de respuesta garantizados</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Respuesta 4-24hrs según plan. Resolución documentada y medible</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-line-chart" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Mayor disponibilidad de sistemas</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Mantenimiento preventivo reduce fallas hasta 85%. Uptime garantizado</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-shield-alt-2" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Técnicos certificados y especializados</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Microsoft/Cisco/CompTIA. 27+ años de experiencia empresarial</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-book-content" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Documentación completa de servicios</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Reportes mensuales, inventario actualizado, historial de incidencias</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-sync" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Planes escalables y flexibles</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Crece con tu empresa. Ajusta equipos y servicios según necesites</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-lg-12">
            <div style={{ background: 'linear-gradient(135deg, #ff9900 0%, #ff8c00 100%)', padding: '50px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 10px 40px rgba(255,153,0,0.3)' }}>
              <h3 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '32px', fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                ¿Necesitas Soporte IT Profesional para tu Empresa?
              </h3>
              <p style={{ fontSize: '18px', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px', color: '#ffffff', lineHeight: '1.6', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                Solicita una <strong style={{ backgroundColor: 'rgba(255,255,255,0.25)', padding: '2px 8px', borderRadius: '4px' }}>evaluación gratuita</strong> y recibe una propuesta personalizada con el plan ideal para tu negocio
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/529993882606?text=Hola%2C%20necesito%20cotizar%20una%20p%C3%B3liza%20de%20soporte%20t%C3%A9cnico"
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
                  Solicitar Evaluación Gratis
                </Link>
              </div>
              <p style={{ marginTop: '25px', fontSize: '15px', color: '#ffffff', fontWeight: '500', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                <i className="bx bx-certification"></i> Técnicos Certificados • <i className="bx bx-time"></i> Respuesta 4-24hrs • <i className="bx bx-award"></i> Desde 1997
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSoporte;
