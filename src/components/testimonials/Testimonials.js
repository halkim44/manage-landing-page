import React from 'react';

import Slider from '../slider/slider';
import Styles from './testimonials.module.scss';
import Button from '../button/Button';


import aliImg from './img/avatar-ali.png';
import anishaImg from './img/avatar-anisha.png';
import richardImg from './img/avatar-richard.png';
import shanaiImg from './img/avatar-shanai.png';

let data = [
  {
    name: 'Anisha Li',
    avatar: anishaImg,
    quote: "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
  },
  {
    name: 'Ali Bravo',
    avatar: aliImg,
    quote: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
  },
  {
    name: 'Richard Watts',
    avatar: richardImg,
    quote: "Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone I talk to!",
  },
  {
    name: 'Shanai Gough',
    avatar: shanaiImg,
    quote: "their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
  }
]


class Testimonials extends React.Component {
  render() {
    return (
      <div className={Styles.testimonials}>
        <h2>What they've said</h2>
        <Slider data={data} />

        <div className={Styles.btnWrapper}>
          <Button text='Get Started' />
        </div>
        <div className={Styles.redBgContainer}>
          <div className={`container ${Styles.flexWrapper}`}>
            <h2>
              Simplify how your team
              works today.
            </h2>
            <div className={Styles.btnWrapper}>
              <Button text='Get Started' isWhite={true} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonials
