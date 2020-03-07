import React from 'react';
import Styles from './footer.module.scss';
import Button from '../button/Button';
import Logo from '../Logo/Logo';

class Footer extends React.Component {
  render() {
    return(
      <footer className={Styles.footer}>
        <div className="container">
          <div className={`${Styles.flexContainer}`}>

            <form>
              <div className={Styles.formInner}>
                <label htmlFor="form__search">Search</label>
                <input type="text" id="form_search" placeholder='Updates in your inbox...'/>
                <Button text='GO' noshadow={true} formButton={true}/>
              </div>
              <div className="formError"></div>
            </form>

            <div className={Styles.linksWrapper}>
              <div>
                <nav>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About Us</a></li>
                  </ul>
                </nav>
              </div>
              <div>
                <nav>
                  <ul>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className={Styles.socMedAndLogo}>
              <div className={Styles.socMedWrapper}>
                <a href="#" aria-label='facebook' className={Styles.fb}></a>
                <a href="#" aria-label='youtube' className={Styles.yt}></a>
                <a href="#" aria-label='twitter' className={Styles.tw}></a>
                <a href="#" aria-label='pinterest' className={Styles.pin}></a>
                <a href="#" aria-label='instagram' className={Styles.ins}></a>
              </div>
              <div className={Styles.logoWrapper}>
                <Logo white={true}/>
              </div>
            </div>
            <span className={Styles.copyR}>Copyright 2020. All Rights Reserved</span>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
