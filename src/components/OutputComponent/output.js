import { useRef, Fragment } from "react";

import "./style.css";
import DomToImage from "dom-to-image";

const OutputComponent = ({ text_value, head_value }) => {
  const ref = useRef(null);

  const getImg = (e) => {
    e.preventDefault();
    DomToImage.toPng(ref.current)
      .then((dataUrl) => {
        const img = new Image();
        img.src = dataUrl;
        downloadURI(dataUrl, "type2.png");
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
        id="output"
        ref={ref}
        style={{
          fontFamily: head_value.fontType1,
        }}
      >
        <p
          style={{
            fontSize: head_value.size1 + "%",
            marginTop: head_value.top1 + "%",
            marginLeft: head_value.left1 + "%",
            fontFamily: head_value.fontType1,
          }}
        >
          Tom Riddle's Diary
        </p>
        <p
          style={{
            fontSize: text_value.size + "%",
            marginTop: text_value.top + "%",
            marginLeft: text_value.left + "%",
            lineHeight: text_value.line,
            fontFamily: text_value.fontType,
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
      <button onClick={(e) => getImg(e)}>Download Png</button>
    </Fragment>
  );
};
export default OutputComponent;
