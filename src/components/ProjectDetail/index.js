import React, { img } from 'react';
import { Button, Slide, SlideSection} from '../';

const ProjectDetail = ({project}) => {
  // todo: build when dynamic projects API is ready
  // Unpack project
  // const {...} = project;

  // 2 Nested Assets in one??
  // Time was a bit tight on this, but I'm working on a new version to pull projects similarly to the homepage cards
  return (
    <div>
      <div className="col-md-2"/>
      <Slide>
        { /* Image */ }
        <div className="col-md-4">
          <SlideSection>
              <img src={'images/tower-bridge.JPG'} alt={'Tower Bridge'} />
          </SlideSection>
        </div>
        { /* Details */ }
        <div className="col-md-6">
          <SlideSection>
            <div className="projHeader">
              Tower Bridge Lifts Calendar
            </div>
          </SlideSection>
          <SlideSection>
            <div className="projBody">
              <p>Get the opening times for London's Tower Bridge direct to your calendar.</p>
              <p>This is a Heroku-Hosted Node.js app, with a MongoDB database to store the times.</p>
            </div>
          </SlideSection>
          <SlideSection>
            <Button cssClass="projButton" text={[<a href="https://github.com/avoneshen/Bridge-Calendar-App">More Details</a>]}/>
          </SlideSection>
        </div>
        <div className="col-md-2"/>
      </Slide>
      <div className="col-md-2"/>
    </div>
  );
}

export default ProjectDetail;
