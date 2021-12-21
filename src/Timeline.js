import React from 'react';
import './Timeline.css';
import Status from './status';

function Timeline() {
  return (
    <div className="timeline">
      <Status status={"I hate sand."} username={"Anakin Skywalker"} picture={"https://i.kym-cdn.com/photos/images/facebook/001/701/558/e6f.jpg"} date={"October 7 at 11:25 AM"}></Status>
      <Status status={"I'm not afraid to die."} username={"Padme Amidala"} picture={"https://i.kym-cdn.com/photos/images/facebook/001/701/637/c33.jpg"} date ={"July 25 at 7:27 PM"}></Status>
      <Status status={"Be mindful of your thoughts."} username={"Obi-Wan Kenobi"} picture={"https://i.pinimg.com/originals/b3/4f/42/b34f425979930d568e97932dd3cb8e5e.jpg"} date={"February 5 at 10:10"}></Status>
    </div>
  );
}

export default Timeline;
