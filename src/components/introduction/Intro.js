import React from 'react';
import styles from './intro.module.scss';

class Intro extends React.Component {
  render() {
    return (
      <div className={styles.intro}>
        <div className={styles.headerWrapper}>
          <header className={styles.header}>
            <h2>What's different about Manage?</h2>
            <p>
              Manage provides all the functionality your
              team needs, without the complexity. Our
              software is tailor-made for modern digital
              product teams.
            </p>
          </header>
        </div>
        <div className={styles.listWrapper}>
          <ul className={styles.featureList}>
            <li>
              <h3><span className={styles.listNum}>01</span> Track company-wide progress</h3>
              <p>
                See how your day-to-day tasks fit into the wider
                vision. Go from tracking progress at the milestone
                level all the way done to the smallest of details.
                Never lose sight of the bigger picture again.
              </p>
            </li>
            <li>
              <h3><span className={styles.listNum}>02</span> Advanced built-in reports</h3>
              <p>
                Set internal delivery estimates and track progress
                toward company goals. Our costumisable
                dashboard helps you build out the reports you
                need to keep key stakeholders informed.
              </p>
            </li>
            <li>
              <h3><span className={styles.listNum}>03</span> Everything you need in one place</h3>
              <p>
                Stop jumping from one service to another to
                comunicate, store files, track tasks and share
                documents. Manage offers an all-in-one team
                productivity solutions.
              </p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Intro
