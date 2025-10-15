"use client";

import React from "react";
import { SITE_CONFIG } from "@/config/seo";

const ContactInfoSeguridad = () => {
  return (
    <>
      <section className="contact-info-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-map"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-map"></i>
                </div>
                <h3>Nuestras Oficinas</h3>
                <p>
                  <strong>CDMX:</strong><br />
                  {SITE_CONFIG.locations[0].address.street}<br />
                  {SITE_CONFIG.locations[0].address.city}
                </p>
                <p>
                  <strong>CEDIS Estado de Mexico:</strong><br />
                  {SITE_CONFIG.locations[1].address.street}<br />
                  {SITE_CONFIG.locations[1].address.city}, {SITE_CONFIG.locations[1].address.state}
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <h3>Contactanos</h3>
                <p>
                  <strong>Oficinas CDMX:</strong><br />
                  <a href={`tel:${SITE_CONFIG.contact.phone.mexico.replace(/\s/g, '')}`}>
                    {SITE_CONFIG.contact.phone.mexico}
                  </a>
                </p>
                <p>
                  <strong>CEDIS:</strong><br />
                  <a href={`tel:${SITE_CONFIG.contact.phone.mexicoAlt1.replace(/\s/g, '')}`}>
                    {SITE_CONFIG.contact.phone.mexicoAlt1}
                  </a>
                </p>
                <p>
                  <strong>WhatsApp:</strong><br />
                  <a
                    href={`https://wa.me/${SITE_CONFIG.contact.phone.whatsapp.replace(/\s/g, '')}?text=Hola,%20me%20interesa%20informacion%20sobre%20seguridad%20electronica`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {SITE_CONFIG.contact.phone.whatsapp}
                  </a>
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
              <div className="contact-info-box">
                <div className="back-icon">
                  <i className="bx bx-time-five"></i>
                </div>
                <div className="icon">
                  <i className="bx bx-time-five"></i>
                </div>
                <h3>Horario de Atencion</h3>
                <p>
                  <strong>Lunes a Viernes:</strong><br />
                  9:00 AM - 6:00 PM
                </p>
                <p>
                  <strong>Sabados:</strong><br />
                  9:00 AM - 2:00 PM
                </p>
                <p>
                  <strong>Domingos:</strong><br />
                  Cerrado
                </p>
                <p className="support-text">
                  <i className="bx bx-support"></i>
                  <strong>Soporte Tecnico 24/7</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Zonas de Servicio - UX Mejorado */}
          <div className="row" style={{ marginTop: '60px' }}>
            <div className="col-lg-12">
              <div className="service-areas-box-improved">
                {/* Patron de fondo */}
                <div className="pattern-overlay"></div>

                <div className="content-wrapper">
                  {/* Header */}
                  <div className="header-section">
                    <div className="coverage-badge">
                      <i className="bx bx-map"></i>
                      <span>COBERTURA REGIONAL</span>
                    </div>

                    <h3 className="main-title">
                      Areas de Servicio en Estado de Mexico
                    </h3>
                    <p className="subtitle">
                      Instalacion profesional y soporte tecnico local garantizado con tiempo de respuesta menor a 2 horas
                    </p>
                  </div>

                  {/* Grid de areas */}
                  <div className="areas-grid-improved">
                    {[
                      { name: 'Cuautitlan Izcalli', icon: 'bx-buildings' },
                      { name: 'Huehuetoca', icon: 'bx-home-circle' },
                      { name: 'Atizapan de Zaragoza', icon: 'bx-store' },
                      { name: 'Tepotzotlan', icon: 'bx-building-house' },
                      { name: 'Coyotepec', icon: 'bx-home-alt' },
                      { name: 'Bosque de Morelos', icon: 'bx-building' }
                    ].map((area, index) => (
                      <div key={index} className="area-card">
                        <div className="area-icon-box">
                          <i className={`bx ${area.icon}`}></i>
                        </div>
                        <div className="area-info">
                          <div className="area-name">{area.name}</div>
                          <div className="area-status">Servicio inmediato</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Banner adicional */}
                  <div className="additional-coverage">
                    <div className="coverage-content">
                      <i className="bx bx-info-circle"></i>
                      <p>Tambien brindamos servicio en toda la CDMX y area metropolitana</p>
                      <a
                        href="https://wa.me/529993882606?text=Hola%2C%20quiero%20saber%20si%20tienen%20cobertura%20en%20mi%20zona"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="consult-btn"
                      >
                        <i className="bx bxl-whatsapp"></i>
                        Consultar Cobertura
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-info-box {
          text-align: center;
          margin-bottom: 30px;
          background: #fff;
          padding: 40px 30px;
          border-radius: 10px;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .contact-info-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .contact-info-box .back-icon {
          position: absolute;
          right: -20px;
          bottom: -20px;
          font-size: 150px;
          color: #f4f6fc;
        }

        .contact-info-box .icon {
          width: 70px;
          height: 70px;
          line-height: 70px;
          background: linear-gradient(135deg, var(--main-color) 0%, #ff6b35 100%);
          color: #fff;
          font-size: 35px;
          margin: 0 auto 25px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .contact-info-box:hover .icon {
          transform: rotateY(180deg);
        }

        .contact-info-box h3 {
          font-size: 22px;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .contact-info-box p {
          margin-bottom: 15px;
          line-height: 1.8;
          color: #666;
        }

        .contact-info-box p strong {
          color: #333;
          display: block;
          margin-bottom: 5px;
        }

        .contact-info-box a {
          color: var(--main-color);
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .contact-info-box a:hover {
          color: #ff6b35;
          text-decoration: none;
        }

        .support-text {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #eee;
          color: var(--main-color) !important;
          font-weight: 600 !important;
        }

        .support-text i {
          font-size: 20px;
          margin-right: 8px;
          vertical-align: middle;
        }

        .service-areas-box {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 50px;
          border-radius: 15px;
          color: #fff;
          text-align: center;
        }

        .service-areas-box h3 {
          color: #fff;
          font-size: 28px;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .service-areas-box h3 i {
          margin-right: 10px;
          font-size: 32px;
        }

        .lead-text {
          font-size: 18px;
          margin-bottom: 40px;
          opacity: 0.95;
        }

        .areas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .area-item {
          background: rgba(255, 255, 255, 0.15);
          padding: 15px 20px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .area-item:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateX(5px);
        }

        .area-item i {
          font-size: 24px;
          color: #4ade80;
        }

        .coverage-note {
          font-size: 15px;
          opacity: 0.9;
          margin: 0;
        }

        .coverage-note i {
          margin-right: 8px;
          font-size: 18px;
        }

        /* Estilos mejorados para Areas de Servicio */
        .service-areas-box-improved {
          background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
          padding: 60px 50px;
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(30, 58, 138, 0.25);
        }

        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
          opacity: 0.5;
        }

        .content-wrapper {
          position: relative;
          z-index: 1;
        }

        .header-section {
          text-align: center;
          margin-bottom: 40px;
        }

        .coverage-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: rgba(251, 191, 36, 0.15);
          padding: 10px 25px;
          border-radius: 50px;
          margin-bottom: 20px;
          border: 1px solid rgba(251, 191, 36, 0.3);
        }

        .coverage-badge i {
          font-size: 24px;
          color: #fbbf24;
        }

        .coverage-badge span {
          color: #fbbf24;
          font-weight: 600;
          font-size: 14px;
        }

        .main-title {
          color: #ffffff;
          font-size: 32px;
          fontWeight: 700;
          margin-bottom: 15px;
        }

        .subtitle {
          color: rgba(255,255,255,0.8);
          font-size: 16px;
          max-width: 600px;
          margin: 0 auto;
        }

        .areas-grid-improved {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }

        .area-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 20px;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          gap: 15px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .area-card:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(5px);
          border-color: #fbbf24;
        }

        .area-icon-box {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .area-icon-box i {
          font-size: 26px;
          color: #1e3a8a;
        }

        .area-name {
          color: #ffffff;
          font-weight: 600;
          font-size: 16px;
        }

        .area-status {
          color: rgba(255,255,255,0.6);
          font-size: 13px;
        }

        .additional-coverage {
          background: rgba(251, 191, 36, 0.15);
          border: 2px solid rgba(251, 191, 36, 0.3);
          border-radius: 15px;
          padding: 25px 30px;
        }

        .coverage-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .coverage-content i {
          font-size: 28px;
          color: #fbbf24;
        }

        .coverage-content p {
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          margin: 0;
        }

        .consult-btn {
          background: #fbbf24;
          color: #1e3a8a;
          padding: 12px 30px;
          border-radius: 10px;
          font-weight: 700;
          fontSize: 15px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .consult-btn:hover {
          background: #f59e0b;
          transform: translateY(-2px);
          text-decoration: none;
        }

        .consult-btn i {
          font-size: 20px;
        }

        @media (max-width: 768px) {
          .service-areas-box {
            padding: 30px 20px;
          }

          .areas-grid {
            grid-template-columns: 1fr;
          }

          .service-areas-box h3 {
            font-size: 22px;
          }

          .service-areas-box-improved {
            padding: 40px 25px;
          }

          .main-title {
            font-size: 24px;
          }

          .areas-grid-improved {
            grid-template-columns: 1fr;
          }

          .coverage-content {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default ContactInfoSeguridad;
