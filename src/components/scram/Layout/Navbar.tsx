"use client"

import React, { useState, useEffect } from "react"
import * as Icon from "react-feather"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Script from "next/script"

import logo from "/public/images/scram/logo.png"

const Navbar: React.FC = () => {
  const currentRoute = usePathname()

  const [menu, setMenu] = useState<boolean>(true)

  const toggleNavbar = () => {
    setMenu(!menu)
  };

  useEffect(() => {
    let elementId = document.getElementById("header")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky")
      } else {
        elementId?.classList.remove("is-sticky")
      }
    })
  }, [])

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <>
      <header id="header" className="headroom">
        <div className="startp-nav">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand" >
                <Image src={logo} alt="logo" width={110} height={36} />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                  <Link
                      href="/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute == "/" && "active"
                      }`}
                      
                    >
                      Home
                    </Link>


                  </li>
                  <li className="nav-item">
                  <Link
                      href="/about-us"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute == "/about-us" && "active"
                      }`}
                      
                    >
                      Nosotros
                    </Link>


                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="nav-link"
                    >
                      Servicios <Icon.ChevronDown />
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/arquitectura-software-apps-plataformas-web"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/arquitectura-software-apps-plataformas-web" && "active"
                          }`}
                        >
                          Arquitectura de Software
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/soluciones-seguridad-electronica"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/soluciones-seguridad-electronica" && "active"
                          }`}
                        >
                          Seguridad Electrónica
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/licenciamiento-seguridad-cibernetica"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/licenciamiento-seguridad-cibernetica" && "active"
                          }`}
                        >
                          Licenciamiento y Ciberseguridad
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/equipamiento-hardware-soluciones-industriales"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/equipamiento-hardware-soluciones-industriales" && "active"
                          }`}
                        >
                          Hardware y Soluciones Industriales
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/infraestructura-soluciones-conectividad"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/infraestructura-soluciones-conectividad" && "active"
                          }`}
                        >
                          Infraestructura y Conectividad
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/poliza-soporte-tecnico"
                          onClick={toggleNavbar}
                          className={`nav-link ${
                            currentRoute == "/poliza-soporte-tecnico" && "active"
                          }`}
                        >
                          Póliza de Soporte Técnico
                        </Link>
                      </li>
                    </ul>
                  </li>




                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      onClick={toggleNavbar}
                      className={`nav-link ${
                        currentRoute == "/contact/" && "active"
                      }`}
                      
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Others option */}
              <div className="others-option">

                <Link href="/login/" className="btn btn-light" >
                 Login
                </Link>

                <Link href="/support/" className="btn btn-primary" >
                   Soporte
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
