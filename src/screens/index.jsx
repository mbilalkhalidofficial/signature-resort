// import React from "react";
import other__project from "../assets/other__project.png";
// import locationfeaturesimg from "../assets/locationfeaturesimg.png";
// import nextpageimg from "../assets/nextpageimg.png";
// import basedright from "../assets/basedright.png";
// import basedleft from "../assets/basedleft.png";
// import homesectionimg from "../assets/homesectionimg.png";
// import aboutjsevenimg from "../assets/aboutjsevenimg.png";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Locationpointer from "../components/locationpointer";
import Mostluxury from "../components/Mostluxury";
import Pakistanfirst from "../components/Pakistanfirst";
import HomeSection from "../components/HomeSection";
import Locationfeatures from "../components/Locationfeatures";
import Nextpagelink from "../components/Nextpagelink";
import Aboutsection from "../components/Aboutsection";

export default function index() {
  const [slidesPerView, setSlidesPerView] = useState(6);
  function changeSlidesPerView() {
    if (window.innerWidth < 470) {
      setSlidesPerView(1.5);
    } else if (window.innerWidth < 900) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 1340) {
      setSlidesPerView(3);
    } else if (window.innerWidth < 1600) {
      setSlidesPerView(2.5);
    } else if (window.innerWidth < 4000) {
      setSlidesPerView(3);
    }
  }
  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);
  return (
    <>
      <HomeSection />
      <Mostluxury />
      <Pakistanfirst />
      <Locationpointer />
      <Locationfeatures />
      <Nextpagelink />
      <Aboutsection />

      <div className="our__project">
        <div className="our__project__left">
          <div className="our__project__left__heading">
            Other <span> Projects</span>
          </div>
        </div>
        <div className="our__project__right">
          <div>
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={50}
              slidesPerView={slidesPerView}
              navigation
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <img
                  className="most__luxury__left__image"
                  src={other__project}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="most__luxury__left__image"
                  src={other__project}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="most__luxury__left__image"
                  src={other__project}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="most__luxury__left__image"
                  src={other__project}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="most__luxury__left__image"
                  src={other__project}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="most__luxury__left__image"
                  src={other__project}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="most__luxury__left__image"
                  src={other__project}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
