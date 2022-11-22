import React from "react";
import most__luxuay__left from "../assets/most__luxuay__left.png";
import most__luxuay__right from "../assets/most__luxuay__right.png";
import other__project from "../assets/other__project.png";
import pakistan__left from "../assets/pakistan__left.png";
import pakistan__right from "../assets/pakistan__right.png";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function index() {
  return (
    <>
      <div className="most__luxury">
        <div className="most__luxury__left">
          <div className="most__luxury__left__img">
            <img
              className="most__luxury__left__image"
              src={most__luxuay__left}
              alt=""
            />
          </div>
        </div>
        <div className="most__luxury__right">
          <div className="most__luxury__right__main__heading">
            <span>Most luxury </span> resorts for more discering
          </div>
          <div className="most__luxury__right__para">
            Dream Home is a gated community with a great location. Located
            downtown, you’re within walking distance of Parks, and the best
            shopping, dining and entertainment Getting around is a breeze, with
            easy access to freeways, buses and trolleys. . Laundry is available
            on premises.Dream Home is a gated community with a great location.
            Located downtown, you’re within walking distance of Parks, and the
            best shopping, dining and entertainment Getting around is a breeze,
            with easy access to freeways, buses and trolleys. . Laundry is
            available on premises.
          </div>
          <div className="most__luxury__right__button">Read More</div>
          <div className="most__luxury__right__pics">
            <div className="most__luxury__right__picture">
              <img
                className="most__luxury__right__picture__img"
                src={most__luxuay__right}
                alt=""
              />
            </div>
            <div className="most__luxury__right__picture">
              <img
                className="most__luxury__right__picture__img"
                src={most__luxuay__right}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="our__best__luxury">
        <div className="our__best__luxury__left">
          <div className="our__best__luxury__left__text">
            Our best luxury features
          </div>
          <div className="our__best__luxury__left__heading">
            <span>Pakistan first</span> theme based resort
          </div>

          <div className="our__best__luxury__card__card_main">
            <div className="our__best__luxury__card">
              <div className="our__best__luxury__card__left">
                <img
                  className="our__best__luxury__card__left__img"
                  src={pakistan__left}
                  alt=""
                />
              </div>
              <div className="our__best__luxury__card__right">
                <div className="our__best__luxury__card__right__text">
                  Club facility
                </div>
                <div className="our__best__luxury__card__right__para">
                  Dream Home is a gated community with a great location located
                  downtown.
                </div>
              </div>
            </div>
            <div className="our__best__luxury__card">
              <div className="our__best__luxury__card__left">
                <img
                  className="our__best__luxury__card__left__img"
                  src={pakistan__left}
                  alt=""
                />
              </div>
              <div className="our__best__luxury__card__right">
                <div className="our__best__luxury__card__right__text">
                  Club facility
                </div>
                <div className="our__best__luxury__card__right__para">
                  Dream Home is a gated community with a great location located
                  downtown.
                </div>
              </div>
            </div>
          </div>
          <div className="our__best__luxury__card">
            <div className="our__best__luxury__card__left">
              <img
                className="our__best__luxury__card__left__img"
                src={pakistan__left}
                alt=""
              />
            </div>
            <div className="our__best__luxury__card__right">
              <div className="our__best__luxury__card__right__text">
                Club facility
              </div>
              <div className="our__best__luxury__card__right__para">
                Dream Home is a gated community with a great location located
                downtown.
              </div>
            </div>
          </div>
        </div>
        <div className="our__best__luxury__right">
          <div className="our__best__luxury__right__img">
            <img
              className="our__best__luxury__right__image"
              src={pakistan__right}
              alt=""
            />
          </div>
        </div>
      </div>
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
              slidesPerView={3}
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
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
