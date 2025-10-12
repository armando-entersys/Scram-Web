import React from "react";
import Image from "next/image";
import licenciamientoImg from "/public/images/scram/servicios/licenciamiento.webp";
import ButtonWhatsapp from "../Layout/ButtonWhatsapp";

const MainBannerLicenciamiento = () => {
  return (
    <>
      <div className="container main-banner-landing">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="repair-banner-content">
              <h1>Licenciamiento de Software y Seguridad Cibernética Empresarial</h1>
              <p>
                <strong>(Desde 1997) Partners certificados de las marcas líderes:</strong> Microsoft, Oracle, IBM, Cisco, VMware, Fortinet, Red Hat, Autodesk, Adobe y más.<br /><br />

                <strong>Servicios incluidos:</strong> Gestión completa de inventario, instalación, configuración, renovaciones automáticas y seguridad cibernética avanzada.<br /><br />

                <strong>Clientes destacados:</strong> FEMSA, Grupo Modelo, Chedraui - Gestión de más de 5,000 licencias empresariales
              </p>

              <ButtonWhatsapp
                className="btn btn-primary"
                p="w"
                nu="529993882606"
                href="?click=whatsappLicenciamiento"
                send_to="AW-949839800/7gfDCL-uvt4ZELjP9cQD"
              >
                Contacto por Whatsapp <i className='bx bxl-whatsapp bx-tada'></i>
              </ButtonWhatsapp>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="repair-banner-image">
              <Image
                src={licenciamientoImg}
                alt="Licenciamiento de Software Empresarial"
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

export default MainBannerLicenciamiento;
