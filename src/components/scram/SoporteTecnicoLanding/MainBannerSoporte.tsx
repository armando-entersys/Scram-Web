import React from "react";
import Image from "next/image";
import repairBannerImg from "/public/images/scram/servicios/soporte2.webp";
import ButtonWhatsapp from "../Layout/ButtonWhatsapp";

const MainBannerSoporte = () => {
  return (
    <>
      <div className="container main-banner-landing">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="repair-banner-content">
              <h1>Póliza de Soporte Técnico IT Integral - Mantenimiento Empresarial</h1>
              <p>
                <strong>(Desde 1997) Mantenimiento preventivo y correctivo con garantía:</strong> Servidores, estaciones de trabajo, redes, infraestructura IT. Soporte remoto y en sitio.<br /><br />

                <strong>3 Planes certificados:</strong> Negocios (12 equipos), Pyme (25 equipos), Empresarial (60+ equipos)<br /><br />

                <strong>SLAs garantizados:</strong> Respuesta 4-24hrs, técnicos certificados Microsoft/Cisco/CompTIA, cobertura 8x5 o 24/7
              </p>

              <ButtonWhatsapp
                className="btn btn-primary"
                p="w"
                nu="529993882606"
                href="?click=whatsappSoporte"
                send_to="AW-949839800/7gfDCL-uvt4ZELjP9cQD"
              >
                Cotizar Póliza por WhatsApp <i className='bx bxl-whatsapp bx-tada'></i>
              </ButtonWhatsapp>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="repair-banner-image">
              <Image
                src={repairBannerImg}
                alt="Póliza de Soporte Técnico IT"
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

export default MainBannerSoporte;
