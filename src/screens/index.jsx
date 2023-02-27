import Aboutsection from "../components/Aboutsection";
import HomeSection from "../components/HomeSection";
import Locationfeatures from "../components/Locationfeatures";
import Locationpointer from "../components/locationpointer";
import Mostluxury from "../components/Mostluxury";
import Nextpagelink from "../components/Nextpagelink";
import Ourproject from "../components/Ourproject";
import Pakistanfirst from "../components/Pakistanfirst";

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
