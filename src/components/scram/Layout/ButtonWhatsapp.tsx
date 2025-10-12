"use client";
import React from 'react';

interface ButtonProps {
  className: string;
  p: string;
  href: string;
  nu: string;
  send_to: string;
  children: React.ReactNode;
  
}

const ButtonWhatsapp: React.FC<ButtonProps> = ({ className, p, href, nu ,children, send_to }) => {

  const gtag_report_conversion_contact = () => {
    let open
    if (p === "w") {
      open = `https://wa.me/${nu}`
    } else {
      open = `tel:+${nu}`
    }
    window.open(open)
    gtag_report_conversion(send_to)
  }

  return (
    <a href={href} className={className} onClick={gtag_report_conversion_contact}>
      {children}
    </a>

  )
}

export default ButtonWhatsapp
