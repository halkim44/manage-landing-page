import React from 'react';
import TopMenu from './TopMenu';
import styles from './top-menu.module.scss';

class TopMenuContainer extends React.Component {
  render() {
    return (
      <header id="top-menu" role="banner" className={styles.header}>
        <TopMenu />
      </header>
    )
  }
}
export default TopMenuContainer;
