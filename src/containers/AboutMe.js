import React from "react";
import { Button } from '../components';

// Page is a hero image, followed by a short bio & links
export default () =>
  <div className="aboutMe">
    <h3>About Andrew</h3>
    <div className="col-md-3"/>
    <div className="aboutMeText col-md-6">
      <p>I am a Developer and Consultant based in London.</p>
      <p>I've been consulting for about 3 years, and combined with an undergraduate degree in the humanities, and an MSc in Computer Science, I have a pretty unique take on things.</p>
      <p>My programming language of choice is JavaScript, and I've spent the last few years designing and building all sorts of awesome solutions across the stack.</p>
      <p>I love exploring and and discussing technology, and working on passion projects.</p>
        { /* Button Needs to be it's own component */ }
      <Button cssClass="aboutButton" text={[<a href="https://github.com/avoneshen">More Details</a>]}/>
    </div>
    <div className="col-md-3"/>
  </div>;
