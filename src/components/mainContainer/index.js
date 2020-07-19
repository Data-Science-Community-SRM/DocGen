
 import style from './style.css';
 import InputButton from '../InputButtons'
 
 var imageName ='assets/dslogo.png'


console.log(imageName)
const mainContainer = ()=>(
    <div class={style.mainContainer}>
            <div class={style.logoFlex}>
                <img src = { imageName } class={style.logo}/>
                <img src = { imageName } class={style.logo2}/>
            </div>
            <div class={style.ioFlex}>
                <div class={style.iFlex}>
                    <div class="heading1 primary">
                        Input
                    </div>
                    <div class={style.optionsContainer}>
                        <div class="heading2 primary">
                        Page Options
                        </div>
                        <div class={style.optionsInnerContainer}>
                            <InputButton name="Default Page"/>
                            <InputButton name="Upload Page"/>
                            <InputButton name="Upload Font"/>
                        </div>
                        
                    </div>
                </div>
                <div class={style.oFlex}>
                    <div class="heading1 primary">
                        Output
                    </div>
                    <div class={style.outputDisplay}>

                    </div>
                </div>
            </div>
           


        
    </div>
  
);

export default mainContainer;
