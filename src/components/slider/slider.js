import React from 'react';
import Styles from './slider.module.scss';
import Card from '../card/Card';

import {Swipeable} from 'react-swipeable';
import MediaQuery from 'react-responsive';


class Slider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      maxSlide: this.props.data.length,
    }
  }

  showSlide(pos) {
    this.setState({
      position: pos
    })
  }
  
  slideSwiped(isLeft) {
    let newPosition = this.state.position;

    if (isLeft) {
      if (newPosition !== this.state.maxSlide - 1) {
        newPosition++;
      }

    } else {
      if(newPosition !== 0) {
        newPosition--;
      }
    }
    this.setState({
      position: newPosition
    })
  }

  render() {

    let dots = [];

    for (let i = 0; i < this.state.maxSlide; i++) {
      dots.push(
      <div
        className={`${Styles.dot} ${( i === this.state.position ? Styles.isActive : '' )}`}
        key={i}
        onClick={() => this.showSlide(i)}>
      </div>)
    }

    return(
      <div className={Styles.display}>

        <MediaQuery query="(max-device-width: 720px)">
          <Swipeable
            onSwipedLeft={() => { this.slideSwiped(true) }}
            onSwipedRight={() => { this.slideSwiped(false) }}
            trackMouse={true}

            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0,
              bottom: 60,
              zIndex: 2
            }}>
          </Swipeable>
        </MediaQuery>
        
        <div className={Styles.slider} style={{left: `-${this.state.position}00%`}}>
          {
            this.props.data.map((avatar, i) => {
              return (
                <div className={Styles.slide} key={i}>

                  <Card data={avatar} />

                </div>
              )
            })
          }
        </div>
        <MediaQuery query="(max-device-width: 720px)">
          <div className={Styles.navDots}>
            { dots }
          </div>
        </MediaQuery>

      </div>
    )
  }
}

export default Slider
