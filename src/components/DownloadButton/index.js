import style from './style.css';

const DownloadButton = (props)=>(
    <div class={style.inButtons}>
        <div class={style.innerText}>{props.name}</div>
    </div>
)

export default DownloadButton;