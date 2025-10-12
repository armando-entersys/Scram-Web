"use client";

import React from "react";
import Link from "next/link";

import Image from "next/image";

import partnerImg1 from "/public/images/scram/clientes/femsa-a.webp";
import partnerHoverImg1 from "/public/images/scram/clientes/femsa.webp";

import partnerImg2 from "/public/images/scram/clientes/chedraui-a.webp";
import partnerHoverImg2 from "/public/images/scram/clientes/chedraui.webp";

import partnerImg3 from "/public/images/scram/clientes/grupo-modelo-a.webp";
import partnerHoverImg3 from "/public/images/scram/clientes/grupo-modelo.webp";

import partnerImg4 from "/public/images/scram/clientes/bayer-a.webp";
import partnerHoverImg4 from "/public/images/scram/clientes/bayer.webp";

import partnerImg5 from "/public/images/scram/clientes/koblenz-a.webp";
import partnerHoverImg5 from "/public/images/scram/clientes/koblenz.webp";

import partnerImg6 from "/public/images/scram/clientes/carrix-a.webp";
import partnerHoverImg6 from "/public/images/scram/clientes/carrix.webp";

import partnerImg7 from "/public/images/scram/clientes/grafica-goncalves-a.webp";
import partnerHoverImg7 from "/public/images/scram/clientes/grafica-goncalves.webp";

import partnerImg8 from "/public/images/scram/clientes/grupo-mexico-a.webp";
import partnerHoverImg8 from "/public/images/scram/clientes/grupo-mexico.webp";

import partnerImg9 from "/public/images/scram/clientes/ssa-mexico-a.webp";
import partnerHoverImg9 from "/public/images/scram/clientes/ssa-mexico.webp";

import partnerImg10 from "/public/images/scram/clientes/tum-a.webp";
import partnerHoverImg10 from "/public/images/scram/clientes/tum.webp";

import partnerImg11 from "/public/images/scram/clientes/unilever-a.webp";
import partnerHoverImg11 from "/public/images/scram/clientes/unilever.webp";

