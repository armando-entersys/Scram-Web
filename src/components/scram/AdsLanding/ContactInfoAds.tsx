"use client"

import React from "react"
import * as Icon from "react-feather"
import ButtonWhatsapp from "@/components/scram/Layout/ButtonWhatsapp"

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area">
        <div className="container">
          <div className="row justify-content-center">


            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.MapPin />
                </div>
                <h3>Oficinas / MX</h3>
                <p>
                Paseo de la Reforma 342, Piso 26 Col. Juarez, CDXM 06600, Mexico.
                </p>
                 
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="contact-info-box">
                <div className="icon">
                  <Icon.MapPin />
                </div>
                <h3>Cedis / MX</h3>
                <p>
                Pingüicas Lote 16, Manzana 138, Bosques de Morelos, Cuautitlan Izcalli, Edo. de México. C.P. 54760.
                </p>
               
              </div>

             
            </div>



            <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="contact-info-box">
                <div className="icon">
                  <Icon.MapPin />
                </div>
                <h3>Texas Office / US</h3>
                <p>
                1727 E Tyler Ave, Harlingen, Texas 78550 United States.
                </p>
                
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="contact-info-box">
                
                <p>
                Whatsapp: +529993882606
                <br /><br/>
                <ButtonWhatsapp 
                  className="btn btn-primary" 
                  p="w" nu="529993882606" 
                  href="?click=whatsappAds"
                  send_to="AW-949839800/73OWCNeAmNQZELjP9cQD"
                  >
                  Abrir Whatsapp <i className='bx bxl-whatsapp' ></i>
                </ButtonWhatsapp>
                <br /><br />
                <ButtonWhatsapp 
                  className="btn btn-primary" 
                  p="" nu="529993882606" 
                  href="?click=whatsappAdsCall"
                  send_to="AW-949839800/73OWCNeAmNQZELjP9cQD"
                  >
                Iniciar Llamada <i className='bx bx-phone-call'></i>
                </ButtonWhatsapp>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ContactInfo
