import React from 'react';
import styles from './hero.module.scss';
import Button from '../button/Button';

class Hero extends React.Component{
  render() {
    return (
      <div className={styles.hero}>
        <div className={styles.graphImgContainer}>
        </div>
        <div className={styles.textContent}>
          <h1>
            Bring everyone together to
            build better products.
          </h1>
          <p>
            Manage makes it simple for software
            teams to plan day-to-day tasks while
            keeping the larger team goals in view.
          </p>
          <Button text="Get started"/>
        </div>
      </div>
    )
  }
}

export default Hero
