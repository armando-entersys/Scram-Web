"use client";

import React from "react";
import Image from "next/image";

const FeaturesSeguridad = () => {
  return (
    <section className="ml-services-area ptb-80" id="servicios" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="section-title">
          <h2>Soluciones de Seguridad Electronica con IA</h2>
          <div className="bar"></div>
          <p>Proteccion integral 24/7 con tecnologia de ultima generacion</p>
        </div>

        {/* Servicios Principales con Iconos Visuales */}
        <div className="row">
          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-video-recording" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Videovigilancia Inteligente</h3>
              <p>Camaras 4K con vision nocturna avanzada, grabacion en la nube y local. Resistentes a condiciones climaticas extremas</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-brain" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Analisis con IA</h3>
              <p>Deteccion inteligente de movimientos sospechosos, conteo de personas, reconocimiento facial y alertas automaticas</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-fingerprint" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Control de Acceso Biometrico</h3>
              <p>Sistemas de huella digital, facial y tarjetas inteligentes. Control peatonal, vehicular y de asistencia integrado</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-time-five" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Monitoreo 24/7 en Tiempo Real</h3>
              <p>Supervisa todas tus instalaciones desde cualquier dispositivo con acceso remoto seguro y notificaciones instantaneas</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-network-chart" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Integracion Total de Sistemas</h3>
              <p>Conexion con alarmas anti-intrusion, detectores de incendio, controles de acceso y sensores IoT</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" style={{ marginBottom: '30px' }}>
            <div className="single-ml-services-box">
              <div className="image">
                <i className="bx bx-wrench" style={{ fontSize: '60px', color: '#ff9900' }}></i>
              </div>
              <h3>Mantenimiento Preventivo</h3>
              <p>Servicio tecnico especializado, actualizaciones de firmware y operacion optima garantizada</p>
            </div>
          </div>
        </div>

        {/* Marcas Partner con Logos */}
        <div className="row" style={{ marginTop: '60px' }}>
          <div className="col-lg-12">
            <div className="section-title">
              <h3>Marcas Lideres con las que Trabajamos</h3>
              <p>Partners tecnologicos certificados de clase mundial</p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center" style={{ marginTop: '30px' }}>
          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#ffffff', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
              <Image src="/images/scram/partners/hikvision.webp" alt="Hikvision" width={150} height={54} />
            </div>
          </div>

          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#ffffff', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
              <div>
                <h5 style={{ marginBottom: '0', fontSize: '24px', fontWeight: '700', color: '#0066cc' }}>DAHUA</h5>
                <p style={{ fontSize: '14px', color: '#666', marginTop: '5px', marginBottom: '0' }}>Technology</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#ffffff', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
              <div>
                <h5 style={{ marginBottom: '0', fontSize: '24px', fontWeight: '700', color: '#000000' }}>AXIS</h5>
                <p style={{ fontSize: '14px', color: '#666', marginTop: '5px', marginBottom: '0' }}>Communications</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" style={{ marginBottom: '30px' }}>
            <div style={{ background: '#ffffff', padding: '30px', borderRadius: '10px', textAlign: 'center', minHeight: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>
              <div>
                <h5 style={{ marginBottom: '0', fontSize: '24px', fontWeight: '700', color: '#e20025' }}>ZKTeco</h5>
                <p style={{ fontSize: '14px', color: '#666', marginTop: '5px', marginBottom: '0' }}>Security & Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSeguridad;
