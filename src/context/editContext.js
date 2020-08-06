import React, { useState } from "react";
import DomToImage from "dom-to-image";

export const EditContext = React.createContext();

const EditContextProvider = (props) => {
  const [isBody, setIsBody] = useState(true);

  const [headValues, setHeadValues] = useState({
    headSize: 24,
    headFont: null,
    headLeft: null,
    headTop: null,
    headLine: null,
  });

  const [bodyValues, setBodyValues] = useState({
    bodySize: null,
    bodyFont: null,
    bodyLeft: null,
    bodyTop: null,
    bodyLine: null,
  });

  const isBodyHandler = () => {
    setIsBody(!isBody);
  };

  const onValueChange = (e) => {
    if (isBody) {
      setBodyValues({ ...bodyValues, [e.target.name]: e.target.value });
      console.log("test");
    } else {
      setHeadValues({
        ...headValues,
        [e.target.name]: e.target.value,
      });
      console.log("testhead");
    }
  };

  const downloadImg = (e) => {
    e.preventDefault();
    DomToImage.toPng(document.getElementById("outputPage"))
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
    <EditContext.Provider
      value={{
        isBody,
        headValues,
        bodyValues,
        onValueChange,
        isBodyHandler,
        downloadImg,
      }}
    >
      {props.children}
    </EditContext.Provider>
  );
};

export default EditContextProvider;
