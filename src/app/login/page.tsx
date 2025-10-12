import React from "react";
import Navbar from "../../components/scram/Layout/Navbar";
import Footer from "../../components/scram/Layout/Footer";
import PageBanner from "../../components/scram/Common/PageBanner";
import LoginForm from "../../components/scram/Auth/LoginForm";

export const metadata = {
  robots: 'noindex'
}

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Login" />

      <LoginForm />

      <Footer />
    </>
  );
};
