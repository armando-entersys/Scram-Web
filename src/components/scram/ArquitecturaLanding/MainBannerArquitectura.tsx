import React from "react";
import Image from "next/image";
import arquitecturaBannerImg from "/public/images/scram/servicios/arquitectura-de-software.webp";
import ButtonWhatsapp from "../Layout/ButtonWhatsapp";

const MainBannerArquitectura = () => {
  return (
    <>
      <div className="container main-banner-landing">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="repair-banner-content">
              <h1>Arquitectura de Software, Apps y Plataformas Web de Clase Mundial</h1>
              <p>
                <strong>(Desde 1997) Desarrollamos aplicaciones empresariales escalables y seguras</strong> con tecnología de última generación adaptadas a las necesidades de tu organización.<br /><br />

                Trabajamos con las mejores tecnologías: <strong>React, Next.js, Node.js, Python, AWS, Azure, Docker, Kubernetes</strong> y más.<br /><br />

                <strong>Clientes destacados:</strong> FEMSA, Grupo Modelo, Chedraui
              </p>

              <ButtonWhatsapp
                className="btn btn-primary"
                p="w"
                nu="529993882606"
                href="?click=whatsappArquitectura"
                send_to="AW-949839800/7gfDCL-uvt4ZELjP9cQD"
              >
                Contacto por Whatsapp <i className='bx bxl-whatsapp bx-tada'></i>
              </ButtonWhatsapp>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="repair-banner-image">
              <Image
                src={arquitecturaBannerImg}
                alt="Arquitectura de Software Empresarial"
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

export default MainBannerArquitectura;
