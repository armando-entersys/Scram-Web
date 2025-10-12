import React from "react";
import Navbar from "../../components/scram/Layout/Navbar";
import Footer from "../../components/scram/Layout/Footer";
import PageBanner from "../../components/scram/Common/PageBanner";
import ContactInfo from "../../components/scram/Contact/ContactInfo";
import GoogleMap from "../../components/scram/Contact/GoogleMap";
import ContactForm from "../../components/scram/Contact/ContactForm";
import Gallery1 from "@/components/scram/Gallery1"

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Contacto" />
      

      <ContactInfo />

      <GoogleMap />

      <Footer />
    </>
  );
};
