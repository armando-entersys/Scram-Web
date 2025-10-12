import React from "react"

const Features = () => {
  return (
    <>
      <div className="boxes-area-landing">
        <div className="container">
          <div className="row justify-content-center">



          <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box bg-f78acb">
                <div className="icon single-box-landing">
                <i className='bx bx-medal bx-tada'></i>
                </div>

                <h3>
                  <a>
                  Enfoque en el Impacto
                  </a>
                </h3>

                <p>
                 No tomamos todos los proyectos que se nos presentan, sino que lo evaluamos cuidadosamente. No estamos interesados en proyectos que no tengan un impacto significativo o que no se alineen con nuestros valores. Buscamos relaciones a largo plazo y ver el éxito de nuestros clientes en el futuro. Por eso, seleccionamos únicamente los proyectos que nos apasionan y en los que creemos que podemos hacer una diferencia.
                </p>
              </div>
            </div>



            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box">
                <div className="icon single-box-landing">
                <i className='bx bx-code-alt bx-tada' ></i>
                </div>

                <h3>
                  <a>    
                  Código Fuente Disponible
                  </a>
                </h3>

                <p>
                Nuestro equipo con amplia experiencia en múltiples lenguajes de programación, por lo general preferimos JavaScript, TypeScript, Nodejs, React, Nextjs, Laravel y Python para crear soluciones escalables y seguras. Elegimos la mejor tecnología para cada proyecto, garantizando un código fuente bien escrito y estructurado que se adapte a las necesidades de tu negocio y te permita crecer y evolucionar con el tiempo.
                </p>
              </div>
            </div>



            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box bg-c679e3">
                <div className="icon single-box-landing">
                <i className='bx bxs-user-check bx-tada'></i>
                </div>

                <h3>
                  <a>
                  Experiencia de Usuario
                  </a>
                </h3>

                <p>
                En SCRAM, tomamos muy en serio el diseño de la interfaz de usuario (UI) y la experiencia del usuario (UX). Utilizamos herramientas como Figma para crear prototipos y diseños de alta calidad que se adapten a las necesidades de nuestros clientes. Nuestro enfoque en el UI/UX nos permite crear soluciones que no solo sean funcionales, sino también intuitivas y atractivas, lo que a su vez aumenta la satisfacción del usuario y el éxito del proyecto.
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-box bg-eb6b3d">
                <div className="icon single-box-landing">
                <i className='bx bxl-docker bx-tada'></i>
                </div>

                <h3>
                  <a>
                    Alquitectura Escalable
                  </a>
                </h3>

                <p>
                Utilizamos las tecnologías de clase mundial de Google Cloud Platform (GCP) y Amazon Web Services (AWS) para desplegar contenedores, aplicaciones monolíticas y microservicios. Desde la planificación hasta la implementación, nos aseguramos de que nuestra arquitectura de software sea sólida, segura y eficiente, utilizando las mejores prácticas y tecnologías disponibles en el mercado.
                </p>
              </div>
            </div>


            </div>



        </div>
      </div>
    </>
  )
}

export default Features
