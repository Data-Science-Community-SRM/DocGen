import React, { useState } from "react";

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

  return (
    <EditContext.Provider
      value={{
        isBody,
        headValues,
        bodyValues,
        onValueChange,
        isBodyHandler,
      }}
    >
      {props.children}
    </EditContext.Provider>
  );
};

export default EditContextProvider;
