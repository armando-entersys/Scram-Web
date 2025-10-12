import React from "react";
import Image from "next/image";
import industrialImg from "/public/images/scram/servicios/fabrica.webp";
import ButtonWhatsapp from "../Layout/ButtonWhatsapp";

const MainBannerIndustrial = () => {
  return (
    <>
      <div className="container main-banner-landing">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="repair-banner-content">
              <h1>Equipamiento, Hardware y Soluciones Industriales de Alta Calidad</h1>
              <p>
                <strong>(Desde 1997) Stock permanente de +15,000 piezas</strong> para equipos industriales, automatización y tecnología IT.<br /><br />

                <strong>Marcas líderes:</strong> Grainger, ABB, Siemens, Mitsubishi, Bosch, Schneider Electric, Honeywell, HP, Dell, Lenovo, Cisco, Eaton<br /><br />

                <strong>Sectores:</strong> Manufactura, Farmacéutica, Centros de Distribución, Automotriz, Alimentaria
              </p>

              <ButtonWhatsapp
                className="btn btn-primary"
                p="w"
                nu="529993882606"
                href="?click=whatsappHardwareIndustrial"
                send_to="AW-949839800/I9HjCIekidcZELjP9cQD"
              >
                Cotizar por Whatsapp <i className='bx bxl-whatsapp bx-tada'></i>
              </ButtonWhatsapp>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="repair-banner-image">
              <Image
                src={industrialImg}
                alt="Equipamiento y Hardware Industrial"
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

export default MainBannerIndustrial;
