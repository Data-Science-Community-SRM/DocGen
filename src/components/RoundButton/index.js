import style from './style.css';

const RoundButton = (props)=>(
    <div class={style.inButtons}>
        <div class={style.innerText}>{props.name}</div>
    </div>
)

export default RoundButton;