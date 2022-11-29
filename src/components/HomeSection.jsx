import React from "react";
import { homesectionimg } from "../assets/index.js";

export default function HomeSection() {
  return (
    <div className="homesection ">
      <div className="homesection__left">
        <div className="homesection__left___content">
          <div className="homesection__left__heading">
            <span> Most luxury </span> resorts for more discering Customers
          </div>
          <div className="homesection__left__info">
            Dream Home is a gated community with a great location. Located
            downtown, you’re within walking distance of Parks, and the best
            shopping, dining and entertainment Getting around is a breeze, with
            easy access to freeways, buses and trolleys. . Laundry is available
            on premises.
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
  );
}
