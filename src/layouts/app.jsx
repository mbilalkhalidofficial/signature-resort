import { Footer, Header } from "components";

import { Outlet } from "react-router-dom";

export default function App({ not404 }) {
  return (
    <>
      {not404 ? <Header /> : null}
      <Outlet />
      {not404 ? <Footer /> : null}
    </>
  );
}
