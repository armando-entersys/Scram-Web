"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../../components/scram/Layout/Navbar";
import Footer from "../../components/scram/Layout/Footer";
import PageBanner from "../../components/scram/Common/PageBanner";
import i3 from "/public/images/scram/oficina/3.webp";
import i4 from "/public/images/scram/oficina/4.webp";
import i5 from "/public/images/scram/oficina/5.webp";
import i6 from "/public/images/scram/oficina/6.webp";
import i7 from "/public/images/scram/oficina/9.webp";
import i8 from "/public/images/scram/oficina/8.webp";

export default function Page() {
    

  return (
    <>
      <style jsx>{`
        .project-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.12) !important;
        }
      `}</style>
      <Navbar />

      <PageBanner pageTitle="Acerca de Scram Consulting" />
    <section className="ptb-80">
    <div className="container">

    {/* Intro */}
    <div className="row" style={{ marginBottom: '60px' }}>
        <div className="col-lg-12">
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto 40px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: '#ff9900' }}>
              27+ Años Impulsando la Transformación Digital Empresarial
            </h2>
            <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.8' }}>
              Desde 1997, somos el socio tecnológico confiable de empresas líderes en México. Partners certificados de Microsoft, Cisco, Oracle, Panduit, Fortinet y VMware, ofrecemos soluciones IT integrales que impulsan la innovación y el crecimiento empresarial.
            </p>
        </div>
        </div>
    </div>

    {/* Nuestra Historia */}
    <div className="row" style={{ marginBottom: '40px' }}>
        <div className="col-lg-12">
        <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '30px', color: '#333', borderBottom: '3px solid #ff9900', paddingBottom: '10px', display: 'inline-block' }}>
          Nuestra Trayectoria
        </h3>
        </div>
    </div>

    <div className="row" style={{ marginBottom: '60px' }}>
        <div className="col-lg-12">

  <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', marginBottom: '30px' }}>
    <h4 style={{ color: '#ff9900', fontSize: '20px', fontWeight: '700', marginBottom: '15px' }}>
      <i className="bx bx-calendar" style={{ marginRight: '10px' }}></i>1997 - Los Inicios
    </h4>
    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '0' }}>
      En septiembre de 1997, Scram Consulting nació con la visión de ofrecer servicios tecnológicos de clase mundial. Iniciamos con servicios de soporte técnico y mantenimiento IT para empresas del sector textil y manufactura en la Ciudad de México.
    </p>
  </div>

  <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', marginBottom: '30px' }}>
    <h4 style={{ color: '#ff9900', fontSize: '20px', fontWeight: '700', marginBottom: '15px' }}>
      <i className="bx bx-building" style={{ marginRight: '10px' }}></i>2000 - Formalización Empresarial
    </h4>
    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '0' }}>
      Constitución oficial de Scram S.A. de C.V. Expansión de servicios a empresas corporativas en Polanco y Tecamachalco. <strong>Grupo Modelo</strong> se convierte en nuestro primer gran cliente corporativo, marcando el inicio de una relación comercial estratégica de largo plazo.
    </p>
  </div>

  <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '10px', marginBottom: '30px' }}>
    <h4 style={{ color: '#ff9900', fontSize: '20px', fontWeight: '700', marginBottom: '15px' }}>
      <i className="bx bx-trending-up" style={{ marginRight: '10px' }}></i>2004-2010 - Crecimiento y Consolidación
    </h4>
    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '0' }}>
      Expansión del equipo a 10 profesionales certificados. Implementación de proyectos de infraestructura IT crítica para empresas farmacéuticas, editoriales y retail. En 2010, inauguración de nuevas oficinas corporativas, consolidando nuestra presencia en el mercado empresarial mexicano.
    </p>
  </div>

  <div style={{ background: 'linear-gradient(135deg, #ff9900 0%, #ff8c00 100%)', padding: '30px', borderRadius: '10px', marginBottom: '30px' }}>
    <h4 style={{ color: '#ffffff', fontSize: '20px', fontWeight: '700', marginBottom: '15px' }}>
      <i className="bx bx-trophy" style={{ marginRight: '10px' }}></i>2010-Presente - Liderazgo en Soluciones IT
    </h4>
    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#ffffff', marginBottom: '0' }}>
      Hoy somos un proveedor integral de soluciones tecnológicas empresariales con certificaciones oficiales de los principales fabricantes. Ofrecemos servicios completos: desarrollo de software, infraestructura de redes, seguridad electrónica, licenciamiento, soporte técnico IT y equipamiento industrial.
    </p>
  </div>

        </div>
    </div>
    {/* Proyectos Destacados */}
    <div className="row" style={{ marginBottom: '40px' }}>
        <div className="col-lg-12">
        <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '30px', color: '#333', borderBottom: '3px solid #ff9900', paddingBottom: '10px', display: 'inline-block' }}>
          Proyectos Destacados
        </h3>
        </div>
    </div>

    <div className="row" style={{ marginBottom: '60px' }}>
        <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
          <div className="project-card-hover" style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px', padding: '30px', minHeight: '280px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)', transition: 'all 0.3s ease' }}>
            <div style={{ marginBottom: '20px' }}>
              <i className="bx bx-building-house" style={{ fontSize: '50px', color: '#ff9900' }}></i>
            </div>
            <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#333' }}>
              Grupo Modelo
            </h4>
            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7', marginBottom: '0' }}>
              Equipamiento completo IT: servidores Dell/HP, estaciones de trabajo, infraestructura de red. Gestión de licenciamiento Microsoft y Oracle. Proyecto de múltiples años con soporte técnico continuo.
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
          <div className="project-card-hover" style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px', padding: '30px', minHeight: '280px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)', transition: 'all 0.3s ease' }}>
            <div style={{ marginBottom: '20px' }}>
              <i className="bx bx-network-chart" style={{ fontSize: '50px', color: '#ff9900' }}></i>
            </div>
            <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#333' }}>
              Empresa Farmacéutica
            </h4>
            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7', marginBottom: '0' }}>
              Red cableada estructurada de 350 nodos Cat6 certificada. Implementación en planta de producción en Arboledas. Centro de datos con climatización y respaldo eléctrico. Soporte técnico IT bajo póliza empresarial.
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
          <div className="project-card-hover" style={{ background: '#ffffff', border: '1px solid #e0e0e0', borderRadius: '10px', padding: '30px', minHeight: '280px', boxShadow: '0 5px 15px rgba(0,0,0,0.08)', transition: 'all 0.3s ease' }}>
            <div style={{ marginBottom: '20px' }}>
              <i className="bx bx-book-content" style={{ fontSize: '50px', color: '#ff9900' }}></i>
            </div>
            <h4 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '15px', color: '#333' }}>
              Editorial Clio
            </h4>
            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.7', marginBottom: '0' }}>
              Diseño e implementación completa de infraestructura IT para oficinas corporativas. Red LAN/WAN, servidores virtualizados VMware, sistema de respaldos, seguridad perimetral con firewall Fortinet.
            </p>
          </div>
        </div>
    </div>

    {/* Galería de Oficinas */}
    <div className="row" style={{ marginBottom: '40px' }}>
        <div className="col-lg-12">
        <h3 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '30px', color: '#333', borderBottom: '3px solid #ff9900', paddingBottom: '10px', display: 'inline-block' }}>
          Nuestras Instalaciones
        </h3>
        </div>
    </div>

    <div className="row" style={{ marginBottom: '30px' }}>
        <div className="col-lg-4 col-md-4 col-sm-6" style={{ marginBottom: '20px' }}>
        <Image
                  src={i3}
                  alt="Oficinas Scram Consulting"
                  width={640}
                  height={550}
                  style={{ borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6" style={{ marginBottom: '20px' }}>
        <Image
                  src={i4}
                  alt="Instalaciones Scram Consulting"
                  width={640}
                  height={550}
                  style={{ borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6" style={{ marginBottom: '20px' }}>
        <Image
                  src={i5}
                  alt="Equipo Scram Consulting"
                  width={640}
                  height={550}
                  style={{ borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                />
        </div>
    </div>

    <div className="row" style={{ marginBottom: '60px' }}>
        <div className="col-lg-4 col-md-4 col-sm-6" style={{ marginBottom: '20px' }}>
        <Image
                  src={i6}
                  alt="Proyectos Scram Consulting"
                  width={640}
                  height={550}
                  style={{ borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6" style={{ marginBottom: '20px' }}>
        <Image
                  src={i7}
                  alt="Servicios Scram Consulting"
                  width={640}
                  height={550}
                  style={{ borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                />
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6" style={{ marginBottom: '20px' }}>
        <Image
                  src={i8}
                  alt="Tecnología Scram Consulting"
                  width={640}
                  height={550}
                  style={{ borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
                />
        </div>
    </div>

    {/* Nuestro Compromiso */}
    <div className="row" style={{ marginBottom: '60px', background: 'linear-gradient(135deg, #ff9900 0%, #ff8c00 100%)', padding: '60px 40px', borderRadius: '15px', marginLeft: '0', marginRight: '0' }}>
        <div className="col-lg-12" style={{ marginBottom: '30px' }}>
        <h3 style={{ fontSize: '32px', fontWeight: '700', color: '#ffffff', textAlign: 'center', marginBottom: '50px', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
          Nuestro Compromiso con la Excelencia
        </h3>
        </div>

        <div className="col-lg-6" style={{ marginBottom: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '35px' }}>
            <div style={{ minWidth: '70px', height: '70px', background: 'rgba(255,255,255,0.2)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '25px', backdropFilter: 'blur(10px)' }}>
              <i className="bx bx-medal" style={{ fontSize: '35px', color: '#ffffff' }}></i>
            </div>
            <div>
              <h4 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px', color: '#ffffff' }}>
                Excelencia Técnica Certificada
              </h4>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.95)', lineHeight: '1.7', marginBottom: '0' }}>
                Entregamos soluciones IT que cumplen los más altos estándares de calidad. Partners certificados de Microsoft, Cisco, Oracle, Panduit, Fortinet y VMware.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '35px' }}>
            <div style={{ minWidth: '70px', height: '70px', background: 'rgba(255,255,255,0.2)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '25px', backdropFilter: 'blur(10px)' }}>
              <i className="bx bx-bulb" style={{ fontSize: '35px', color: '#ffffff' }}></i>
            </div>
            <div>
              <h4 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px', color: '#ffffff' }}>
                Innovación y Actualización Continua
              </h4>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.95)', lineHeight: '1.7', marginBottom: '0' }}>
                Nos mantenemos a la vanguardia con las últimas tendencias tecnológicas, certificaciones actualizadas y metodologías ágiles de implementación.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-6" style={{ marginBottom: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '35px' }}>
            <div style={{ minWidth: '70px', height: '70px', background: 'rgba(255,255,255,0.2)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '25px', backdropFilter: 'blur(10px)' }}>
              <i className="bx bx-group" style={{ fontSize: '35px', color: '#ffffff' }}></i>
            </div>
            <div>
              <h4 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px', color: '#ffffff' }}>
                Alianzas Estratégicas de Largo Plazo
              </h4>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.95)', lineHeight: '1.7', marginBottom: '0' }}>
                Construimos relaciones duraderas con nuestros clientes, siendo su socio confiable en cada etapa de su transformación digital.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '35px' }}>
            <div style={{ minWidth: '70px', height: '70px', background: 'rgba(255,255,255,0.2)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '25px', backdropFilter: 'blur(10px)' }}>
              <i className="bx bx-support" style={{ fontSize: '35px', color: '#ffffff' }}></i>
            </div>
            <div>
              <h4 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px', color: '#ffffff' }}>
                Soporte y Acompañamiento Permanente
              </h4>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.95)', lineHeight: '1.7', marginBottom: '0' }}>
                No solo implementamos tecnología, brindamos soporte técnico continuo, mantenimiento preventivo y mejora constante de sus sistemas.
              </p>
            </div>
          </div>
        </div>
    </div>
    


    </div>
    </section>

      <Footer />
    </>
  );
};