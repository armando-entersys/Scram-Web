import React from "react"
import Image from "next/image"
import logo from "/public/images/scram/logo.png"
import whatsapp from "/public/images/scram/whatsapp.svg"
import MainBannerRefacciones from '@/components/scram/RefaccionesLanding/MainBannerRefacciones'
import FeaturesRefacciones from '@/components/scram/RefaccionesLanding/FeaturesRefacciones'
import Partners from '@/components/scram/PartnerStyleTwo'
import Partner from "@/components/scram/Partner"
import ContactInfoRefacciones from "@/components/scram/RefaccionesLanding/ContactInfoRefacciones"
import GoogleMapLanding from "@/components/scram/Contact/GoogleMapLanding"
import Team from "@/components/scram/Team"
import ButtonWhatsapp from "@/components/scram/Layout/ButtonWhatsapp"
import PlyrVideo from '@/components/scram/Layout/PlyrVideo'
import Smartlook from '@/components/scram/Layout/Smartlook'
import Head from 'next/head'
import Script from "next/script"
import Gallery1 from "@/components/scram/Gallery1"

export const metadata = {
  robots: 'noindex',
  title: 'Refacciones para Centro de Datos, Equipamiento, Hardware y Soluciones Industrialea',
  description: 'Gran Stock de Partes para Servidores, Soluciones de energía y enfriamiento, aire acondicionado, tuberías, codos, canaletas, rejillas, racks, gabinetes, ventiladores, fuentes de poder.'
}

const Page: React.FC = () => {

  const videoSrc = 'https://storage.googleapis.com/ehupi-landing-pages/scram-data-center/tv-crf31.mp4';
  const posterSrc = 'https://storage.googleapis.com/ehupi-landing-pages/scram-data-center/tv.webp';


  return (
    <>
    <Smartlook init="929049a8db4aca45d5699521688b6768a435a3fd" />
    <div className="container logo-landing">
    <Image src={logo} alt="logo" width={110} height={36} />
    </div>
    
    <MainBannerRefacciones />
    <br />
    <Partners />
    <br />
    <FeaturesRefacciones />
    <br />

    <div className="container text-center">
    <h4>Entrevista a Alejandro Ramírez, CEO de Scram en Cadena Internacional TV </h4>
    <PlyrVideo src={videoSrc} poster={posterSrc} />
    </div>
    <br />
    <Partner />
    <br />
    <Team />
    <br />
    <Gallery1 />
    <ContactInfoRefacciones />
    <br />
    <GoogleMapLanding />

    
      <ButtonWhatsapp 
        className="whatsapp" 
        p="w" 
        nu="529993882606" 
        href="?click=whatsappRefacciones"
        send_to="AW-949839800/giltCPOD0P8YELjP9cQD"
        >
      ¿Tienes alguna consulta? <Image src={whatsapp} alt="wh"/>
      </ButtonWhatsapp>
     
    </>
  )
}

export default Page