import { nextpageimg } from "../assets/index.js";

export default function Nextpagelink() {
  return (
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
  );
}
