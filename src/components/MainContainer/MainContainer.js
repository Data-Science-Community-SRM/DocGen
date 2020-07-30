import { useState } from "react";

import style from "./MainContainer.css";
import InputButton from "../Buttons/InputButton/InputBtn";
import DownloadButton from "../Buttons/DownloadButton/DownloadBtn";
import RoundButton from "../Buttons/RoundButton/RoundBtn";
import Output from "../OutputComponent/Output";

import imageName from "../../assets/dslogo.png";

const MainContainer = () => {
  const [bodyFormData, setBodyFormData] = useState({
    bodySize: 16,
    bodyFont: "'Helvetica Neue', arial, sans-serif",
    bodyLeft: 0,
    bodyTop: 0,
    bodyLine: 1,
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
      <div class={`${style.mainContainer} ${style.ioFlex}`}>
        <div class={style.iFlex}>
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
                        value={isBody ? bodyFormData.bodyTop : headFormData}
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
        <div class={style.oFlex}>
          <div class="heading1 primary">Input</div>
          <div class={style.outputDisplay}>
            <div
              style={{
                background: "../../assets/dslogo.png",
                overflow: "hidden",
                width: "100%",
              }}
            >
              <Output text_value={bodyFormData} head_value={headFormData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainContainer;
