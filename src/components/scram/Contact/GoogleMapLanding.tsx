"use client";

import React from "react";

const GoogleMap = () => {
  return (
    <>
    <div className="bg-f7">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7515.835960153451!2d-99.229945!3d19.630804!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d21fbf45e35055%3A0xf10d007bc03b635b!2sScram%20S.A.%20de%20C.V.!5e0!3m2!1ses-419!2smx!4v1718491549459!5m2!1ses-419!2smx"
        width="100%"
        height="450"
        allowFullScreen
        loading="lazy"
      ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
