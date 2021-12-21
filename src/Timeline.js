import React from 'react';
import './Timeline.css';
import Status from './status';

function Timeline() {
  return (
    <div className="timeline">
      <Status status={"user 1 status here"}></Status>
      <Status status = {"user 2 status here"}></Status>
      <Status status = {"user 3 status here"}></Status>
    </div>
  );
}

export default Timeline;
