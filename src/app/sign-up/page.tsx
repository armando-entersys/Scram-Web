import React from "react";
import Navbar from "../../components/scram/Layout/Navbar";
import Footer from "../../components/scram/Layout/Footer";
import PageBanner from "../../components/scram/Common/PageBanner";
import SignUpForm from "../../components/scram/Auth/SignUpForm";

export const metadata = {
  robots: 'noindex'
}

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner pageTitle="Sign Up" />

      <SignUpForm />

      <Footer />
    </>
  );
};