import p1 from "/public/images/scram/clientes/1-a.webp";
import p1h from "/public/images/scram/clientes/1.webp";
import p2 from "/public/images/scram/clientes/2-a.webp";
import p2h from "/public/images/scram/clientes/2.webp";
import p3 from "/public/images/scram/clientes/3-a.webp";
import p3h from "/public/images/scram/clientes/3.webp";
import p4 from "/public/images/scram/clientes/4-a.webp";
import p4h from "/public/images/scram/clientes/4.webp";
import p5 from "/public/images/scram/clientes/5-a.webp";
import p5h from "/public/images/scram/clientes/5.webp";
import p6 from "/public/images/scram/clientes/6-a.webp";
import p6h from "/public/images/scram/clientes/6.webp";
import p7 from "/public/images/scram/clientes/7-a.webp";
import p7h from "/public/images/scram/clientes/7.webp";
import p8 from "/public/images/scram/clientes/8-a.webp";
import p8h from "/public/images/scram/clientes/8.webp";
import p9 from "/public/images/scram/clientes/9-a.webp";
import p9h from "/public/images/scram/clientes/9.webp";
import p10 from "/public/images/scram/clientes/10-a.webp";
import p10h from "/public/images/scram/clientes/10.webp";
import p11 from "/public/images/scram/clientes/11-a.webp";
import p11h from "/public/images/scram/clientes/11.webp";
import p12 from "/public/images/scram/clientes/12-a.webp";
import p12h from "/public/images/scram/clientes/12.webp";
import p13 from "/public/images/scram/clientes/13-a.webp";
import p13h from "/public/images/scram/clientes/13.webp";
import p14 from "/public/images/scram/clientes/14-a.webp";
import p14h from "/public/images/scram/clientes/14.webp";
import p15 from "/public/images/scram/clientes/15-a.webp";
import p15h from "/public/images/scram/clientes/15.webp";
import p16 from "/public/images/scram/clientes/16-a.webp";
import p16h from "/public/images/scram/clientes/16.webp";
import p17 from "/public/images/scram/clientes/17-a.webp";
import p17h from "/public/images/scram/clientes/17.webp";
import p18 from "/public/images/scram/clientes/18-a.webp";
import p18h from "/public/images/scram/clientes/18.webp";
import p19 from "/public/images/scram/clientes/19-a.webp";
import p19h from "/public/images/scram/clientes/19.webp";
import p20 from "/public/images/scram/clientes/20-a.webp";
import p20h from "/public/images/scram/clientes/20.webp";
import p21 from "/public/images/scram/clientes/21-a.webp";
import p21h from "/public/images/scram/clientes/21.webp";
import p22 from "/public/images/scram/clientes/22-a.webp";
import p22h from "/public/images/scram/clientes/22.webp";
import p23 from "/public/images/scram/clientes/23-a.webp";
import p23h from "/public/images/scram/clientes/23.webp";
import p24 from "/public/images/scram/clientes/24-a.webp";
import p24h from "/public/images/scram/clientes/24.webp";
import p25 from "/public/images/scram/clientes/25-a.webp";
import p25h from "/public/images/scram/clientes/25.webp";
import p26 from "/public/images/scram/clientes/26-a.webp";
import p26h from "/public/images/scram/clientes/26.webp";
import p27 from "/public/images/scram/clientes/27-a.webp";
import p27h from "/public/images/scram/clientes/27.webp";
import p28 from "/public/images/scram/clientes/28-a.webp";
import p28h from "/public/images/scram/clientes/28.webp";
import p29 from "/public/images/scram/clientes/29-a.webp";
import p29h from "/public/images/scram/clientes/29.webp";
import p30 from "/public/images/scram/clientes/30-a.webp";
import p30h from "/public/images/scram/clientes/30.webp";
import p31 from "/public/images/scram/clientes/31-a.webp";
import p31h from "/public/images/scram/clientes/31.webp";
import p32 from "/public/images/scram/clientes/32-a.webp";
import p32h from "/public/images/scram/clientes/32.webp";
import p33 from "/public/images/scram/clientes/33-a.webp";
import p33h from "/public/images/scram/clientes/33.webp";
import p34 from "/public/images/scram/clientes/34-a.webp";
import p34h from "/public/images/scram/clientes/34.webp";
import p35 from "/public/images/scram/clientes/35-a.webp";
import p35h from "/public/images/scram/clientes/35.webp";
import p36 from "/public/images/scram/clientes/36-a.webp";
import p36h from "/public/images/scram/clientes/36.webp";
import p37 from "/public/images/scram/clientes/37-a.webp";
import p37h from "/public/images/scram/clientes/37.webp";
import p38 from "/public/images/scram/clientes/38-a.webp";
import p38h from "/public/images/scram/clientes/38.webp";
import p39 from "/public/images/scram/clientes/39-a.webp";
import p39h from "/public/images/scram/clientes/39.webp";
import p40 from "/public/images/scram/clientes/40-a.webp";
import p40h from "/public/images/scram/clientes/40.webp";
import p41 from "/public/images/scram/clientes/41-a.webp";
import p41h from "/public/images/scram/clientes/41.webp";
import p42 from "/public/images/scram/clientes/42-a.webp";
import p42h from "/public/images/scram/clientes/42.webp";
import p43 from "/public/images/scram/clientes/43-a.webp";
import p43h from "/public/images/scram/clientes/43.webp";

