import React from "react";
import * as Icon from "react-feather";
import Navbar from "../../components/scram/Layout/Navbar";
import Footer from "../../components/scram/Layout/Footer";
import PageBanner from "../../components/scram/Common/PageBanner";
import FormLoader from "@/components/scram/Contact/FormLoader";

export const metadata = {
  title: 'Scram Consulting - Soporte Técnico',
  description: 'Descarga de Herramientas de Soporte Remoto, Formulario Ticket de Soporte Técnico.'
};

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Soporte Scram" />
    <div className="container">
    <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box">
                <div className="icon">
                <i className='bx bxl-apple'></i>
                </div>
                <h3>Soporte Remoto Mac</h3>

                <Icon.ArrowDownCircle/> <a className="download" href="https://storage.googleapis.com/scram-downloads-1760377889/SoporteScramMac.dmg"> SoporteScramMac.dmg</a>
              </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box">
                <div className="icon">
                <i className='bx bxl-windows'></i>
                </div>
                <h3>Soporte Remoto Windows AD</h3>

                <Icon.ArrowDownCircle/> <a className="download" href="https://storage.googleapis.com/scram-downloads-1760377889/SoporteScramPC.exe">  SoporteScramPC.exe</a>
              </div>
        </div>
        </div>
    
     <FormLoader />
    </div>
      <Footer />
    </>
  );
};