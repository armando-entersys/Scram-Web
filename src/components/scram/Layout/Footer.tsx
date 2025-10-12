"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";

import logo from "/public/images/scram/logo.png";
import map from "/public/images/scram/map.png";
import whatsapp from "/public/images/scram/whatsapp.svg";

// Shape Images
import shape1 from "/public/images/scram/shape1.png";
import shape2 from "/public/images/scram/shape2.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const gtag_report_conversion_contact = (open: string) => {
    if (open === 'w') {
      open = "https://wa.me/529993882606";
    } else {
      open = "tel:+525511130259";
    }
    window.open(open);

    return false;
  };

  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/" >
                    <Image src={logo} alt="logo" width={110} height={36} />
                  </Link>
                </div>
                <p>
                  Queremos agradecer a nuestros clientes, partners y colaboradores por su confianza y apoyo durante más de 25 años. Su fe en nosotros nos ha permitido crecer y mejorar, y estamos orgullosos de haber podido ayudar a tantas empresas a alcanzar sus objetivos.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget ps-5">
                <h3>Nuestros Servicios</h3>

                <ul className="list">
                  <li>
                    <Link href="/arquitectura-software-apps-plataformas-web">
                      Arquitectura de Software
                    </Link>
                  </li>
                  <li>
                    <Link href="/soluciones-seguridad-electronica">
                      Seguridad Electrónica
                    </Link>
                  </li>
                  <li>
                    <Link href="/licenciamiento-seguridad-cibernetica">
                      Licenciamiento y Ciberseguridad
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <h3>&nbsp;</h3>

                <ul className="list">
                  <li>
                    <Link href="/equipamiento-hardware-soluciones-industriales">
                      Hardware Industrial
                    </Link>
                  </li>
                  <li>
                    <Link href="/infraestructura-soluciones-conectividad">
                      Infraestructura y Conectividad
                    </Link>
                  </li>
                  <li>
                    <Link href="/poliza-soporte-tecnico">
                      Póliza de Soporte Técnico
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <h3>Contacto</h3>

                <ul className="footer-contact-info">
                  <li>
                    <Icon.MapPin />
                    Pingüicas Lote 16, Manzana 138, Bosques de Morelos, Cuautitlan Izcalli, Edo. de México. C.P. 54760.
                  </li>

                  <li>
                    <Icon.Mail />
                    Email:{" "}
                    <a href="mailto:contacto@scram2k.com">contacto@scram2k.com</a>
                  </li>

                  <li>
                    <Icon.PhoneCall />
                    Tel: <a href="tel:+525511130259">+52 55 1113 0259</a>
                  </li>
                </ul>

                <ul className="social-links">
                  <li>
                    <a
                      href="https://www.facebook.com/scram2k"
                      className="facebook"
                      target="_blank"
                    >
                      <Icon.Facebook />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://x.com/scramnet"
                      className="twitter"
                      target="_blank"
                    >
                      <Icon.Twitter />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/scramnet/"
                      className="instagram"
                      target="_blank"
                    >
                      <Icon.Instagram />
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/company/scram2k/"
                      className="linkedin"
                      target="_blank"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                  Copyright &copy; {currentYear} Scram S.A de C.V. All rights reserved &nbsp; |   &nbsp;&nbsp;  
                  <Link href="/privacy">
                  Aviso de Privacidad
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image src={map} className="map" alt="map" width={910} height={443} />

        {/* Shape Images */}
        <div className="shape1">
          <Image src={shape1} alt="shape" width={202} height={202} />
        </div>

        <div className="shape8 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>

      <div>
      <a
        onClick={() => gtag_report_conversion_contact('w')}
        href="?click=whatsapp"
        className="whatsapp"
      >
        ¿Tienes alguna consulta?
        <Image src={whatsapp} alt="wh"/>
      </a>
    </div>
      </footer>
      <br /><br /><br /><br />
    </>
  );
};

export default Footer;
