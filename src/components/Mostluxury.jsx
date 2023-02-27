import { most__luxuay__left, most__luxuay__right } from "../assets/index.js";

export default function Mostluxury() {
  return (
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
          easy access to freeways, buses and trolleys. . Laundry is available on
          premises.Dream Home is a gated community with a great location.
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
  );
}
