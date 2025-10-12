import React from "react"
import Image from "next/image"
import logo from "/public/images/scram/logo.png"
import whatsapp from "/public/images/scram/whatsapp.svg"
import MainBannerMvpDashboard from '@/components/scram/MvpDashboardLanding/MainBannerMvpDashboard'
import FeaturesMvpDashboard from '@/components/scram/MvpDashboardLanding/FeaturesMvpDashboard'
import Partners from '@/components/scram/PartnerStyleTwo'
import Partner from "@/components/scram/Partner"
import ContactInfoLanding from "@/components/scram/MvpLanding/ContactInfoMvp"
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
  title: 'Software factory para startups y empresas',
  description: 'Desarrollo de Dashboard, MVP, Arquitectura de Software, Apps y Plataformas Web personalizadas para satisfacer las demandas de las grandes empresas en México y Estados Unidos.'
}

const Page: React.FC = () => {

  const videoSrcA = 'https://storage.googleapis.com/ehupi-landing-pages/scram-data-center/tv-crf31.mp4';
  const posterSrcA = 'https://storage.googleapis.com/ehupi-landing-pages/scram-data-center/tv.webp';

  const videoSrc = 'https://storage.googleapis.com/scram-landings/scram-general/scram-general-1c-crf23.mp4';
  const posterSrc = 'https://storage.googleapis.com/scram-landings/scram-general/poster-video-general.webp';



  return (
    <>
     <Script
     strategy="beforeInteractive"
     async
        id="analyzeemvpdash"
        src="https://cdn.analyzee.io/sdk/lLgRvQGnfNWpv4xG5yFN.js"
        dangerouslySetInnerHTML={{ __html: '' }}
      />
    {/*<Smartlook init="aa000406eb9aec80894eb48f0e6ab0114fd0e447" />*/}
    <div className="container logo-landing">
    <Image src={logo} alt="logo" width={110} height={36} />
    </div>
    
    <MainBannerMvpDashboard />
    <br />
    <Partners />
    <br />
    <FeaturesMvpDashboard />
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
    <ContactInfoLanding />
    <br />
    <GoogleMapLanding />

    
      <ButtonWhatsapp 
        className="whatsapp" 
        p="w" 
        nu="529993882606" 
        href="?click=whatsappMvpDashboard"
        send_to="AW-949839800/naAlCNP8xN4ZELjP9cQD"
        >
      ¿Tienes alguna consulta? <Image src={whatsapp} alt="wh"/>
      </ButtonWhatsapp>
     
    </>
  )
}

export default Page