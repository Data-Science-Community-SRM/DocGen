import { Component } from "preact";

import "../style/index.css";
import "../style/sliders.css";
import logo from "../assets/dslogo.png";
import penlogo from "../assets/penlogo.png";
import MainContainer from "./MainContainer/MainContainer";
import Footer from "./Footer/Footer";
import EditContextProvider from "../context/editContext";

export default class App extends Component {
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <>
        <div>
          <img
            src={penlogo}
            className="col-2 col-md-1 d-none d-lg-block"
            alt="dscommunity-logo"
            style={{
              width: "100%",
              position: "fixed",
              zIndex: "1000",
              left: "0rem",
              top: "1rem",
            }}
          />

          <a
            href="https://dscommunity.in"
            target="_blank"
            rel="noreferrer noopener"
            style={{
              position: "fixed",
              zIndex: "1000",
              right: "-1rem",
              top: "1rem",
            }}
            className="col-2 col-md-1 d-none d-lg-block"
          >
            <img src={logo} alt="dscommunity-logo" style={{ width: "80%" }} />
          </a>
          <EditContextProvider>
            <div id="app" style={{ height: "100%" }}>
              <MainContainer />
            </div>
          </EditContextProvider>
        </div>
        <Footer />
      </>
    );
  }
}
