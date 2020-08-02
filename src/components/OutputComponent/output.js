import { useRef } from "react";
import DomToImage from "dom-to-image";

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

  function downloadURI(uri, name) {
    const link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <div ref={outputPage}>
        <div
          style={{
            position: "relative",
            backgroundImage: "url(../../assets/ruled1.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100vh 100%",
            height: "100vh",
            width: "100%",

          }}
        >
          <h1
            style={{
              position: "absolute",
              fontSize: `${headValues.headSize}px`,
              top: `${headValues.headTop}px`,
              left: `${headValues.headLeft}px`,
              fontFamily: `${headValues.headFont}`,
            }}
          >
     Tom Riddle's Diary
          </h1>
          <p
            style={{
              position: "absolute",
              fontSize: `${bodyValues.bodySize}px`,
              top: `${bodyValues.bodyTop}px`,
              left: `${bodyValues.bodyLeft}px`,
              lineHeight: `${bodyValues.bodyLine}rem`,
              fontFamily: `${bodyValues.bodyFont}px`,
              paddingRight: "1rem"
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut orci
            ligula. Cras vehicula mi sit amet porta lobortis. Morbi vel ultrices
            elit, quis lobortis eros. Phasellus hendrerit ex sed tempus aliquam.
            Fusce scelerisque, sem vel tristique hendrerit, urna erat eleifend
            est, vitae cursus tellus tellus at massa. In et malesuada ipsum.
            Nullam commodo tellus vitae blandit fringilla. Donec vestibulum
            luctus tellus, non malesuada turpis luctus vitae. Fusce ac nisi
            vitae dolor egestas aliquet eget in ligula. Nunc in tempus ligula,
            non commodo neque.
          </p>
        </div>
      </div>
      <button onClick={getImg} style={{ position: "fixed", bottom: "10px" }}>
        Download Png
      </button>
    </>
  );
};
export default OutputComponent;
