import React from 'react';
// import video from '../../data/videos.json';
import './Video.scss'

const Video = () => {
    return (
        <>
        <div className ="video-container">
            <video className ="video-container__video" poster="https://i.imgur.com/l2Xfgpl.jpg" controls>
                <source></source>
                Your browser does not support the video tag.
            </video>
        </div>
        <div>
          <h1>BMX Rampage: 2021 Highlights </h1>
          <div>
            <p>By Red Crow</p>
            <p>07/11/2021</p>
          </div>
          <div>
            <p>1,001,023</p>
            <p>110,985</p>
          </div>
        </div>
        <div>
            <p>On a gusty day in Southern Utah, a group of 25 
daring mountain bikers blew the doors off what 
is possible on two wheels, unleashing some of 
the biggest moments the sport has ever seen. 
While mother nature only allowed for one full run 
before the conditions made it impossible to ride, 
that was all that was needed for event veteran 
Kyle Strait, who won the event for the second 
time -- eight years after his first Red Cow 
Rampage title</p>
        </div>
        </>
    );
};

export default Video;