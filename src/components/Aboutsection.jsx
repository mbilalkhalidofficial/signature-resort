import { aboutjsevenimg } from "../assets/index.js";

export default function Aboutsection() {
  return (
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
            shopping, dining and entertainment Getting around is a breeze, with
            easy access to freeways, buses and trolleys. . Laundry is available
            on premises.Dream Home is a gated community with a great location.
            Located downtown, you’re within walking distance of Parks, and the
            best shopping, dining and entertainment Getting around is a breeze,
            with easy access to freeways, buses and trolleys. . Laundry is
            available on premises.
          </div>
          <div className="most__luxury__right__button">Read More</div>
        </div>
      </div>
    </section>
  );
}
