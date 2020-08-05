import { Component } from "preact";

import "../style/index.css";

import MainContainer from "./MainContainer/MainContainer";

export default class App extends Component {
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app" style={{ height: "100%" }}>
        <MainContainer />
      </div>
    );
  }
}
