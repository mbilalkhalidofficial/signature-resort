import React from "react";

import Locationpointer from "../components/locationpointer";
import Mostluxury from "../components/Mostluxury";
import Pakistanfirst from "../components/Pakistanfirst";
import HomeSection from "../components/HomeSection";
import Locationfeatures from "../components/Locationfeatures";
import Nextpagelink from "../components/Nextpagelink";
import Aboutsection from "../components/Aboutsection";
import Ourproject from "../components/Ourproject";

export default function index() {
  return (
    <>
      <HomeSection />
      <Mostluxury />
      <Pakistanfirst />
      <Locationpointer />
      <Locationfeatures />
      <Nextpagelink />
      <Aboutsection />
      <Ourproject />
    </>
  );
}
