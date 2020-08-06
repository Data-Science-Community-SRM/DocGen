import React, { useState } from "react";

export const EditContext = React.createContext();

const EditContextProvider = (props) => {
  const [isBody, setIsBody] = useState(true);

  const [headFormData, setHeadFormData] = useState({
    headSize: null,
    headFont: null,
    headLeft: null,
    headTop: null,
    headLine: null,
  });

  const [bodyFormData, setBodyFormData] = useState({
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
      setBodyFormData({ ...bodyFormData, [e.target.name]: e.target.value });
      console.log("test");
    } else {
      setHeadFormData({
        ...headFormData,
        [e.target.name]: e.target.value,
      });
      console.log("testhead");
    }
  };

  return (
    <EditContext.Provider
      value={{
        isBody,
        headFormData,
        bodyFormData,
        onValueChange,
        isBodyHandler,
      }}
    >
      {props.children}
    </EditContext.Provider>
  );
};

export default EditContextProvider;
