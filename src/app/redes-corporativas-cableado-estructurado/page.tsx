import React from "react"
import Image from "next/image"
import logo from "/public/images/scram/logo.png"
import whatsapp from "/public/images/scram/whatsapp.svg"
import MainBannerRedes from '@/components/scram/RedesLanding/MainBannerRedes'
import FeaturesRedes from '@/components/scram/RedesLanding/FeaturesRedes'
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
  title: 'Infraestructura y Soluciones de Conectividad para Empresas',
  description: 'Cableado estructurado, fibra óptica, antenas distribuidas y Distribución PoE. Tanto redes LAN como WAN para conectar sus oficinas locales y remotas. Ya sea que esté modernizando su infraestructura existente o creando una nueva desde cero.'
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
    <MainBannerRedes />
    <br />
    <Partners />
    <br />
    <FeaturesRedes />
    <br />

     <Footer />
    </>
  )
}

export default Page