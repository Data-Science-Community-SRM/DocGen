import { useContext } from "react";

import classes from "./Output.module.css";
import { EditContext } from "../../context/editContext";

const OutputComponent = () => {
  const editContext = useContext(EditContext);

  return (
    <>
      <div className={`${classes.wrapper} col-11 col-lg-8 mx-auto mt-4 p-2`}>
        <div id="outputPage" className={`col-12 mx-auto px-0`}>
          <div className={`${classes.imgContainer} col-12 mx-auto px-0`}>
            <img
              src={editContext.pageSrc}
              alt="bg-image"
              className="mx-auto px-0"
              Width="100%"
              Height="100%"
            />
          </div>
          <textarea
            type="text"
            className={classes.titleInput}
            placeholder="Welcome to your DocGen"
            style={{
              fontSize: `${editContext.headValues.headSize}px`,
              paddingTop: `${editContext.headValues.headTop}px`,
              paddingLeft: `${editContext.headValues.headLeft}px`,
              lineHeight: `${editContext.headValues.headLine}`,
              fontFamily: `${editContext.headValues.headFont}`,
            }}
          />
          <textarea
            type="text"
            className={classes.contentInput}
            placeholder="Paste your content here! You can type it too, but we know people."
            style={{
              fontSize: `${editContext.bodyValues.bodySize}px`,
              paddingTop: `${editContext.bodyValues.bodyTop}px`,
              paddingLeft: `${editContext.bodyValues.bodyLeft}px`,
              lineHeight: `${editContext.bodyValues.bodyLine}`,
              fontFamily: `${editContext.bodyValues.bodyFont}`,
            }}
          />
        </div>
      </div>
    </>
  );
};
export default OutputComponent;
