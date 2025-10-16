import React from "react"
import Image from "next/image"
import logo from "/public/images/scram/logo.png"
import whatsapp from "/public/images/scram/whatsapp.svg"
import MainBannerAdsClinicas from '@/components/scram/AdsClinicasLanding/MainBannerAdsClinicas'
import FeaturesAdsClinicas from '@/components/scram/AdsClinicasLanding/FeaturesAdsClinicas'
import Partners from '@/components/scram/PartnerStyleTwo'
import Partner from "@/components/scram/Partner"
import ContactInfoAdsClinicas from "@/components/scram/AdsClinicasLanding/ContactInfoAdsClinicas"
import GoogleMapLanding from "@/components/scram/Contact/GoogleMapLanding"
import Team from "@/components/scram/Team"
import ButtonWhatsapp from "@/components/scram/Layout/ButtonWhatsapp"
import PlyrVideo from '@/components/scram/Layout/PlyrVideo'
import Smartlook from '@/components/scram/Layout/Smartlook'
import Script from "next/script"
import Gallery1 from "@/components/scram/Gallery1"

export const metadata = {
  robots: 'noindex',
  title: 'Servicio para Empresas sector Salud: Sistema efectivo de Adquisición de Clientes',
  description: 'Hemos creado un ecosistema de marketing digital diseñado para atraer muchos clientes al menor costo posible.'
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
        id="analyzee"
        async
        src="https://cdn.analyzee.io/sdk/"
        dangerouslySetInnerHTML={{ __html: '' }}
      />
    {/*<Smartlook init="aa000406eb9aec80894eb48f0e6ab0114fd0e447" />*/}
    <div className="container logo-landing">
    <Image src={logo} alt="logo" width={110} height={36} />
    </div>
    
    <MainBannerAdsClinicas />
    <br />
    <Partners />
    <br />
    <FeaturesAdsClinicas />
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
    <ContactInfoAdsClinicas />
    <br />
    <GoogleMapLanding />

    
      <ButtonWhatsapp 
        className="whatsapp" 
        p="w" 
        nu="529993882606" 
        href="?click=whatsappAdsClinicas"
        send_to="AW-949839800/73OWCNeAmNQZELjP9cQD"
        >
      ¿Tienes alguna consulta? <Image src={whatsapp} alt="wh"/>
      </ButtonWhatsapp>
     
 
    </>
  )
}

export default Page