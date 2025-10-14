"use client";

import React from "react";
import * as Icon from "react-feather";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area ptb-80">
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
                <a href="tel:+525511130259">+52 55 1113 0259</a> <a href="tel:+525511130936">+52 55 1113 0936</a> 
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
                <a href="tel:+525597571609">+52 55 9757 1609</a> <a href="tel:+525597571610">+52 55 9757 1610</a>
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
                <a href="tel:+19569573838">+1 956 957 3838</a>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>E-mail</h3>
                <p>
                  <a href="mailto:contacto@scram2k.com">contacto@scram2k.com</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
