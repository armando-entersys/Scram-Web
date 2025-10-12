import React from "react"
import Image from "next/image"

import repairBannerImg from "/public/images/scram/banner/junta3.webp"
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
                <h1>Marketing enfocado en Publicidad (ADS) para Empresas</h1>
                <p>
                <strong>(Desde 1997) Sistema efectivo de Adquisición de Clientes: </strong> 
                No solo gestionamos campañas publicitarias ADS, hemos creado un ecosistema de marketing digital diseñado para atraer muchos clientes al menor costo posible. <strong>El resultado:</strong> Una máquina imparable de generación de leads y ventas. 
                    
                </p>

                <ButtonWhatsapp 
                  className="btn btn-primary" 
                  p="w" nu="529993882606" 
                  href="?click=whatsappAds"
                  send_to="AW-949839800/73OWCNeAmNQZELjP9cQD"
                  >
                Contacto por Whatsapp <i className='bx bxl-whatsapp bx-tada' ></i>
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
