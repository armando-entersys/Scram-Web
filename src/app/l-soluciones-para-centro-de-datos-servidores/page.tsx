import React from "react"
import Image from "next/image"
import logo from "/public/images/scram/logo.png"
import whatsapp from "/public/images/scram/whatsapp.svg"
import MainBannerCentrodedatos from '@/components/scram/CentrodedatosLanding/MainBannerCentrodedatos'
import FeaturesCentrodedatos from '@/components/scram/CentrodedatosLanding/FeaturesCentrodedatos'
import Partners from '@/components/scram/PartnerStyleTwo'
import Partner from "@/components/scram/Partner"
import ContactInfoCentrodedatos from "@/components/scram/CentrodedatosLanding/ContactInfoCentrodedatos"
import GoogleMapLanding from "@/components/scram/Contact/GoogleMapLanding"
import Team from "@/components/scram/Team"
import ButtonWhatsapp from "@/components/scram/Layout/ButtonWhatsapp"
import PlyrVideo from '@/components/scram/Layout/PlyrVideo'
import Head from 'next/head'
import Script from "next/script"
import Gallery1 from "@/components/scram/Gallery1"
import ClientScripts from "@/components/scram/Layout/ClientScripts"

export const metadata = {
  robots: 'noindex',
  title: 'Refacciones para Centro de Datos, Equipamiento, Hardware y Soluciones Industrialea',
  description: 'Gran Stock de Partes para Servidores, Soluciones de energía y enfriamiento, aire acondicionado, tuberías, codos, canaletas, rejillas, racks, gabinetes, ventiladores, fuentes de poder.'
}

const Page: React.FC = () => {

  const videoSrc = 'https://storage.googleapis.com/scram-landings/scram-general/scram-general-1c-crf23.mp4';
  const posterSrc = 'https://storage.googleapis.com/scram-landings/scram-general/poster-video-general.webp';


  return (
    <>
    <Script
    strategy="beforeInteractive"
    async
        id="analyzeecentrodedatos"
        src="https://cdn.analyzee.io/sdk/FHr0QW7Eq4GEH8Kby09V.js"
        dangerouslySetInnerHTML={{ __html: '' }}
      />
    <div className="container logo-landing">
    <Image src={logo} alt="logo" width={110} height={36} />
    </div>
    
    <MainBannerCentrodedatos />
    <br />
    <Partners />
    <br />
    <FeaturesCentrodedatos />
    <br />

    <div className="container text-center">
    <h4>En SCRAM creemos que las mejores soluciones surgen de la confianza </h4>
    <PlyrVideo src={videoSrc} poster={posterSrc} />
    </div>
    <br />
    <Partner />
    <br />
    <Team />
    <br />
    <Gallery1 />
    <ContactInfoCentrodedatos />
    <br />
    <GoogleMapLanding />

    
      <ButtonWhatsapp 
        className="whatsapp" 
        p="w" 
        nu="529993882606" 
        href="?click=whatsappCentrodedatos"
        send_to="AW-949839800/giltCPOD0P8YELjP9cQD"
        >
      ¿Tienes alguna consulta? <Image src={whatsapp} alt="wh"/>
      </ButtonWhatsapp>
      <ClientScripts metaPixelId="538697878977956" />
    </>
  )
}

export default Page