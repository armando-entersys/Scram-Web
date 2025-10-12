"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import arquitecturaDeSoftware from "/public/images/scram/servicios/arquitectura-de-software.webp";
import conectividad from "/public/images/scram/servicios/conectividad.webp";
import licenciamiento from "/public/images/scram/servicios/licenciamiento.webp";
import cctv from "/public/images/scram/servicios/cctv.webp";
import soporte2 from "/public/images/scram/servicios/soporte2.webp";
import fabrica from "/public/images/scram/servicios/fabrica.webp";

// Shape Images
import shape1 from "/public/images/scram/shape1.png";
import shape2 from "/public/images/scram/shape2.svg";
import shape3 from "/public/images/scram/shape3.svg";
import shape4 from "/public/images/scram/shape4.svg";

const ServicesStyle2 = () => {
  return (
    <>
      <div className="ml-services-area ptb-80">
        <div className="container">
          <div className="section-title" id="servicios">
            <h2>Servicios IT Empresariales Certificados - Soluciones Tecnológicas Integrales</h2>
            <div className="bar"></div>
            <p>Partners certificados de las marcas tecnológicas líderes: Microsoft, Cisco, Oracle, Panduit, Fortinet, VMware. 27+ años impulsando la transformación digital de empresas en México.</p>
          </div>

          <div className="row justify-content-center">
            {/* Servicio 1: Arquitectura de Software */}
            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
              <div className="single-ml-services-box">
                <Link href="/arquitectura-software-apps-plataformas-web">
                  <div className="image">
                    <Image
                      src={arquitecturaDeSoftware}
                      alt="Arquitectura de Software, Apps y Plataformas Web"
                    />
                  </div>
                  <h3>Arquitectura de Software, Apps y Plataformas Web</h3>
                  <p>
                    Desarrollo de software a medida: ERP, CRM, Apps móviles iOS/Android, plataformas web React/Angular. Arquitectura escalable, APIs REST, integración con sistemas legacy. Stack completo: Frontend, Backend, DevOps, Cloud AWS/Azure.
                  </p>
                </Link>
              </div>
            </div>

            {/* Servicio 2: Seguridad Electrónica */}
            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
              <div className="single-ml-services-box">
                <Link href="/soluciones-seguridad-electronica">
                  <div className="image">
                    <Image
                      src={cctv}
                      alt="Soluciones de Seguridad Electrónica"
                    />
                  </div>
                  <h3>Soluciones de Seguridad Electrónica</h3>
                  <p>
                    Videovigilancia IP 4K/8MP con IA: reconocimiento facial, placas, detección perimetral. CCTV Hikvision/Dahua/Axis. Control de acceso biométrico, torniquetes, barreras vehiculares. Alarmas, intrusión, incendio. Monitoreo remoto 24/7.
                  </p>
                </Link>
              </div>
            </div>

            {/* Servicio 3: Licenciamiento */}
            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
              <div className="single-ml-services-box">
                <Link href="/licenciamiento-seguridad-cibernetica">
                  <div className="image">
                    <Image
                      src={licenciamiento}
                      alt="Licenciamiento y Seguridad Cibernética"
                    />
                  </div>
                  <h3>Licenciamiento y Seguridad Cibernética</h3>
                  <p>
                    Gestión de licencias empresariales: Microsoft 365, Windows Server, Oracle, IBM, Cisco, VMware, Fortinet, Adobe. Firewall Fortinet/Palo Alto, antivirus empresarial, DLP, SIEM. Auditorías de cumplimiento, políticas de seguridad ISO 27001.
                  </p>
                </Link>
              </div>
            </div>

            {/* Servicio 4: Equipamiento Hardware */}
            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
              <div className="single-ml-services-box">
                <Link href="/equipamiento-hardware-soluciones-industriales">
                  <div className="image">
                    <Image
                      src={fabrica}
                      alt="Equipamiento, Hardware y Soluciones Industriales"
                    />
                  </div>
                  <h3>Equipamiento, Hardware y Soluciones Industriales</h3>
                  <p>
                    Stock +15,000 piezas IT e industriales: Servidores Dell/HP/Lenovo, equipos de cómputo, impresoras, UPS APC/Eaton, partes de automatización Siemens/ABB, componentes eléctricos. Entrega 24-48hrs. Atención a manufactura, farmacéutica, distribución.
                  </p>
                </Link>
              </div>
            </div>

            {/* Servicio 5: Infraestructura */}
            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
              <div className="single-ml-services-box">
                <Link href="/infraestructura-soluciones-conectividad">
                  <div className="image">
                    <Image
                      src={conectividad}
                      alt="Infraestructura y Soluciones de Conectividad"
                    />
                  </div>
                  <h3>Infraestructura y Soluciones de Conectividad</h3>
                  <p>
                    Cableado estructurado certificado Cat6/Cat6A, fibra óptica monomodo/multimodo. Centros de datos Tier II/III. Redes LAN/WAN Cisco, switches, routers, WiFi empresarial 6/6E. Certificación Fluke Networks. Garantía 25 años. 99.9% disponibilidad.
                  </p>
                </Link>
              </div>
            </div>

            {/* Servicio 6: Póliza de Soporte */}
            <div className="col-lg-4 col-sm-6" data-aos="fade-up">
              <div className="single-ml-services-box">
                <Link href="/poliza-soporte-tecnico">
                  <div className="image">
                    <Image
                      src={soporte2}
                      alt="Póliza de Soporte Técnico"
                    />
                  </div>
                  <h3>Póliza de Soporte Técnico</h3>
                  <p>
                    Mantenimiento IT preventivo y correctivo: Hardware, software, servidores, redes. 3 planes certificados: Negocios (12 equipos), Pyme (25 equipos), Empresarial (60+ equipos). SLAs 4-24hrs. Soporte remoto y en sitio. Técnicos Microsoft/Cisco/CompTIA.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <Image src={shape1} alt="shape" width={202} height={202} />
        </div>
        <div className="shape2 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape3">
          <Image src={shape3} alt="shape" width={28} height={28} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape7">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape8 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
      </div>
    </>
  );
};

export default ServicesStyle2;
