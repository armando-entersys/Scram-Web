"use client";

import React from "react";
import Image from "next/image";

import worksImg1 from "/public/images/scram/oficina/1.webp";
import worksImg2 from "/public/images/scram/oficina/2.webp";
import worksImg3 from "/public/images/scram/oficina/3.webp";
import worksImg4 from "/public/images/scram/oficina/4.webp";
import worksImg5 from "/public/images/scram/oficina/5.webp";
import worksImg6 from "/public/images/scram/oficina/6.webp";
import worksImg7 from "/public/images/scram/oficina/9.webp";
import worksImg8 from "/public/images/scram/oficina/8.webp";

const Gallery1 = () => {
  return (
    <>
      <div className="project-details-area ptb-80">
        <div className="container">
          <div className="row">
           

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="project-details-image">
                <Image
                  src={worksImg3}
                  alt="work"
                  width={640}
                  height={550}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="project-details-image">
                <Image
                  src={worksImg4}
                  alt="work"
                  width={640}
                  height={550}
                />
              </div>
            </div>


            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="project-details-image">
                <Image
                  src={worksImg5}
                  alt="work"
                  width={640}
                  height={550}
                />
              </div>
            </div>


            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="project-details-image">
                <Image
                  src={worksImg6}
                  alt="work"
                  width={640}
                  height={550}
                />
              </div>
            </div>


            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="project-details-image">
                <Image
                  src={worksImg7}
                  alt="work"
                  width={640}
                  height={550}
                />
              </div>
            </div>


            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="project-details-image">
                <Image
                  src={worksImg8}
                  alt="work"
                  width={640}
                  height={550}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery1
