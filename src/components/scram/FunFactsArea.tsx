"use client";
import React, { useState, useEffect } from'react';
import { Waypoint } from 'react-waypoint';
import Link from "next/link";
import Image from "next/image";

import map from "/public/images/scram/map.webp";

const FunFactsArea = () => {

  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [plus, setPlus] = useState(0);
  const [waypointTriggered, setWaypointTriggered] = useState(false);

  useEffect(() => {
    if (waypointTriggered) {
      console.log('Waypoint');
      
      // Acción 
      const intervalId = setInterval(() => {
        if (years < 25) {
          setYears(years + 1);
        }
        if (clients < 100) {
          setClients(clients + 2);
        }
        if (plus < 40) {
          setPlus(plus + 1);
        }
        if (projects < 500) {
          setProjects(projects + 5);
        }
      }, 50); // ajuste de intervalo 
  
  
      return () => {clearInterval(intervalId)};
    }
  }, [waypointTriggered, years, clients, projects, plus]);

  const handleEnter = () => {
    setWaypointTriggered(true);
  };


  return (
    <>
    <Waypoint onEnter={handleEnter}>
      <div className="funfacts-area ptb-80">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>27+ Años de Experiencia en Soluciones IT Empresariales</h2>
            <div className="bar"></div>
            <p>
            Partners certificados en tecnología empresarial. Entendemos las necesidades específicas de cada organización y desarrollamos soluciones personalizadas con las mejores prácticas de la industria.
            </p>
          </div>

          <div className="row">
            <div
              className="col-lg-3 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="funfact">
                <h3>{years}+</h3>
                <p>Años de Experiencia</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="funfact">
                <h3>{clients}+</h3>
                <p>Clientes Satisfechos</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="funfact">
                <h3>{projects}+</h3>
                <p>Proyectos Completados</p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-3 col-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="funfact">
                <h3>{plus}+</h3>
                <p>Colaboradores</p>
              </div>
            </div>
          </div>

          <div className="map-bg">
            <Image src={map} alt="map" width={910} height={443} />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="500"
            data-aos-once="true"
            style={{
              marginTop: '60px',
              textAlign: 'center',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
              padding: '40px 30px',
              border: '1px dashed #ebebeb',
              borderRadius: '5px'
            }}
          >
            <h3 style={{ fontSize: '24px', marginBottom: '15px', fontWeight: '700' }}>
              ¿Necesitas Transformar tu Infraestructura IT?
            </h3>
            <p style={{ marginBottom: '25px', fontSize: '16px', color: '#666' }}>
              Solicita una consultoría técnica gratuita con nuestros expertos certificados
            </p>

            <Link href="/contact" className="btn btn-primary">
              Agendar Consultoría Gratis
            </Link>
          </div>
        </div>
      </div>
      </Waypoint>
    </>
  );
};

export default FunFactsArea;
