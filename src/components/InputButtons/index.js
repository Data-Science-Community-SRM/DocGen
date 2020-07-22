import style from './style.css';

const InputButton = (props)=>(
    <div class={style.inButtons}>
        <div class={style.innerText}>{props.name}</div>
    </div>
)

export default InputButton;