import React from 'react';
import styles from './button.module.scss';

function Button (props) {
  return (
    <button 
      className={`${styles.button}
      ${props.isWhite ? styles.white : ''}
      ${props.noshadow ? styles.noShadow : ''}
      ${props.formButton ? styles.formButton : ''}`}>

        {props.text}
    
    </button>
  )
}

export default Button
