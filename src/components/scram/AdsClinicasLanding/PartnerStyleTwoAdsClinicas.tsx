"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// anthopic
import p1 from "/public/images/scram/partners/anthopic-a.webp";
import p1h from "/public/images/scram/partners/anthopic.webp";

// eaton
import p2 from "/public/images/scram/partners/eaton-a.webp";
import p2h from "/public/images/scram/partners/eaton.webp";

// hp
import p3 from "/public/images/scram/partners/hp-a.webp";
import p3h from "/public/images/scram/partners/hp.webp";

// node
import p4 from "/public/images/scram/partners/node-a.webp";
import p4h from "/public/images/scram/partners/node.webp";

// apc
import p5 from "/public/images/scram/partners/apc-a.webp";
import p5h from "/public/images/scram/partners/apc.webp";

// emerson
import p6 from "/public/images/scram/partners/emerson-a.webp";
import p6h from "/public/images/scram/partners/emerson.webp";

// ibm
import p7 from "/public/images/scram/partners/ibm-a.webp";
import p7h from "/public/images/scram/partners/ibm.webp";

// openai
import p8 from "/public/images/scram/partners/openai-a.webp";
import p8h from "/public/images/scram/partners/openai.webp";

// aws
import p9 from "/public/images/scram/partners/aws-a.webp";
import p9h from "/public/images/scram/partners/aws.webp";

// fortinet
import p10 from "/public/images/scram/partners/fortinet-a.webp";
import p10h from "/public/images/scram/partners/fortinet.webp";

// laravel
import p11 from "/public/images/scram/partners/laravel-a.webp";
import p11h from "/public/images/scram/partners/laravel.webp";

// oracle
import p12 from "/public/images/scram/partners/oracle-a.webp";
import p12h from "/public/images/scram/partners/oracle.webp";

// azure
import p13 from "/public/images/scram/partners/azure-a.webp";
import p13h from "/public/images/scram/partners/azure.webp";

// gemma
import p14 from "/public/images/scram/partners/gemma-a.webp";
import p14h from "/public/images/scram/partners/gemma.webp";

// lenovo
import p15 from "/public/images/scram/partners/lenovo-a.webp";
import p15h from "/public/images/scram/partners/lenovo.webp";

// python
import p16 from "/public/images/scram/partners/python-a.webp";
import p16h from "/public/images/scram/partners/python.webp";

// boch
import p17 from "/public/images/scram/partners/boch-a.webp";
import p17h from "/public/images/scram/partners/boch.webp";

// go
import p18 from "/public/images/scram/partners/go-a.webp";
import p18h from "/public/images/scram/partners/go.webp";

// linux
import p19 from "/public/images/scram/partners/linux-a.webp";
import p19h from "/public/images/scram/partners/linux.webp";

// qwen
import p20 from "/public/images/scram/partners/qwen-a.webp";
import p20h from "/public/images/scram/partners/qwen.webp";

// cisco
import p21 from "/public/images/scram/partners/cisco-a.webp";
import p21h from "/public/images/scram/partners/cisco.webp";

// google-ads
import p22 from "/public/images/scram/partners/google-ads-a.webp";
import p22h from "/public/images/scram/partners/google-ads.webp";

// google-cloud
import p23 from "/public/images/scram/partners/google-cloud-a.webp";
import p23h from "/public/images/scram/partners/google-cloud.webp";

// llama
import p24 from "/public/images/scram/partners/llama-a.webp";
import p24h from "/public/images/scram/partners/llama.webp";

// react
import p25 from "/public/images/scram/partners/react-a.webp";
import p25h from "/public/images/scram/partners/react.webp";

// cplus
import p26 from "/public/images/scram/partners/cplus-a.webp";
import p26h from "/public/images/scram/partners/cplus.webp";

// mistral
import p27 from "/public/images/scram/partners/mistral-a.webp";
import p27h from "/public/images/scram/partners/mistral.webp";

