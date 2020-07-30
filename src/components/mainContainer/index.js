import { useState } from 'react';
import style from './style.css';
import InputButton from '../InputButtons';
import DownloadButton from '../DownloadButton';
import RoundButton from '../RoundButton';
import Output from '../OutputComponent/output';
var imageName = 'assets/dslogo.png';
var Paperimage = 'assets/paper.png';

console.log(imageName);

const mainContainer = () => {
  const [textformData, setFormData] = useState({
    size: 5,
    fontType: "'Helvetica Neue', arial, sans-serif",
    left: 70,
    top: 30,
    line: 1,
  });
  const [headingFormData, setHeading] = useState({
    size1: 50,
    fontType1: "'Helvetica Neue', arial, sans-serif",
    left1: 70,
    top1: 30,
    line1: 1,
  });
  const [toggleBool, toggleInput] = useState(false);

  console.log(toggleBool);
  const { size1, left1, top1, line1 } = headingFormData;
  const { size, left, top, line } = textformData;
  // ithe ek toggle variable vapru . if value is 0 then headingFormdata will update , if value is 1 textFormData will update ... and we will pass them both as props....i guess this will tackle the problem
  const onChange = e => {
    if (toggleBool === true) {
      setFormData({ ...textformData, [e.target.name]: e.target.value });
    } else {
      setHeading({ ...headingFormData, [e.target.name]: e.target.value });
    }
  };
  return (
    <div class={style.mainContainer}>
      <div class={style.logoFlex}>
        <img src={imageName} class={style.logo} />
        <img src={imageName} class={style.logo2} />
      </div>
      <div class={style.ioFlex}>
        <div class={style.iFlex}>
          <div class='heading1 primary'>Customisations</div>
          <div class={style.optionsContainer}>
            <div class='heading2 primary'>Page Options</div>
            <div class={style.optionsInnerContainer}>
              <div>
                <InputButton name='Default Page' />
                <br />
                <form class={style.form}>
                  <div className='form-group'>
                    <input
                      type='radio'
                      name='toggle'
                      value='false'
                      id='heading'
                      onClick={() => toggleInput(false)}
                      checked={!toggleBool}
                    />

                    <label for='heading'>Edit heading</label>

                    <input
                      type='radio'
                      name='toggle'
                      value='true'
                      id='text'
                      onClick={() => toggleInput(true)}
                      checked={toggleBool}
                    />
                    <label for='text'>Edit Text </label>
                  </div>
                  <br />
                  <div className='form-group' class={style.inline}>
                    <label for='text-size'>Font size</label>
                    <div class={style.inputborder}>
                      <input
                        type='range'
                        min='5'
                        max='50'
                        name={toggleBool ? 'size' : 'size1'}
                        value={toggleBool ? size : size1}
                        className='form-control'
                        id='text-size'
                        onChange={e => onChange(e)}
                      />
                      &nbsp;&nbsp;{toggleBool ? size : size1}
                    </div>

                    <label for='left-margin'>Adjust x-axis</label>
                    <div class={style.inputborder}>
                      <input
                        type='range'
                        min='70'
                        max='200'
                        name={toggleBool ? 'left' : 'left1'}
                        value={toggleBool ? left : left1}
                        className='form-control'
                        id='left-margin'
                        onChange={e => onChange(e)}
                      />
                      &nbsp;&nbsp;{toggleBool ? left : left1}
                    </div>

                    <label for='top-margin'>Adjust y-axis </label>
                    <div class={style.inputborder}>
                      <input
                        type='range'
                        min='30'
                        max='200'
                        name={toggleBool ? 'top' : 'top1'}
                        value={toggleBool ? top : top1}
                        className='form-control'
                        id='top-margin'
                        onChange={e => onChange(e)}
                      />
                      &nbsp;&nbsp;{toggleBool ? top : top1}
                    </div>

                    <label for='line-spacing'>Line-spacing</label>
                    <div class={style.inputborder}>
                      <input
                        type='range'
                        min='1'
                        max='5'
                        step='0.05'
                        name={toggleBool ? 'line' : 'line1'}
                        value={toggleBool ? line : line1}
                        className='form-control'
                        id='line-spacing'
                        onChange={e => onChange(e)}
                      />
                      &nbsp;&nbsp;{toggleBool ? line : line1}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class={style.downloadbtn}>
              <DownloadButton name='Download Page' />
            </div>
          </div>
        </div>
        <div class={style.oFlex}>
          <div class='heading1 primary'>Input</div>
          <div class={style.outputDisplay}>
            <div class={style.entertext}>
              <RoundButton name='Enter text here' />
            </div>

            <div style={{ backgroundImage: { Paperimage } }}>
              <Output text_value={textformData} head_value={headingFormData} />
            </div>

            <div class={style.uploadbtns}>
              <div class={style.page}>
                <RoundButton name='Upload Page' />
              </div>
              <div class={style.font}>
                <RoundButton name='Upload Font' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        Made with &nbsp;
        <svg
          class='bi bi-heart-fill'
          id='heart'
          width='0.7em'
          height='1em'
          viewBox='0 0 16 16'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
          />
        </svg>{' '}
        &nbsp; by your friends at the DS Community
      </footer>
    </div>
  );
};
export default mainContainer;
