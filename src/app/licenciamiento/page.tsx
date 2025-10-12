import React from "react"
import Image from "next/image"
import logo from "/public/images/scram/logo.png"
import whatsapp from "/public/images/scram/whatsapp.svg"
import MainBannerLicenciamiento from '@/components/scram/LicenciamientoLanding/MainBannerLicenciamiento'
import FeaturesLicenciamiento from '@/components/scram/LicenciamientoLanding/FeaturesLicenciamiento'
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
  title: 'Licenciamiento de software para empresas',
  description: 'Facilitamos las licencias de software de las marcas líderes como: Oracle, Microsoft, IBM, Smartsheet, Autodesk, Cisco umbrella, Red Hat, VMware, Fortinet, Quickbooks, Adobe y otros.'
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
    <MainBannerLicenciamiento />
    <br />
    <Partners />
    <br />
    <FeaturesLicenciamiento />
    <br />

     <Footer />
    </>
  )
}

export default Page