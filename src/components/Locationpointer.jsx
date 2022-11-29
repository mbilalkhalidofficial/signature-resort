import React, { useEffect, useState } from "react";
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";

export default function Locationpointer() {
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
  return (
    <section className="locationpointer">
      <div className="locationpointer__left">
        <div className="locationpointer__left__Content">
          <Swiper
            // install Swiper modules
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
      <div className="locationpointer__right">
        <div className="locationpointer__right__content">
          <div className="locationpointer__right__heading">
            <span> Location </span> pointer
          </div>
          <div className="locationpointer__right__info">
            <a href="#">
              <span>1.</span> Tourism highway 0 km
            </a>
            <a href="#">
              <span>2.</span> Patriata Chairlift just 1.5 km away
            </a>
            <a href="#">
              <span>3.</span> Gloria Jean located at just 7 km
            </a>
            <a href="#">
              <span>4.</span> Murree Express way just at 7 km
            </a>
            <a href="#">
              <span>5.</span> McDonald’s Murree 8 km
            </a>
            <a href="#">
              <span>6.</span> Mall Road 12 km
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
