import React from "react"
import Image from "next/image"
import logo from "/public/images/scram/logo.png"
import whatsapp from "/public/images/scram/whatsapp.svg"
import MainBannerIndustrial from '@/components/scram/IndustrialLanding/MainBannerIndustrial'
import FeaturesIndustrial from '@/components/scram/IndustrialLanding/FeaturesIndustrial'
import Partners from '@/components/scram/PartnerStyleTwo'
import Partner from "@/components/scram/Partner"
import ContactInfoLanding from "@/components/scram/IndustrialLanding/ContactInfoIndustrial"
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
  title: 'Stock de +15.000 Repuestos, Piezas, Productos y Equipos Industriales',
  description: 'Equipo de automatización y robótica, Piezas Grainger, ABB, Siemens, Mitsubishi, Bosch, Emmerson, Schneider Electric, Honeywell, Yokogawa, Omron, Danaher, Eaton'
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
    <br /><br /><br />
    <MainBannerIndustrial />
    <br />
    <Partners />
    <br />
    <FeaturesIndustrial />
    <br />

     <Footer />
    </>
  )
}

export default Page