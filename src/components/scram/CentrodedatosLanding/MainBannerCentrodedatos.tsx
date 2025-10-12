import React from "react"
import Image from "next/image"

import repairBannerImg from "/public/images/scram/banner/refacciones-landing.webp"
import repairShape1 from "/public/images/scram/banner/shape1.webp"
import repairShape2 from "/public/images/scram/banner/shape2.webp"
import shapeCircle from "/public/images/scram/banner/repair-shape-circle.webp"
import ButtonWhatsapp from "../Layout/ButtonWhatsapp"

const MainBanner = () => {
  return (
    <>

        <div className="container main-banner-landing">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="repair-banner-content">
                <h1>Soluciones Integrales para Centros de Datos</h1>
                <p>
                <strong>Somos Proveedores desde 1997: </strong> Asistencia Técnica Experta,  Partes de servidores, fuentes de poder, sensores, energía, 
                enfriamiento, aire acondicionado, tuberías, codos, canaletas, 
                rejillas, racks, gabinetes, ventiladores, disco de almacenamiento HDD y SSD, 
                tarjetas madre, memorias, display, antenas, switch mucho más.        
                </p>

                <ButtonWhatsapp 
                  className="btn btn-primary" 
                  p="w" nu="529993882606" 
                  href="?click=whatsappCentrodedatos"
                  send_to="AW-949839800/giltCPOD0P8YELjP9cQD"
                  >
                Cotizar por Whatsapp <i className='bx bxl-whatsapp bx-tada' ></i>
                </ButtonWhatsapp>
                
              </div>
            </div>

            <div className="col-lg-6">
              <div className="repair-banner-image">
                <Image
                  src={repairBannerImg}
                  alt="image"
                  width={460}
                  height={395}
                />

                <Image
                  src={repairShape1}
                  className="animate__animated animate__zoomIn animate__delay-0.9s"
                  alt="image"
                  width={496}
                  height={473}
                />

                <Image
                  src={repairShape2}
                  className="animate__animated animate__fadeInLeft animate__delay-0.9s"
                  alt="image"
                  width={533}
                  height={531}
                />

                <Image
                  src={shapeCircle}
                  className="rotateme"
                  alt="image"
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

export default MainBanner