const Partner = () => {
  return (
    <>
      <div className="ready-to-talk">
        <div className="container">
          <h3>Marcas que nos han elegido</h3>

        </div>
      </div>

      <div className="partner-area partner-section">
        <div className="container">

          <div className="partner-inner">
            <div className="row justify-content-center">
              <div className="col-lg-2 col-md-3 col-6">
                <a>
                  <Image
                    src={partnerImg1}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                  <Image
                    src={partnerHoverImg1}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                </a>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <a>
                  <Image
                    src={partnerImg2}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                  <Image
                    src={partnerHoverImg2}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                </a>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <a>
                  <Image
                    src={partnerImg3}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                  <Image
                    src={partnerHoverImg3}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                </a>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <a>
                  <Image
                    src={partnerImg4}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                  <Image
                    src={partnerHoverImg4}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                </a>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <a>
                  <Image
                    src={partnerImg5}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                  <Image
                    src={partnerHoverImg5}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                </a>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <a>
                  <Image
                    src={partnerImg6}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                  <Image
                    src={partnerHoverImg6}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                </a>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <a>
                  <Image
                    src={partnerImg7}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                  <Image
                    src={partnerHoverImg7}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                </a>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <a>
                  <Image
                    src={partnerImg8}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                  <Image
                    src={partnerHoverImg8}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                </a>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <a>
                  <Image
                    src={partnerImg9}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                  <Image
                    src={partnerHoverImg9}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                </a>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <a>
                  <Image
                    src={partnerImg10}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                  <Image
                    src={partnerHoverImg10}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                </a>
              </div>

              <div className="col-lg-2 col-md-3 col-6">
                <a>
                  <Image
                    src={partnerImg11}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                  <Image
                    src={partnerHoverImg11}
                    alt="cliente"
                    width={200}
                    height={71}
                  />
                </a>
              </div>

          
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p1} alt="cliente" width={200} height={72} />
      <Image src={p1h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p2} alt="cliente" width={200} height={72} />
      <Image src={p2h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p3} alt="cliente" width={200} height={72} />
      <Image src={p3h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p4} alt="cliente" width={200} height={72} />
      <Image src={p4h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p5} alt="cliente" width={200} height={72} />
      <Image src={p5h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p6} alt="cliente" width={200} height={72} />
      <Image src={p6h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p7} alt="cliente" width={200} height={72} />
      <Image src={p7h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p8} alt="cliente" width={200} height={72} />
      <Image src={p8h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p9} alt="cliente" width={200} height={72} />
      <Image src={p9h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p10} alt="cliente" width={200} height={72} />
      <Image src={p10h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p11} alt="cliente" width={200} height={72} />
      <Image src={p11h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p12} alt="cliente" width={200} height={72} />
      <Image src={p12h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p13} alt="cliente" width={200} height={72} />
      <Image src={p13h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p14} alt="cliente" width={200} height={72} />
      <Image src={p14h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p15} alt="cliente" width={200} height={72} />
      <Image src={p15h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p16} alt="cliente" width={200} height={72} />
      <Image src={p16h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p17} alt="cliente" width={200} height={72} />
      <Image src={p17h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p18} alt="cliente" width={200} height={72} />
      <Image src={p18h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p19} alt="cliente" width={200} height={72} />
      <Image src={p19h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p20} alt="cliente" width={200} height={72} />
      <Image src={p20h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p21} alt="cliente" width={200} height={72} />
      <Image src={p21h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p22} alt="cliente" width={200} height={72} />
      <Image src={p22h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p23} alt="cliente" width={200} height={72} />
      <Image src={p23h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p24} alt="cliente" width={200} height={72} />
      <Image src={p24h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p25} alt="cliente" width={200} height={72} />
      <Image src={p25h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p26} alt="cliente" width={200} height={72} />
      <Image src={p26h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p27} alt="cliente" width={200} height={72} />
      <Image src={p27h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p28} alt="cliente" width={200} height={72} />
      <Image src={p28h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p29} alt="cliente" width={200} height={72} />
      <Image src={p29h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p30} alt="cliente" width={200} height={72} />
      <Image src={p30h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p31} alt="cliente" width={200} height={72} />
      <Image src={p31h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p32} alt="cliente" width={200} height={72} />
      <Image src={p32h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p33} alt="cliente" width={200} height={72} />
      <Image src={p33h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p34} alt="cliente" width={200} height={72} />
      <Image src={p34h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p35} alt="cliente" width={200} height={72} />
      <Image src={p35h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p36} alt="cliente" width={200} height={72} />
      <Image src={p36h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p37} alt="cliente" width={200} height={72} />
      <Image src={p37h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p38} alt="cliente" width={200} height={72} />
      <Image src={p38h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p39} alt="cliente" width={200} height={72} />
      <Image src={p39h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p40} alt="cliente" width={200} height={72} />
      <Image src={p40h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p41} alt="cliente" width={200} height={72} />
      <Image src={p41h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p42} alt="cliente" width={200} height={72} />
      <Image src={p42h} alt="cliente" width={200} height={72} />
    </a>
  </div>
  <div className="col-lg-2 col-md-3 col-6">
    <a>
      <Image src={p43} alt="cliente" width={200} height={72} />
      <Image src={p43h} alt="cliente" width={200} height={72} />
    </a>
  </div>







            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
