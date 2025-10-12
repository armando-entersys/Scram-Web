import React from "react"
import Image from "next/image"
import logo from "/public/images/scram/logo.png"
import whatsapp from "/public/images/scram/whatsapp.svg"
import MainBannerAds from '@/components/scram/AdsLanding/MainBannerAds'
import FeaturesAds from '@/components/scram/AdsLanding/FeaturesAds'
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
import Footer from "@/components/scram/Layout/Footer"
import Navbar from "@/components/scram/Layout/Navbar"

export const metadata = {
  title: 'Servicio para Empresas: Sistema efectivo de Adquisición de Clientes',
  description: 'Hemos creado un ecosistema de marketing digital diseñado para atraer muchos clientes al menor costo posible.'
}

const Page: React.FC = () => {

  return (
    <>
        <Script
        strategy="beforeInteractive"
        async
        id="analyzeeprincipal"
        src="https://cdn.analyzee.io/sdk/WJ9shmvFDGySBxuQvEoh.js"
        dangerouslySetInnerHTML={{ __html: '' }}
      />
    <Navbar />
    <br /><br /><br /><br /><br />
    <MainBannerAds />
    <br />
    <Partners />
    <br />
    <FeaturesAds />
    <br />

     <Footer />
    </>
  )
}

export default Page