"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const FeaturesIndustrial = () => {
  return (
    <section className="ml-services-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Equipamiento y Hardware Industrial de Clase Mundial</h2>
          <div className="bar"></div>
          <p>+15,000 piezas en stock para mantener tu operación funcionando sin interrupciones</p>
        </div>

        {/* Categorías Principales */}
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-chip" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Componentes de Automatización</h3>
              <p>PLCs, Sensores, Actuadores, Variadores de Frecuencia, Servomotores, Relés de Control, Contactores y Módulos I/O</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-cog" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Repuestos Industriales</h3>
              <p>Kits de empaques, sellos, juntas, válvulas, rodamientos, correas, cadenas, acoplamientos y componentes mecánicos</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-bolt" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Sistemas Eléctricos</h3>
              <p>Fuentes de poder, transformadores, variadores, disyuntores, arrancadores, cables industriales y protecciones eléctricas</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-bot" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Robótica Industrial</h3>
              <p>Brazos robóticos, controladores, sistemas de visión artificial, grippers, servos y equipos de automatización robótica</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-desktop" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Hardware IT Empresarial</h3>
              <p>Servidores, workstations, laptops, desktops, refacciones HP, Dell, Lenovo, monitores, periféricos y accesorios</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-wind" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Sistemas de Enfriamiento</h3>
              <p>Ventiladores industriales, extractores, compresores, condensadores, intercambiadores de calor y sistemas HVAC</p>
            </div>
          </div>
        </div>

        {/* Infraestructura de Red */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Infraestructura de Red y Conectividad</h3>
              <div className="bar"></div>
              <p>Soluciones completas para centros de datos y redes empresariales</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '200px' }}>
              <i className="bx bx-network-chart" style={{ fontSize: '50px', color: '#ff9900', marginBottom: '15px' }}></i>
              <h5 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>Equipos de Red</h5>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '0' }}>Switches, routers, firewalls, access points, balanceadores de carga</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '200px' }}>
              <i className="bx bx-cabinet" style={{ fontSize: '50px', color: '#ff9900', marginBottom: '15px' }}></i>
              <h5 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>Racks y Gabinetes</h5>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '0' }}>Racks 19", gabinetes cerrados, bandejas, organizadores de cable</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '200px' }}>
              <i className="bx bx-cable-car" style={{ fontSize: '50px', color: '#ff9900', marginBottom: '15px' }}></i>
              <h5 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>Cableado Estructurado</h5>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '0' }}>Cables Cat6/Cat6A, fibra óptica, patch panels, jacks RJ45</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '200px' }}>
              <i className="bx bx-plug" style={{ fontSize: '50px', color: '#ff9900', marginBottom: '15px' }}></i>
              <h5 style={{ marginBottom: '15px', fontSize: '18px', fontWeight: '700' }}>Protección Eléctrica</h5>
              <p style={{ fontSize: '14px', color: '#666', marginBottom: '0' }}>UPS, PDUs, reguladores, supresores de picos, baterías de respaldo</p>
            </div>
          </div>
        </div>

        {/* Caso de Éxito */}
        <div className="row" style={{ marginTop: '60px', background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)', padding: '50px 30px', borderRadius: '15px', boxShadow: '0 10px 40px rgba(0,0,0,0.15)', marginLeft: '0', marginRight: '0' }}>
          <div className="col-lg-12 text-center">
            <i className="bx bx-building-house" style={{ fontSize: '60px', marginBottom: '20px', color: '#ff9900' }}></i>
            <h3 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '28px', fontWeight: '700', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Clientes Destacados: Industria Farmacéutica y Manufactura</h3>
            <p style={{ fontSize: '18px', marginBottom: '0', maxWidth: '800px', margin: '0 auto', color: '#ffffff', lineHeight: '1.6' }}>
              Suministramos más de <strong style={{ color: '#ff9900', fontSize: '22px' }}>15,000 piezas</strong> anuales a plantas de manufactura reduciendo tiempos de paro en <strong style={{ color: '#ff9900', fontSize: '22px' }}>60%</strong> con entregas en 24-48 horas
            </p>
          </div>
        </div>

        {/* Marcas Principales */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Marcas de Equipamiento Industrial</h3>
              <p>Partners certificados con stock permanente</p>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '30px' }}>
          <div className="col-lg-2 col-md-4 col-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.grainger.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <img src="/images/scram/partners/grainger.svg" alt="Grainger" width="136" height="32" />
              </div>
            </a>
          </div>

          <div className="col-lg-2 col-md-4 col-6" style={{ marginBottom: '30px' }}>
            <a href="https://new.abb.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <Image src="/images/scram/partners/abb.webp" alt="ABB" width={120} height={43} />
              </div>
            </a>
          </div>

          <div className="col-lg-2 col-md-4 col-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.siemens.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <Image src="/images/scram/partners/siemens.webp" alt="Siemens" width={120} height={43} />
              </div>
            </a>
          </div>

          <div className="col-lg-2 col-md-4 col-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.bosch.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <Image src="/images/scram/partners/boch.webp" alt="Bosch" width={120} height={43} />
              </div>
            </a>
          </div>

          <div className="col-lg-2 col-md-4 col-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.se.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <Image src="/images/scram/partners/schneider.webp" alt="Schneider Electric" width={120} height={43} />
              </div>
            </a>
          </div>

          <div className="col-lg-2 col-md-4 col-6" style={{ marginBottom: '30px' }}>
            <a href="https://www.honeywell.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div style={{ background: '#f8f9fa', padding: '20px', borderRadius: '10px', textAlign: 'center', minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                <Image src="/images/scram/partners/honeywell.webp" alt="Honeywell" width={120} height={43} />
              </div>
            </a>
          </div>
        </div>

        {/* Beneficios */}
        <div className="row" style={{ marginTop: '60px', background: '#f8f9fa', padding: '50px 0', marginLeft: '-15px', marginRight: '-15px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Ventajas de Trabajar con SCRAM</h3>
              <div className="bar"></div>
              <p>Garantizamos tu operación continua con nuestro servicio especializado</p>
            </div>
          </div>
        </div>

        <div className="row" style={{ background: '#f8f9fa', paddingBottom: '50px', marginLeft: '-15px', marginRight: '-15px' }}>
          <div className="col-lg-6 col-md-6" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-package" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Stock permanente +15,000 piezas</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Disponibilidad inmediata de componentes críticos para evitar paros de producción</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-time-five" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Entrega en 24-48 horas</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Logística optimizada para entregas urgentes en toda la República Mexicana</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-certification" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Piezas 100% originales certificadas</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Garantía de fábrica en todos nuestros productos, sin imitaciones</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-wrench" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Soporte técnico especializado</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Ingenieros con experiencia para asesoría en selección e instalación de componentes</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-dollar-circle" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Precios corporativos competitivos</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Descuentos por volumen y contratos anuales de suministro</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '25px' }}>
              <div style={{ minWidth: '50px', height: '50px', background: '#ff9900', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                <i className="bx bx-search-alt" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <div>
                <h4 style={{ marginBottom: '10px', fontSize: '18px' }}>Búsqueda de piezas descontinuadas</h4>
                <p style={{ color: '#666', marginBottom: '0', fontSize: '14px' }}>Red global de proveedores para localizar componentes obsoletos o difíciles de encontrar</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-lg-12">
            <div style={{ background: 'linear-gradient(135deg, #ff9900 0%, #ff8c00 100%)', padding: '50px', borderRadius: '15px', textAlign: 'center', boxShadow: '0 10px 40px rgba(255,153,0,0.3)' }}>
              <h3 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '32px', fontWeight: 'bold', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                ¿Necesitas una Pieza o Equipo Industrial?
              </h3>
              <p style={{ fontSize: '18px', marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px', color: '#ffffff', lineHeight: '1.6', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                Envíanos el <strong style={{ backgroundColor: 'rgba(255,255,255,0.25)', padding: '2px 8px', borderRadius: '4px' }}>número de parte</strong> y te cotizamos en minutos. Disponibilidad, precio y tiempo de entrega
              </p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/529993882606?text=Hola%2C%20necesito%20cotizar%20piezas%20industriales"
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
                  Enviar Listado de Piezas
                </Link>
              </div>
              <p style={{ marginTop: '25px', fontSize: '15px', color: '#ffffff', fontWeight: '500', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                <i className="bx bx-check-circle"></i> Stock permanente • <i className="bx bx-package"></i> Entrega 24-48 hrs • <i className="bx bx-award"></i> Desde 1997
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesIndustrial;
