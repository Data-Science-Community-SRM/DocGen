import { useRef } from "react";
import DomToImage from "dom-to-image";

import bgImage from "../../assets/ruled1.png";
import classes from "./Output.module.css";

const OutputComponent = ({ bodyValues, headValues }) => {
  const outputPage = useRef(null);

  const getImg = (e) => {
    e.preventDefault();
    DomToImage.toPng(outputPage.current)
      .then((dataUrl) => {
        const img = new Image();
        img.src = dataUrl;
        downloadURI(dataUrl, "testImage.png");
      })
      .catch((error) => {
        console.error("oops,something went wrong", error);
      });
  };

  const downloadURI = (uri, name) => {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div ref={outputPage} className={`${classes.wrapper} col-6 mx-auto px-0`}>
        <div className={`${classes.imgContainer} col-12 mx-auto`}>
          <img
            src={bgImage}
            alt="bg-image"
            width="100%"
            height="100%"
            className="mx-auto"
          />
        </div>
        <div className={`${classes.formGroup} col-12`}>
          <input type="text" />
          <textarea />
        </div>
      </div>
      <button onClick={getImg} style={{ position: "relative", bottom: "0px" }}>
        Download Png
      </button>
    </>
  );
};
export default OutputComponent;

{
  /* <input
  type="text"
  placeholder="Enter Title"
  style={{
    position: "absolute",
    top: "0",
    fontSize: `${headValues.headSize}px`,
    paddingTop: `${headValues.headTop}px`,
    paddingLeft: `${headValues.headLeft}px`,
    fontFamily: `${headValues.headFont}`,
    background: "transparent",
    border: "none",

    display: "block",
    width: "100%",
    height: "20%",
  }}
></input>
<textarea
  type="text"
  placeholder="Enter Content"
  style={{
    position: "absolute",
    bottom: "0",
    fontSize: `${bodyValues.bodySize}px`,
    paddingTop: `${bodyValues.bodyTop}px`,
    paddingLeft: `${bodyValues.bodyLeft}px`,
    lineHeight: `${bodyValues.bodyLine}rem`,
    fontFamily: `${bodyValues.bodyFont}`,
    paddingRight: "1rem",
    background: "transparent",
    border: "none",
    height: "80%",
    width: "100%",
    overflowY: "hidden",
  }}
/> */
}
