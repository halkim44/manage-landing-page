import React from 'react';
import darkBlue from './logo.svg';
import white from './logo-white.svg';
import styles from './logo.module.scss';

function Logo (props) {
  return(
    <div className={styles.logo}>
      <a href="#">
        <img src={props.white ? white : darkBlue} alt="logo"></img>
      </a>
    </div>
  )
}

export default Logo
