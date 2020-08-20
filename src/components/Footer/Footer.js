import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMediumM,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import logo from "../../assets/dslogo.png";
import classes from "./Footer.module.css";

const Footer = () => (
  <footer class={`${classes.pagefooter} text-center pb-1 mt-5 pt-5`}>
    <div class="col-12 col-lg-6 mx-auto">
      <div class="col-12 row mx-auto">
        <div class="col-12 mx-auto d-block d-lg-none">
          <div class="col-6 mx-auto">
            <a href="https://dscommunity.in">
              <img src={logo} class="mx-auto col-12" width="100%" />
            </a>
          </div>
        </div>

        <div class="col-6 col-lg-4 row mx-auto">
          <div class="col-6 mx-auto mt-5 pt-3">
            <a
              href="https://medium.com/data-science-community-srm"
              target="_blank"
              rel="noopener noreferrer"
              class={`${classes.link} mt-lg-5 mx-auto`}
            >
              <FontAwesomeIcon icon={faMediumM} />
            </a>
          </div>
          <div class="col-6 mx-auto mt-5 pt-3">
            <a
              href="https://twitter.com/dscommunitysrm"
              target="_blank"
              rel="noopener noreferrer"
              class={`${classes.link} mt-lg-5 mx-auto`}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        <div class="col-4 mx-auto d-none d-lg-block">
          <a href="https://dscommunity.in">
            <img src={logo} class="mx-auto col-12" width="100%" />
          </a>
        </div>

        <div class="col-6 col-lg-4 row mx-auto">
          <div class="col-6 mx-auto mt-5 pt-3">
            <a
              href="https://www.linkedin.com/company/dscommunitysrm?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              class={`${classes.link} mt-lg-5 mx-auto`}
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <div class="col-6 mx-auto mt-5 pt-3">
            <a
              href="https://www.instagram.com/dscommunity_srm/"
              target="_blank"
              rel="noopener noreferrer"
              class={`${classes.link} mt-lg-5 mx-auto`}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class={`${classes.quote} col-12 text-center mt-3`}>
      <p>
        Made with{" "}
        <span role="img" aria-label="jsx-a11y/hot-beverage">
          ☕
        </span>{" "}
        by your colleagues at the <strong>Data Science Community</strong>.
      </p>
    </div>
  </footer>
);
export default Footer;
