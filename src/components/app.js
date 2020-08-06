import { Component } from "preact";

import "../style/index.css";
import "../style/sliders.css";
import logo from "../assets/dslogo.png";
import MainContainer from "./MainContainer/MainContainer";
import EditContextProvider from "../context/editContext";

export default class App extends Component {
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <>
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
          className="col-2 col-md-1"
        >
          <img src={logo} alt="dscommunity-logo" style={{ width: "80%" }} />
        </a>
        <EditContextProvider>
          <div id="app" style={{ height: "100%" }}>
            <MainContainer />
          </div>
        </EditContextProvider>
      </>
    );
  }
}
