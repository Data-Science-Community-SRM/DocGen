import { h, Component } from "preact";

import "../style/index.css";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Profile from "../routes/profile";

import MainContainer from "./MainContainer/MainContainer";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <MainContainer />
      </div>
    );
  }
}
