import React, { useState } from "react";
import DomToImage from "dom-to-image";

export const EditContext = React.createContext();

const EditContextProvider = (props) => {
  const aImagePrefix = "../../assets/";
  const ImageNameMap = {"Ruled1": "Ruled1.png","Ruled2": "Ruled2.jpg", 
  "OnlyMargin":"OnlyMargin.jpg","Blank1":"Blank1.png","Blank2":"Blank2.jpg"};
  const [isBody, setIsBody] = useState(true);

  const [pageSrc, setPageSrc] = useState(`${aImagePrefix}OnlyMargin.jpg`);
  const [headValues, setHeadValues] = useState({
    headSize: null,
    headTop: null,
    headLeft: null,
    headLine: null,
    headFont: "HomemadeApple",
  });

  const [bodyValues, setBodyValues] = useState({
    bodySize: null,
    bodyTop: null,
    bodyLeft: null,
    bodyLine: null,
    bodyFont: "HomemadeApple",
  });

  const isBodyHandler = () => {
    setIsBody(!isBody);
  };

  const pageSrcHandler = (e)=>{
    
    
    setPageSrc(`${aImagePrefix}${ImageNameMap[e.target.value]}`);
  }

  const onValueChange = (e) => {
    if (isBody) {
      setBodyValues({ ...bodyValues, [e.target.name]: e.target.value });
    } else {
      setHeadValues({
        ...headValues,
        [e.target.name]: e.target.value,
      });
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
        pageSrc,
        onValueChange,
        isBodyHandler,
        downloadImg,
        pageSrcHandler,
        
      }}
    >
      {props.children}
    </EditContext.Provider>
  );
};

export default EditContextProvider;
