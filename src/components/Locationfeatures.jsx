import React from "react";
import { locationfeaturesimg } from "../assets/index.js";
export default function Locationfeatures() {
  return (
    <div className="location__features">
      <div className="location__features__left">
        <div className="location__features__left__heading">
          <span>Location</span> features
        </div>
        <div className="location__features__left__para">
          Dream Home is a gated community with a great location. Located
          downtown, you’re within walking distance of Parks, and the best
          shopping, dining and entertainment Getting around is a breeze, with
          easy access to freeways, buses and trolleys. . Laundry is available on
          premises.
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
  );
}