// siemens
import p28 from "/public/images/scram/partners/siemens-a.webp";
import p28h from "/public/images/scram/partners/siemens.webp";

// dell
import p29 from "/public/images/scram/partners/dell-a.webp";
import p29h from "/public/images/scram/partners/dell.webp";

// hikvision
import p30 from "/public/images/scram/partners/hikvision-a.webp";
import p30h from "/public/images/scram/partners/hikvision.webp";

// next
import p31 from "/public/images/scram/partners/next-a.webp";
import p31h from "/public/images/scram/partners/next.webp";

// stability
import p32 from "/public/images/scram/partners/stability-a.webp";
import p32h from "/public/images/scram/partners/stability.webp";

// docker
import p33 from "/public/images/scram/partners/docker-a.webp";
import p33h from "/public/images/scram/partners/docker.webp";

// honeywell
import p34 from "/public/images/scram/partners/honeywell-a.webp";
import p34h from "/public/images/scram/partners/honeywell.webp";

// nginx
import p35 from "/public/images/scram/partners/nginx-a.webp";
import p35h from "/public/images/scram/partners/nginx.webp";

// vmware
import p36 from "/public/images/scram/partners/vmware-a.webp";
import p36h from "/public/images/scram/partners/vmware.webp";

const partners = [
  { id: 1, image: p1, imageHover: p1h },
  { id: 2, image: p2, imageHover: p2h },
  { id: 3, image: p3, imageHover: p3h },
  { id: 4, image: p4, imageHover: p4h },
  { id: 5, image: p5, imageHover: p5h },
  { id: 6, image: p6, imageHover: p6h },
  { id: 7, image: p7, imageHover: p7h },
  { id: 8, image: p8, imageHover: p8h },
  { id: 9, image: p9, imageHover: p9h },
  { id: 10, image: p10, imageHover: p10h },
  { id: 11, image: p11, imageHover: p11h },
  { id: 12, image: p12, imageHover: p12h },
  { id: 13, image: p13, imageHover: p13h },
  { id: 14, image: p14, imageHover: p14h },
  { id: 15, image: p15, imageHover: p15h },
  { id: 16, image: p16, imageHover: p16h },
  { id: 17, image: p17, imageHover: p17h },
  { id: 18, image: p18, imageHover: p18h },
  { id: 19, image: p19, imageHover: p19h },
  { id: 20, image: p20, imageHover: p20h },
  { id: 21, image: p21, imageHover: p21h },
  { id: 22, image: p22, imageHover: p22h },
  { id: 23, image: p23, imageHover: p23h },
  { id: 24, image: p24, imageHover: p24h },
  { id: 25, image: p25, imageHover: p25h },
  { id: 26, image: p26, imageHover: p26h },
  { id: 27, image: p27, imageHover: p27h },
  { id: 28, image: p28, imageHover: p28h },
  { id: 29, image: p29, imageHover: p29h },
  { id: 30, image: p30, imageHover: p30h },
  { id: 31, image: p31, imageHover: p31h },
  { id: 32, image: p32, imageHover: p32h },
  { id: 33, image: p33, imageHover: p33h },
  { id: 34, image: p34, imageHover: p34h },
  { id: 35, image: p35, imageHover: p35h },
  { id: 36, image: p36, imageHover: p36h }
];

const PartnerStyleTwo = () => {
  return (
    <>
      <div className="repair-partner-area bg-f9fafb">
        <div className="container">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 1000,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1024: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            modules={[Autoplay]}
            className="repair-partner-slides"
          >
           
       
    {partners.map((partner) => (
      <SwiperSlide key={partner.id}>
        <div className="single-repair-partner">
          <a>
            <Image src={partner.image} alt={`image-${partner.id}`} width={200} height={72} />
            <Image src={partner.imageHover} alt={`image-hover-${partner.id}`} width={200} height={72} />
          </a>
        </div>
      </SwiperSlide>
    ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default PartnerStyleTwo;
