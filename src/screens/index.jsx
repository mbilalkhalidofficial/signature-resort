// import React from "react";
import most__luxuay__left from "../assets/most__luxuay__left.png";
import most__luxuay__right from "../assets/most__luxuay__right.png";
import other__project from "../assets/other__project.png";

import locationfeaturesimg from "../assets/locationfeaturesimg.png";
import nextpageimg from "../assets/nextpageimg.png";
// import pakistan__left from "../assets/pakistan__left.png";
// import pakistan__right from "../assets/pakistan__right.png";
import basedright from "../assets/basedright.png";
import basedleft from "../assets/basedleft.png";
import homesectionimg from "../assets/homesectionimg.png";
import aboutjsevenimg from "../assets/aboutjsevenimg.png";
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Fade from "react-reveal/Fade";
import Locationpointer from "../components/locationpointer";

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
      <div className="homesection ">
        <div className="homesection__left">
          <div className="homesection__left___content">
            <div className="homesection__left__heading">
              <span> Most luxury </span> resorts for more discering Customers
            </div>
            <div className="homesection__left__info">
              Dream Home is a gated community with a great location. Located
              downtown, you’re within walking distance of Parks, and the best
              shopping, dining and entertainment Getting around is a breeze,
              with easy access to freeways, buses and trolleys. . Laundry is
              available on premises.
            </div>
            <button className="homesection__left__button">Lead form</button>
          </div>
        </div>
        <div className="homesection__right">
          <div className="homesection__right__content">
            <div className="homesection__right__img">
              <img src={homesectionimg} alt="homesectionimg" />
            </div>
          </div>
        </div>
      </div>

      <div className="most__luxury">
        <Fade bottom>
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
              shopping, dining and entertainment Getting around is a breeze,
              with easy access to freeways, buses and trolleys. . Laundry is
              available on premises.Dream Home is a gated community with a great
              location. Located downtown, you’re within walking distance of
              Parks, and the best shopping, dining and entertainment Getting
              around is a breeze, with easy access to freeways, buses and
              trolleys. . Laundry is available on premises.
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
        </Fade>
      </div>

      {/* <div className="our__best__luxury">
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
      </div> */}
      <section className="ourbest">
        <Fade bottom>
          <div className="ourbest__left">
            <div className="ourbest__left__content">
              <div className="ourbest__left__text">
                Our best luxury features
              </div>
              <div className="ourbest__left__heading">
                <span>Pakistan first</span> theme based resort
              </div>

              <div className="our__best__luxury__card__card_main">
                <div className="our__best__luxury__card">
                  <div className="our__best__luxury__card__left">
                    <img
                      className="our__best__luxury__card__left__img"
                      src={basedleft}
                      alt="basedleft"
                    />
                  </div>
                  <div className="our__best__luxury__card__right">
                    <div className="our__best__luxury__card__right__text">
                      Club facility
                    </div>
                    <div className="our__best__luxury__card__right__para">
                      Dream Home is a gated community with a great location
                      located downtown.
                    </div>
                  </div>
                </div>
                <div className="our__best__luxury__card">
                  <div className="our__best__luxury__card__left">
                    <img
                      className="our__best__luxury__card__left__img"
                      src={basedleft}
                      alt="basedleft"
                    />
                  </div>
                  <div className="our__best__luxury__card__right">
                    <div className="our__best__luxury__card__right__text">
                      Club facility
                    </div>
                    <div className="our__best__luxury__card__right__para">
                      Dream Home is a gated community with a great location
                      located downtown.
                    </div>
                  </div>
                </div>
                <div className="our__best__luxury__card">
                  <div className="our__best__luxury__card__left">
                    <img
                      className="our__best__luxury__card__left__img"
                      src={basedleft}
                      alt="basedleft"
                    />
                  </div>
                  <div className="our__best__luxury__card__right">
                    <div className="our__best__luxury__card__right__text">
                      Club facility
                    </div>
                    <div className="our__best__luxury__card__right__para">
                      Dream Home is a gated community with a great location
                      located downtown.
                    </div>
                  </div>
                </div>
                <div className="our__best__luxury__card">
                  <div className="our__best__luxury__card__left">
                    <img
                      className="our__best__luxury__card__left__img"
                      src={basedleft}
                      alt="basedleft"
                    />
                  </div>
                  <div className="our__best__luxury__card__right">
                    <div className="our__best__luxury__card__right__text">
                      Club facility
                    </div>
                    <div className="our__best__luxury__card__right__para">
                      Dream Home is a gated community with a great location
                      located downtown.
                    </div>
                  </div>
                </div>
                <div className="our__best__luxury__card">
                  <div className="our__best__luxury__card__left">
                    <img
                      className="our__best__luxury__card__left__img"
                      src={basedleft}
                      alt="basedleft"
                    />
                  </div>
                  <div className="our__best__luxury__card__right">
                    <div className="our__best__luxury__card__right__text">
                      Club facility
                    </div>
                    <div className="our__best__luxury__card__right__para">
                      Dream Home is a gated community with a great location
                      located downtown.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ourbest__right">
            <div className="ourbest__right__content">
              <img
                className="ourbest__right__img"
                src={basedright}
                alt="basedright"
              />
            </div>
          </div>
        </Fade>{" "}
      </section>
      <Locationpointer />

      <div className="location__features">
        <div className="location__features__left">
          <div className="location__features__left__heading">
            <span>Location</span> features
          </div>
          <div className="location__features__left__para">
            Dream Home is a gated community with a great location. Located
            downtown, you’re within walking distance of Parks, and the best
            shopping, dining and entertainment Getting around is a breeze, with
            easy access to freeways, buses and trolleys. . Laundry is available
            on premises.
          </div>
          <div className="location__features__left___content">
            <div className="location__features__left__content_text">
              Located just in front of tourism highway.
            </div>
            <div className="location__features__left__content_text">
              Just 1.5 km away from Patriata Chair Lift.
            </div>
            <div className="location__features__left__content_text">
              Sea level Elevation from 4000 to 6000 feet.
            </div>
          </div>
          <div className="most__luxury__right__button">Read More</div>
        </div>
        <div className="most__luxury__left">
          <div className="most__luxury__left__content">
            <img
              className="most__luxury__img"
              src={locationfeaturesimg}
              alt="locationfeaturesimg"
            />
          </div>
        </div>
      </div>

      {/* <section className="locationfeatures">
        <div className="locationfeatures__left">
          <div className="locationfeatures__left__content">
            <div className="locationfeatures__left__heading">
              <span> Location </span> features
            </div>
            <div className="locationfeatures__left__info">
              Dream Home is a gated community with a great location. Located
              downtown, you’re within walking distance of Parks, and the best
              shopping, dining and entertainment Getting around is a breeze,
              with easy access to freeways, buses and trolleys. . Laundry is
              available on premises.
            </div>
            <div className="locationfeatures__left__points">
              <a href="#">
                <span className="spanpoint"></span> Located just in front of
                tourism highway.
              </a>
              <a href="#">
                <span className="spanpoint"></span> Located just in front of
                tourism highway.
              </a>
              <a href="#">
                <span className="spanpoint"></span> Located just in front of
                tourism highway.
              </a>
            </div>
          </div>
        </div>
        <div className="locationfeatures__right">
          <div className="locationfeatures__right__content">
            <div className="locationfeatures__right__img">
              <img src={locationfeaturesimg} alt="locationfeaturesimg" />
            </div>
          </div>
        </div>
      </section> */}
      <section className="nextpagelink">
        <div className="Overlay__Cards">
          <div className="Overlay__Card__con">
            <div className="overlay__img">
              <div className="Overlay__Card__img">
                <img src={nextpageimg} alt="overlaycard" />
              </div>
            </div>
            <div className="overlay__heading">Signature villa</div>
          </div>
          <div className="Overlay__Card__con">
            <div className="overlay__img">
              <div className="Overlay__Card__img">
                <img src={nextpageimg} alt="overlaycard" />
              </div>
            </div>
            <div className="overlay__heading">Hotel suite</div>
          </div>
          <div className="Overlay__Card__con">
            <div className="overlay__img">
              <div className="Overlay__Card__img">
                <img src={nextpageimg} alt="overlaycard" />
              </div>
            </div>
            <div className="overlay__heading">Hotel Apartment</div>
          </div>
        </div>
      </section>
      <section className="aboutjseven">
        <div className="aboutjseven__left">
          <div className="aboutjseven__left__content">
            <div className="aboutjseven__left__img">
              <img src={aboutjsevenimg} alt="aboutjsevenimg" />
            </div>
          </div>
        </div>
        <div className="aboutjseven__right">
          <div className="aboutjseven__right__content">
            <div className="aboutjseven__right__heading">
              <span> About </span> J7
            </div>
            <div className="aboutjseven__right__info">
              Dream Home is a gated community with a great location. Located
              downtown, you’re within walking distance of Parks, and the best
              shopping, dining and entertainment Getting around is a breeze,
              with easy access to freeways, buses and trolleys. . Laundry is
              available on premises.Dream Home is a gated community with a great
              location. Located downtown, you’re within walking distance of
              Parks, and the best shopping, dining and entertainment Getting
              around is a breeze, with easy access to freeways, buses and
              trolleys. . Laundry is available on premises.
            </div>
            <div className="most__luxury__right__button">Read More</div>
          </div>
        </div>
      </section>
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
