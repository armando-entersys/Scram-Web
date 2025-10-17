"use client";

import React, { useState } from "react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  showVisual?: boolean;
  title?: string;
  description?: string;
}

const FAQSchema: React.FC<FAQSchemaProps> = ({
  faqs,
  showVisual = true,
  title = "Preguntas Frecuentes",
  description
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Generate Schema.org FAQPage structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Schema.org JSON-LD for AI crawlers and search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      {/* Visual FAQ section for users */}
      {showVisual && (
        <section className="faq-section ptb-80" style={{ background: '#ffffff' }}>
          <div className="container">
            <div className="section-title">
              <h2>{title}</h2>
              {description && (
                <p className="lead-text" style={{ color: '#666', fontSize: '16px' }}>{description}</p>
              )}
              <div className="bar"></div>
            </div>

            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="faq-accordion">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="faq-item"
                      style={{
                        background: '#ffffff',
                        marginBottom: '15px',
                        borderRadius: '12px',
                        border: openIndex === index ? '2px solid #ff9900' : '2px solid #e5e7eb',
                        boxShadow: openIndex === index ? '0 5px 20px rgba(255,153,0,0.15)' : '0 2px 8px rgba(0,0,0,0.06)',
                        transition: 'all 0.3s ease',
                        overflow: 'hidden'
                      }}
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        style={{
                          width: '100%',
                          padding: '20px 30px',
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '15px',
                          textAlign: 'left',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flex: 1 }}>
                          <i
                            className="bx bx-help-circle"
                            style={{
                              fontSize: '28px',
                              color: openIndex === index ? '#ff9900' : '#94a3b8',
                              flexShrink: 0,
                              transition: 'all 0.3s ease'
                            }}
                          ></i>
                          <h3
                            style={{
                              fontSize: '18px',
                              fontWeight: '700',
                              margin: '0',
                              color: openIndex === index ? '#ff9900' : '#1e293b',
                              transition: 'all 0.3s ease'
                            }}
                          >
                            {faq.question}
                          </h3>
                        </div>
                        <i
                          className={`bx ${openIndex === index ? 'bx-minus' : 'bx-plus'}`}
                          style={{
                            fontSize: '24px',
                            color: openIndex === index ? '#ff9900' : '#94a3b8',
                            flexShrink: 0,
                            transition: 'transform 0.3s ease, color 0.3s ease',
                            transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                          }}
                        ></i>
                      </button>

                      <div
                        style={{
                          maxHeight: openIndex === index ? '1000px' : '0',
                          overflow: 'hidden',
                          transition: 'max-height 0.4s ease-in-out',
                        }}
                      >
                        <div
                          style={{
                            padding: '0 30px 20px 73px',
                            fontSize: '15px',
                            lineHeight: '1.8',
                            color: '#475569',
                            whiteSpace: 'pre-line'
                          }}
                        >
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA at the end of FAQ */}
            <div className="row" style={{ marginTop: '60px' }}>
              <div className="col-lg-12 text-center">
                <div
                  style={{
                    background: 'linear-gradient(135deg, #ff9900 0%, #ff8c00 100%)',
                    padding: '50px 40px',
                    borderRadius: '20px',
                    boxShadow: '0 10px 40px rgba(255,153,0,0.25)'
                  }}
                >
                  <h3 style={{ color: '#ffffff', marginBottom: '15px', fontSize: '32px', fontWeight: '700', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                    Listo para proteger tu empresa?
                  </h3>
                  <p style={{ fontSize: '18px', marginBottom: '35px', color: '#ffffff', fontWeight: '500', textShadow: '0 1px 2px rgba(0,0,0,0.15)', maxWidth: '700px', margin: '0 auto 35px' }}>
                    Obten tu diagnostico GRATUITO y cotizacion personalizada en menos de 24 horas
                  </p>
                  <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                      href="https://wa.me/529993882606?text=Hola%2C%20quiero%20un%20diagnostico%20gratuito%20de%20seguridad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-light btn-lg"
                      style={{
                        padding: '18px 40px',
                        fontSize: '18px',
                        fontWeight: '700',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        backgroundColor: '#25D366',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 6px 20px rgba(37,211,102,0.35)',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 12px 35px rgba(37,211,102,0.5)';
                        e.currentTarget.style.backgroundColor = '#20c258';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.35)';
                        e.currentTarget.style.backgroundColor = '#25D366';
                      }}
                    >
                      <i className="bx bxl-whatsapp bx-tada" style={{ fontSize: '26px' }}></i>
                      Solicitar Diagnostico GRATIS
                    </a>
                    <a
                      href="tel:+525511130259"
                      className="btn btn-lg"
                      style={{
                        padding: '18px 40px',
                        fontSize: '18px',
                        fontWeight: '700',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        backgroundColor: '#ffffff',
                        color: '#ff9900',
                        border: '3px solid #ffffff',
                        borderRadius: '12px',
                        boxShadow: '0 6px 20px rgba(255,255,255,0.25)',
                        transition: 'all 0.3s ease',
                        textDecoration: 'none'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 12px 35px rgba(255,255,255,0.45)';
                        e.currentTarget.style.backgroundColor = '#fef3e7';
                        e.currentTarget.style.borderColor = '#fef3e7';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,255,255,0.25)';
                        e.currentTarget.style.backgroundColor = '#ffffff';
                        e.currentTarget.style.borderColor = '#ffffff';
                      }}
                    >
                      <i className="bx bx-phone-call bx-burst" style={{ fontSize: '26px' }}></i>
                      Llamar Ahora
                    </a>
                  </div>
                  <p style={{ marginTop: '30px', fontSize: '16px', color: '#ffffff', fontWeight: '600', textShadow: '0 1px 2px rgba(0,0,0,0.15)', marginBottom: '0' }}>
                    <i className="bx bx-time-five" style={{ fontSize: '20px', marginRight: '8px', verticalAlign: 'middle' }}></i>
                    Respuesta garantizada en menos de 2 horas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .faq-section {
            padding: 50px 0 !important;
          }

          .faq-section .section-title h2 {
            font-size: 28px !important;
          }

          .faq-section .lead-text {
            font-size: 14px !important;
          }

          /* FAQ items responsive */
          .faq-item button {
            padding: 15px 20px !important;
            gap: 12px !important;
          }

          .faq-item button > div {
            gap: 12px !important;
          }

          .faq-item button i.bx-help-circle {
            font-size: 22px !important;
          }

          .faq-item button h3 {
            font-size: 15px !important;
            line-height: 1.4 !important;
          }

          .faq-item button > i {
            font-size: 20px !important;
          }

          /* Respuestas responsive */
          .faq-item > div > div {
            padding: 0 20px 15px 54px !important;
            font-size: 14px !important;
            line-height: 1.7 !important;
          }

          /* CTA section mobile */
          .faq-section .row:last-child {
            margin-top: 40px !important;
          }

          .faq-section .row:last-child > div > div {
            padding: 35px 25px !important;
          }

          .faq-section .row:last-child h3 {
            font-size: 24px !important;
            margin-bottom: 12px !important;
          }

          .faq-section .row:last-child p:first-of-type {
            font-size: 15px !important;
            margin-bottom: 30px !important;
          }

          /* Botones full width */
          .faq-section .row:last-child > div > div > div {
            flex-direction: column !important;
            gap: 15px !important;
          }

          .faq-section .row:last-child a {
            width: 100% !important;
            padding: 15px 30px !important;
            font-size: 16px !important;
            justify-content: center !important;
          }

          .faq-section .row:last-child a i {
            font-size: 22px !important;
          }

          /* Texto final responsive */
          .faq-section .row:last-child p:last-child {
            font-size: 14px !important;
            margin-top: 25px !important;
          }

          .faq-section .row:last-child p:last-child i {
            font-size: 18px !important;
          }
        }
      `}</style>
    </>
  );
};

export default FAQSchema;
