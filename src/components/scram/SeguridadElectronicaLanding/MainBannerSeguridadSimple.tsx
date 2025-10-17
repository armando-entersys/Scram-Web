import React from "react"
import Image from "next/image"

import bannerImg from "/public/images/scram/servicios/cctv.webp"
import repairShape1 from "/public/images/scram/banner/shape1.webp"
import repairShape2 from "/public/images/scram/banner/shape2.webp"
import shapeCircle from "/public/images/scram/banner/repair-shape-circle.webp"
import ButtonWhatsapp from "../Layout/ButtonWhatsapp"

const MainBannerSeguridadSimple = () => {
  return (
    <>
      <div className="container main-banner-landing">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="repair-banner-content">
              <h1>Soluciones de Seguridad Electrónica con IA</h1>
              <p>
                <strong>Protegemos tu empresa desde 1997: </strong>
                Videovigilancia inteligente 4K con IA, control de acceso biométrico,
                monitoreo 24/7, detección facial, control vehicular, sistemas anti-robo hormiga,
                sensores IoT integrados, respaldo en la nube, apps móviles iOS/Android y mucho más.
              </p>

              <ButtonWhatsapp
                className="btn btn-primary"
                p="w" nu="529993882606"
                href="?click=whatsappSeguridad"
                send_to="AW-949839800/73OWCNeAmNQZELjP9cQD"
              >
                Cotizar por Whatsapp <i className='bx bxl-whatsapp bx-tada' ></i>
              </ButtonWhatsapp>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="repair-banner-image">
              <Image
                src={bannerImg}
                alt="Seguridad Electrónica"
                width={460}
                height={395}
              />

              <Image
                src={repairShape1}
                className="animate__animated animate__zoomIn animate__delay-0.9s"
                alt="shape"
                width={496}
                height={473}
              />

              <Image
                src={repairShape2}
                className="animate__animated animate__fadeInLeft animate__delay-0.9s"
                alt="shape"
                width={533}
                height={531}
              />

              <Image
                src={shapeCircle}
                className="rotateme"
                alt="shape"
                width={494}
                height={446}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainBannerSeguridadSimple
