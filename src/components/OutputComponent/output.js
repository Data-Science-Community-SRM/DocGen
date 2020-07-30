import { useRef, Fragment } from "react";

import DomToImage from "dom-to-image";

const OutputComponent = ({ text_value, head_value }) => {
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
    <Fragment>
      <div
        ref={outputPage}
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <h1
          style={{
            fontSize: `${head_value.headSize}px`,
            marginTop: `${head_value.headTop}px`,
            marginLeft: `${head_value.headLeft}px`,
            fontFamily: `${text_value.headFont}`,
          }}
        >
          Tom Riddle's Diary
        </h1>
        <p
          style={{
            fontSize: `${text_value.bodySize}px`,
            marginTop: `${text_value.bodyTop}px`,
            marginLeft: `${text_value.bodyLeft}px`,
            fontFamily: `${text_value.bodyFont}px`,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut orci
          ligula. Cras vehicula mi sit amet porta lobortis. Morbi vel ultrices
          elit, quis lobortis eros. Phasellus hendrerit ex sed tempus aliquam.
          Fusce scelerisque, sem vel tristique hendrerit, urna erat eleifend
          est, vitae cursus tellus tellus at massa. In et malesuada ipsum.
          Nullam commodo tellus vitae blandit fringilla. Donec vestibulum luctus
          tellus, non malesuada turpis luctus vitae. Fusce ac nisi vitae dolor
          egestas aliquet eget in ligula. Nunc in tempus ligula, non commodo
          neque.
        </p>
      </div>
      <button onClick={getImg}>Download Png</button>
    </Fragment>
  );
};
export default OutputComponent;
