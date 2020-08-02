import style from "./InputBtn.css";

const InputButton = (props) => (
  <div class={style.inButtons}>
    <div class={style.innerText}>{props.name}</div>
  </div>
);

export default InputButton;
