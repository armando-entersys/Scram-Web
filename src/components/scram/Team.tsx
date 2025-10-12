"use client";

import React from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import susy from "/public/images/scram/colaboradores/susy.webp";
import rodrigo from "/public/images/scram/colaboradores/rodrigo.webp";
import ramon from "/public/images/scram/colaboradores/ramon.webp";
import paola from "/public/images/scram/colaboradores/paola.webp";
import oscar from "/public/images/scram/colaboradores/oscar.webp"; 
import alex from "/public/images/scram/colaboradores/alex.webp";
import nohemi from "/public/images/scram/colaboradores/nohemi.webp";
import karla  from "/public/images/scram/colaboradores/karla.webp";
import jesus from "/public/images/scram/colaboradores/jesus.webp";
import ivette from "/public/images/scram/colaboradores/ivette.webp";
import armando from "/public/images/scram/colaboradores/armando.webp";
import angela from "/public/images/scram/colaboradores/angela.webp";
import alejandro from "/public/images/scram/colaboradores/alejandro.webp";
import daniela from "/public/images/scram/colaboradores/daniela.webp";
import laura from "/public/images/scram/colaboradores/laura.webp";



const Team = () => {
  return (
    <>
      <div className="team-area ptb-80 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <h2>Equipo SCRAM</h2>
            <div className="bar"></div>
            <p>
            Nuestro equipo está compuesto por expertos en tecnología con años de experiencia en el desarrollo de soluciones innovadoras. Nuestros profesionales tienen una sólida formación en programación, análisis de datos, seguridad informática, marketing y más, lo que nos permite ofrecer soluciones personalizadas y efectivas a las empresas principalmente en Mexico y Estados Unidos.
            </p>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 5,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="team-slider"
        >
            <SwiperSlide>
            <div className="single-team">
              <div className="team-image">
                <Image
                  src={laura}
                  alt="image"
                  width={125}
                  height={125}
                />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Laura Alcibar</h3>
                  <span>Gestor de Cuentas Clave</span>
                </div>

                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/laura-a-25692114" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>

                </ul>

                <p>
                La diferencia entre un sueño y un objetivo, es un plan.
                </p>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="single-team">
              <div className="team-image">
                <Image
                  src={susy}
                  alt="image"
                  width={125}
                  height={125}
                />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Susana Fuentes</h3>
                  <span>Gerente de Operaciones y Ventas</span>
                </div>

                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/susana-fuentes-9a0021102" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>

                </ul>

                <p>
                Me encanta mantener la operación efectiva y productiva siempre.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-team">
              <div className="team-image">
                <Image
                  src={rodrigo}
                  alt="image"
                  width={125}
                  height={125}
                />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Rodrigo Dalay</h3>
                  <span>Business Inteligence Manager</span>
                </div>

                <ul>

                  <li>
                    <a href="https://www.linkedin.com/in/rodrigo-dalay-gonzalez-diaz-2aa50357" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>

                </ul>

                <p>
                En 3 segundos sabrás si, Flotas como Mariposa y Picas como Abeja.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-team">
              <div className="team-image">
                <Image
                  src={armando}
                  alt="image"
                  width={125}
                  height={125}
                />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Armando Cortes</h3>
                  <span>Líder de Proyectos de Programación</span>
                </div>

                <ul>

                  <li>
                    <a href="https://www.linkedin.com/in/armando-cortes-6a0762a9/" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>

                </ul>

                <p>
                Mi enfoque combina integridad e innovación, liderando con pasión para cumplir y superar expectativas con soluciones creativas y efectivas.
                </p>
              </div>
            </div>
          </SwiperSlide>






          <SwiperSlide>
            <div className="single-team">
              <div className="team-image">
                <Image
                  src={daniela}
                  alt="image"
                  width={125}
                  height={125}
                />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Daniela Trujillo</h3>
                  <span>Desarrollo Comercial</span>
                </div>

                <ul>

                  <li>
                    <a href="http://www.linkedin.com/in/daniela-trujillo-6a3623286" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>

                </ul>

                <p>
                Las oportunidades no aparecen, tu las creas.
                </p>
              </div>
            </div>
          </SwiperSlide>





          <SwiperSlide>
            <div className="single-team">
              <div className="team-image">
                <Image
                  src={paola}
                  alt="image"
                  width={125}
                  height={125}
                />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Paola López</h3>
                  <span>Ejecutiva de Ventas</span>
                </div>

                <ul>

                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>

                </ul>

                <p>
                Mi objetivo principal es superar las expectativas de los clientes.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-team">
              <div className="team-image">
                <Image
                  src={oscar}
                  alt="image"
                  width={125}
                  height={125}
                />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Oscar Caballero</h3>
                  <span>Software Architect & Marketing Specialist </span>
                </div>

                <ul>

                  <li>
                    <a href="https://www.linkedin.com/in/oscar-caballero-pixelhaiha" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>

                </ul>

                <p>
                Integrando tecnología y estrategia para una perfecta alineación con los objetivos comerciales.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-team">
              <div className="team-image">
                <Image
                  src={nohemi}
                  alt="image"
                  width={125}
                  height={125}
                />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Noemí Agustín</h3>
                  <span>Auxiliar de Compras</span>
                </div>

                <ul>

                  <li>
                    <a href="https://www.linkedin.com/in/noem%C3%AD-agust%C3%ADn-768a00305/" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>

                </ul>

                <p>
                Resolver incidencias genera satisfacción motivadora.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-team">
              <div className="team-image">
                <Image
                  src={alex}
                  alt="image"
                  width={125}
                  height={125}
                />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Alejandro Ramírez</h3>
                  <span>CEO & Founder</span>
                </div>

                <ul>

                  <li>
                    <a href="https://www.linkedin.com/in/ing-alejandro-ram%C3%ADrez-p%C3%A9rez-b724122ab/" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>
                </ul>

                <p>
                Las personas lo suficientemente locas como para pensar que pueden cambiar el mundo son las que realmente lo hacen.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-team">
              <div className="team-image">
                <Image
                  src={karla}
                  alt="image"
                  width={125}
                  height={125}
                />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Karla Mizrahi</h3>
                  <span>Especialista en Adquisiciones</span>
                </div>

                <ul>
 
                  <li>
                    <a href="https://www.linkedin.com/in/karla-ramirez-575931307/" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>

                </ul>

                <p>
                Destaco en negociación y análisis para asegurar relaciones sólidas con proveedores.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-team">
              <div className="team-image">
                <Image
                  src={jesus}
                  alt="image"
                  width={125}
                  height={125}
                />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Jesús Elyaher</h3>
                  <span>Gerente Ejecutivo de Soluciones Tecnológicas</span>
                </div>

                <ul>

                  <li>
                    <a href="https://www.linkedin.com/in/jesus-elyaher-estrada-lopez-b25791b8/" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>
                </ul>

                <p>
                Mi enfoque proactivo garantiza soluciones tecnológicas.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-team">
              <div className="team-image">
                <Image
                  src={ivette}
                  alt="image"
                  width={125}
                  height={125}
                />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3> Ivette Gutierrez</h3>
                  <span>Facturación y Cobranza</span>
                </div>

                <ul>

                  <li>
                    <a href="https://www.linkedin.com/in/ivette-gutierrez-7653a7305/" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>

                </ul>

                <p>
                Cuentas por cobrar sanas, relación con clientes largas.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="single-team">
              <div className="team-image">
                <Image
                  src={ramon}
                  alt="image"
                  width={125}
                  height={125}
                />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Ramón Villa</h3>
                  <span>Ingeniero en Soporte Técnico</span>
                </div>

                <ul>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>

                </ul>

                <p>
                Mi pasión por la excelencia en el servicio y mi compromiso con la calidad garantizan que cada interacción con nuestros clientes sea una experiencia excepcional.
                </p>
              </div>
            </div>
          </SwiperSlide>


          <SwiperSlide>
            <div className="single-team">
              <div className="team-image">
                <Image
                  src={angela}
                  alt="image"
                  width={125}
                  height={125}
                />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Angela Hernández</h3>
                  <span>Hunters</span>
                </div>

                <ul>

                  <li>
                    <a href="https://www.linkedin.com/in/angela-hern%C3%A1ndez-aa4921310" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>

                </ul>

                <p>
                Ser un hunter me brinda fortaleza de supervivencia profesional.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="single-team">
              <div className="team-image">
                <Image
                  src={alejandro}
                  alt="image"
                  width={125}
                  height={125}
                />
              </div>

              <div className="team-content">
                <div className="team-info">
                  <h3>Alejandro Cid</h3>
                  <span>Logística</span>
                </div>

                <ul>

                  <li>
                    <a href="https://www.linkedin.com/in/alexcid0627" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>

                </ul>

                <p>
                Mi compromiso inquebrantable con la puntualidad, la seguridad y la excelencia define cada entrega que realizo.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Team;
