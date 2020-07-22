
 import style from './style.css';
 import InputButton from '../InputButtons';
 import DownloadButton from '../DownloadButton';
 import RoundButton from '../RoundButton';

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
                        Customisations
                    </div>
                    <div class={style.optionsContainer}>
                        <div class="heading2 primary">
                        Page Options
                        </div>
                        <div class={style.optionsInnerContainer}>
                            <InputButton name="Default Page"/>
                     
                          
                        </div>
                        <div class={style.downloadbtn}>
                        
                      <DownloadButton name="Download Page"/>
                    </div>
                    </div>
                </div>
                <div class={style.oFlex}>
                    <div class="heading1 primary">
                        Input
                    </div>
                    <div class={style.outputDisplay}>
                    <div class={style.entertext}>
                    <RoundButton name="Enter text here"/>
                    </div>
                  
                       <div class={style.uploadbtns}>
                           <div class={style.page}>
                    <RoundButton name="Upload Page"/>
                    </div>
                    <div class={style.font}>
                    <RoundButton name="Upload Font"/>
                    </div>
                    </div>
                </div>
            </div>
            </div>
           


        <footer>Made with &nbsp;<svg class="bi bi-heart-fill" id="heart" width="0.7em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
      </svg> &nbsp; by your friends at the DS Community</footer>
    </div>
  
);

export default mainContainer;
