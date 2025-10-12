"use client";
import React from "react";
import { useEffect, useRef } from 'react';


export default function FormLoader() {
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const loaderRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const iframe = iframeRef.current;
      const loader = loaderRef.current;
  
      if (iframe && loader) {
        iframe.onload = () => {
          if (loader) loader.style.display = 'none';
          iframe.style.display = 'block';
        };
      }
    }, []);

  return (
    <>
      <div className="loader-container">
        <br />
      <h3 className="text-center">Formulario Ticket de Soporte Técnico</h3>
      <div id="loader" className="loader" ref={loaderRef} style={{ display: 'block' }}></div>
      <iframe
        id="formularioIframe"
        ref={iframeRef}
        src="https://app.smartsheet.com/b/form/10f061c1c9574d94b0cacb75174b92e9"
        style={{ display: 'none' }}
      ></iframe>
        </div>
    </>
  );
};