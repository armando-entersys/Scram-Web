import React from "react"
import Image from "next/image"

import repairBannerImg from "/public/images/scram/banner/mvp.webp"
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
                <h1>Software Factory, IA, MVP, Desarrollo de Dashboard Personalizado</h1>
                <p>
                <strong> Soluciones exclusivas para empresas desde 1997: </strong> Nos Especializamos en la Creación de Dashboards, MVP, Prototipos, Cloud, Arquitectura de Software a escala mundial, Soluciones con Inteligencia Artificial, Desarrollo de Apps y Plataformas Web para satisfacer las demandas de las empresas en todo el mundo, pero principalmente en México y Estados Unidos.
                    
                </p>

                <ButtonWhatsapp 
                  className="btn btn-primary" 
                  p="w" nu="529993882606" 
                  href="?click=whatsappMvpDashboard"
                  send_to="AW-949839800/naAlCNP8xN4ZELjP9cQD"
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
                  width={439}
                  height={377}
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
