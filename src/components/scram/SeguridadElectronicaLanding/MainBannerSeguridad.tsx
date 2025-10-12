import React from "react";
import Image from "next/image";
import repairBannerImg from "/public/images/scram/servicios/cctv.webp";
import ButtonWhatsapp from "../Layout/ButtonWhatsapp";

const MainBannerSeguridad = () => {
  return (
    <>
      <div className="container main-banner-landing">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="repair-banner-content">
              <h1>Soluciones de Seguridad Electrónica con Inteligencia Artificial</h1>
              <p>
                <strong>(Desde 1997) Implementamos sistemas de videovigilancia inteligente</strong> con monitoreo en tiempo real, integración de IA, controles de acceso vehiculares y peatonales, biométricos y control de asistencia.<br /><br />

                Nuestras cámaras de alta definición resistentes a condiciones climáticas y con visión nocturna proporcionan vigilancia clara y confiable 24/7.<br /><br />

                <strong>Cliente destacado:</strong> Hertz México
              </p>

              <ButtonWhatsapp
                className="btn btn-primary"
                p="w"
                nu="529993882606"
                href="?click=whatsappSeguridad"
                send_to="AW-949839800/7gfDCL-uvt4ZELjP9cQD"
              >
                Contacto por Whatsapp <i className='bx bxl-whatsapp bx-tada'></i>
              </ButtonWhatsapp>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="repair-banner-image">
              <Image
                src={repairBannerImg}
                alt="Seguridad Electrónica con IA"
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

export default MainBannerSeguridad;
