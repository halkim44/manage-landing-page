import React from 'react';
import Styles from './card.module.scss';


function Card (props) {
  return(
    <div className={Styles.card}>
      <img src={props.data.avatar} alt="avatar" />
      <div className={Styles.textContainer}>
        <h4>{props.data.name}</h4>
        <p>{props.data.quote}</p>
      </div>
    </div>
  )
}

export default Card
