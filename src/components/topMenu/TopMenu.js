import React from 'react';
import styles from './top-menu.module.scss';
import Logo from '../Logo/Logo';
import Button from '../button/Button';
import MediaQuery from 'react-responsive';

class TopMenu extends React.Component {

  constructor(props) {
    super(props);
    console.log(styles);
    this.toggleNavShow = this.toggleNavShow.bind(this);
    this.state = { isNavShown: false };
  }
  toggleNavShow() {
    this.setState({
      isNavShown: !this.state.isNavShown,
    })
  }

  render() {

    return (
      <nav className={`${styles.nav} ${this.state.isNavShown? styles.JSnavActive : ""}`}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <div className={styles.navList}>
          <ul>
          <li>
            <a href="#" aria-label="pricing">
              Pricing
            </a>
            </li>
            <li>
              <a href="#" aria-label="product">
                Product
              </a>
            </li>
            <li>
              <a href="#" aria-label="about">
                About Us
              </a>
            </li>
            <li>
              <a href="#" aria-label="careers">
                Careers
              </a>
            </li>
            <li>
              <a href="#" aria-label="community">
                Community
              </a>
            </li>
          </ul>
        </div>

        <MediaQuery query="(max-device-width: 720px)">
          <div className={`${styles.hamburgerBtn} ${this.state.isNavShown ? styles.isActive : ""}`}
            id="js-nav-toggle"
            data-action-type="nav-show"
            onClick={this.toggleNavShow}>
            <div className={styles.middleLine}></div>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-device-width: 720px)">
          <Button text="Get Started"/>
        </MediaQuery>
      </nav>
    )
  }
}
export default TopMenu
