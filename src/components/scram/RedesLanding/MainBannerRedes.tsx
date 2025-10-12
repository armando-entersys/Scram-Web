import React from "react";
import Image from "next/image";
import conectividadImg from "/public/images/scram/servicios/conectividad.webp";
import ButtonWhatsapp from "../Layout/ButtonWhatsapp";

const MainBannerRedes = () => {
  return (
    <>
      <div className="container main-banner-landing">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="repair-banner-content">
              <h1>Infraestructura y Soluciones de Conectividad Empresarial</h1>
              <p>
                <strong>(Desde 1997) Especialistas certificados en:</strong> Cableado estructurado Cat6/Cat6A, fibra óptica monomodo/multimodo, centros de datos, redes LAN/WAN<br /><br />

                <strong>Partners tecnológicos:</strong> Cisco, Panduit, Belden, CommScope, Corning, APC<br /><br />

                <strong>Servicios:</strong> Diseño, implementación, certificación, mantenimiento y soporte 24/7
              </p>

              <ButtonWhatsapp
                className="btn btn-primary"
                p="w"
                nu="529993882606"
                href="?click=whatsappInfraestructura"
                send_to="AW-949839800/qkpuCOKksJ0ZELjP9cQD"
              >
                Cotizar por Whatsapp <i className='bx bxl-whatsapp bx-tada'></i>
              </ButtonWhatsapp>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="repair-banner-image">
              <Image
                src={conectividadImg}
                alt="Infraestructura y Conectividad Empresarial"
                width={460}
                height={395}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainBannerRedes;
