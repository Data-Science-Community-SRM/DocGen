import { useState } from "react";

import style from "./MainContainer.css";
import DownloadButton from "../Buttons/DownloadButton/DownloadBtn";
import Output from "../OutputComponent/Output";

import imageName from "../../assets/dslogo.png";

const MainContainer = () => {
  const [bodyFormData, setBodyFormData] = useState({
    bodySize: 16,
    bodyFont: "'Helvetica Neue', arial, sans-serif",
    bodyLeft: 0,
    bodyTop: 100,
    bodyLine: 2,
  });

  const [headFormData, setHeadFormData] = useState({
    headSize: 32,
    headFont: "'Helvetica Neue', arial, sans-serif",
    headLeft: 0,
    headTop: 0,
    headLine: 1,
  });

  const [isBody, setIsBody] = useState(true);

  const onValueChange = (e) => {
    if (isBody) {
      setBodyFormData({ ...bodyFormData, [e.target.name]: e.target.value });
    } else {
      setHeadFormData({
        ...headFormData,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <>
      <div class={`row col-12`}>
        <div class={`col-6`}>
          <h1 class="heading1 primary">Input</h1>
          <div class={style.outputDisplay}>
            <div
              style={{
                overflow: "hidden",
                height: "100%",
                width: "100%",
              }}
            >
              <Output
                bodyValues={bodyFormData}
                headValues={headFormData}
                bgImage={imageName}
              />
            </div>
          </div>
        </div>
        <div class={`col-6`}>
          <h1 class="heading1 primary">Customisations</h1>
          <div class={style.optionsContainer}>
            <div class="heading2 primary">Page Options</div>
            <div class={style.optionsInnerContainer}>
              <div>
                <form class={style.form}>
                  <div className="form-group">
                    <input
                      type="radio"
                      name="toggle"
                      value={isBody}
                      id="heading"
                      onClick={() => setIsBody(!isBody)}
                    />
                    <label for="heading">
                      Edit {isBody ? "Body" : "Title"}
                    </label>
                  </div>

                  <div className="form-group" class={style.inline}>
                    <label for="size">Font size</label>
                    <div class={style.inputborder}>
                      <input
                        type="range"
                        min="5"
                        max="50"
                        name={isBody ? "bodySize" : "headSize"}
                        value={
                          isBody ? bodyFormData.bodySize : headFormData.headSize
                        }
                        className="form-control"
                        id="size"
                        onChange={(e) => {
                          onValueChange(e);
                          console.log("h");
                        }}
                      />
                    </div>

                    <label for="left">Adjust x-axis</label>
                    <div class={style.inputborder}>
                      <input
                        type="range"
                        min="70"
                        max="200"
                        name={isBody ? "bodyLeft" : "headLeft"}
                        value={
                          isBody ? bodyFormData.bodyLeft : headFormData.headLeft
                        }
                        className="form-control"
                        id="left"
                        onChange={onValueChange}
                      />
                    </div>

                    <label for="top">Adjust y-axis </label>
                    <div class={style.inputborder}>
                      <input
                        type="range"
                        min="30"
                        max="200"
                        name={isBody ? "bodyTop" : "headTop"}
                        value={
                          isBody ? bodyFormData.bodyTop : headFormData.headTop
                        }
                        className="form-control"
                        id="top"
                        onChange={onValueChange}
                      />
                    </div>

                    <label for="spacing">Line-spacing</label>
                    <div class={style.inputborder}>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        step="0.05"
                        name={isBody ? "bodyLine" : "headLine"}
                        value={
                          isBody ? bodyFormData.bodyLine : headFormData.headLine
                        }
                        className="form-control"
                        id="spacing"
                        onChange={onValueChange}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div class={style.downloadbtn}>
                <DownloadButton name="Download Page" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainContainer;
