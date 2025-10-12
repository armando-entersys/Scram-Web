import React from "react"
import Link from "next/link"
import Image from "next/image"

import repairBannerImg from "/public/images/scram/banner/junta2.webp"
import repairShape1 from "/public/images/scram/banner/shape1.webp"
import repairShape2 from "/public/images/scram/banner/shape2.webp"
import shapeCircle from "/public/images/scram/banner/repair-shape-circle.webp"

const MainBanner = () => {
  return (
    <>
      <div className="repair-main-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="repair-banner-content">
                <h1>Soluciones IT Integrales para Empresas - Transformación Digital Empresarial</h1>
                <p>
                <strong>(Desde 1997) Partners certificados en tecnología empresarial:</strong> Desarrollo de software, Apps móviles, Infraestructura de redes, Seguridad electrónica, Licenciamiento Microsoft/Oracle/Cisco, Soporte técnico IT<br /><br />

                <strong>Clientes destacados:</strong> FEMSA, Grupo Modelo, Chedraui, sector farmacéutico, manufactura, retail, distribución<br /><br />

                <strong>27+ años de experiencia certificada</strong> en transformación digital y modernización tecnológica empresarial
                </p>

                <Link
                  href="/contact"
                  className="btn btn-primary"

                >
                  Solicitar Consultoría Gratis
                </Link>
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
      </div>
    </>
  )
}

export default MainBanner
