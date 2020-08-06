import { Component } from "preact";

import "../style/index.css";
import "../style/sliders.css";
import MainContainer from "./MainContainer/MainContainer";
import EditContextProvider from "../context/editContext";

export default class App extends Component {
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <EditContextProvider>
        <div id="app" style={{ height: "100%" }}>
          <MainContainer />
        </div>
      </EditContextProvider>
    );
  }
}
