import React from "react"
import Image from "next/image"
import logo from "/public/images/scram/logo.png"
import whatsapp from "/public/images/scram/whatsapp.svg"
import MainBannerCentrodedatos from '@/components/scram/CentrodedatosLanding/MainBannerCentrodedatos'
import FeaturesCentrodedatos from '@/components/scram/CentrodedatosLanding/FeaturesCentrodedatos'
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
  title: 'Software factory para startups y empresas',
  description: 'Creación de MVP, Arquitectura de Software, Apps y Plataformas Web personalizadas para satisfacer las demandas de las grandes empresas en México y Estados Unidos.'
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
    <MainBannerCentrodedatos />
    <br />
    <Partners />
    <br />
    <FeaturesCentrodedatos />
    <br />

     <Footer />
    </>
  )
}

export default Page