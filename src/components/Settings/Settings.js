import { useState } from "react";

import style from "./Settings.module.css";
import InputButton from "../Buttons/InputButton/InputBtn.js";
import DownloadButton from "../Buttons/DownloadButton/DownloadBtn";

const Settings = () => {
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
    <div>
      <div className={`col-8 m-auto`}>
        <h1 class="heading1 primary">Input</h1>
        <div class={style.optionsContainer}>
          <form class={`d-block`}>
            <div className="form-group">
              <div class={style.sqbtns}>
                <div class={style.sq}>
                  <InputButton name="Default Page" />
                </div>
                <div class={style.sq}>
                  <InputButton name="Upload Page" />
                </div>
                <div class={style.sq}>
                  <InputButton name="Upload Font" />
                </div>
              </div>
              <input
                type="radio"
                name="toggle"
                value={isBody}
                id="heading"
                onClick={() => setIsBody(!isBody)}
              />
              <label for="heading">Edit {isBody ? "Body" : "Title"}</label>
              <br />

              <label for="size">Font size</label>
              <div class={style.inline}>
                <div class={style.r1}>
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
                </div>

                <label for="left">Adjust x-axis</label>
                <div class={style.r1}>
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
                </div>
              </div>

              <label for="top">Adjust y-axis </label>
              <div class={style.inline}>
                <div class={style.r1}>
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
                </div>

                <label for="spacing">Line-spacing</label>
                <div class={style.r1}>
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
              </div>
            </div>
          </form>

          <div class={style.downloadbtn}>
            <DownloadButton name="Download Page" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
