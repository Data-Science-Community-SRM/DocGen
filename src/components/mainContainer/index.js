// import ChildContainer from '../childContainers';
 import style from './style.css';
 var imageName ='assets/dslogo.png'


console.log(imageName)
const mainContainer = ()=>(
    <div class={style.mainContainer}>
        
            <div class={style.logoFlex}>
                <img src = { imageName } class={style.logo}/>
                <img src = { imageName } class={style.logo2}/>
            </div>
            <div class={style.ioFlex}>

            </div>


        
    </div>
  
);

export default mainContainer;
/* <ChildContainer className="topChild">
        </ChildContainer>
        <ChildContainer className="middleChild">
        </ChildContainer>
        <ChildContainer className="bottomChild">
        </ChildContainer> */