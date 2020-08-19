import style from "./Foot.css";
import logo from "../../assets/dslogo.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import medium from "../../assets/medium.png";
//  import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'
//  import { faMediumM } from "@fontawesome/free-brands-svg-icons";
//  import { faTwitter } from "@fontawesome/free-brands-svg-icons";
//  import { faLinkedinIn } from "@fontawesome/free-brands-svg-icons";
//  import { faInstagram } from "@fontawesome/free-brands-svg-icons";

const Foot = () => (
  <footer
    className="page-footer mt-5"
    style={{ width: "100vw", backgroundColor: "#0e1424 " }}
  >
   
    <div class="d-flex justify-content-around">
      <div
        className={`col-md-3 mb-md-0 mb-3 ${style.iconleft}`}
        style={{ alignSelf: "center"}}
      >
        <a
          href="https://www.instagram.com/dscommunity_srm/"
          target="_blank"
          rel="noreferrer noopener"
          className={style.alap}
        >
          <img src={insta} className={style.instalogo} alt="dscommunity-logo" />
        </a>
        <a
          href="https://twitter.com/dscommunitysrm"
          target="_blank"
          rel="noreferrer noopener"
          className={style.alap}
        >
          <img src={twitter} className={style.twitterlogo} alt="dscommunity-logo" />
        </a>
      </div>

      <div
        className="col-md-3 mb-md-0 ml-auto mr-5 mb-3 mt-3 "
        style={{ alignSelf: "center" }}
      >
        <a
          href="https://dscommunity.in"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={logo} className={style.dslogo} alt="dscommunity-logo" />
        </a>
      </div>

      <div
        className={`col-md-3 mb-md-0 mb-3 text-right ${style.iconright}`}
        style={{ alignSelf: "center"  }}
      >
        <a
          href="https://www.linkedin.com/company/datasciencecommunitysrm "
          target="_blank"
          rel="noreferrer noopener"
          className={style.alap}
        >
          <img src={linkedin} className={style.linkedinlogo} alt="dscommunity-logo" />
        </a>
        <a
          href="https://medium.com/data-science-community-srm"
          target="_blank"
          rel="noreferrer noopener"
          className={style.alap}
        >
          <img src={medium} className={style.mediumlogo} alt="dscommunity-logo" />
        </a>
      </div>
    </div>
<div className={`${style.mobicons}`}>
    <a
      href="https://www.instagram.com/dscommunity_srm/"
      target="_blank"
      rel="noreferrer noopener"
      className={style.amob}
    >
      <img src={insta} className={style.moblogos} alt="dscommunity-logo" />
    </a>
    <a
      href="https://twitter.com/dscommunitysrm"
      target="_blank"
      rel="noreferrer noopener"
      className={style.amob}
    >
      <img src={twitter} className={style.moblogos} alt="dscommunity-logo" />
    </a>
    <a
      href="https://www.linkedin.com/company/datasciencecommunitysrm "
      target="_blank"
      rel="noreferrer noopener"
      className={style.amob}
    >
      <img src={linkedin} className={style.linkedinlogomob} alt="dscommunity-logo" />
    </a>
    <a
    href="https://medium.com/data-science-community-srm"
    target="_blank"
      rel="noreferrer noopener"
      className={style.amob}
    >
      <img src={medium} className={style.moblogos} alt="dscommunity-logo" />
    </a>
    </div>
    <hr className="clearfix w-100 d-md-none"></hr>
    <div className={`${style.made} footer-copyright text-center py-3 `}>
      Made with &#9749; by your friends at the <b>Data Science Community</b>
    </div>
  </footer>
);
export default Foot;
