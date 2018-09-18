import React, { img } from 'react';
import { Button, Slide, SlideSection} from '../';
import './styles.css';

// Creates an individual Slide for a Project Detail.
// Props of project: { imageSrc, imageAlt, projectHeader, projectBody, key, button: {buttonLink, buttonText} }
const ProjectDetail = ({project}) => {
  return (
    <div className="row projectDetail">
      <div className="col-md-2"/>
      <Slide>
        { /* Image */ }
        <div className="col-md-4">
          <SlideSection>
            <img src={project.imageSrc} alt={project.imageAlt} />
          </SlideSection>
        </div>
        { /* Details */ }
        <div className="col-md-6">
          <SlideSection>
            <div className="projHeader">
              {project.projectHeader}
            </div>
          </SlideSection>
          <SlideSection>
            <div className="projBody">
              {project.projectBody.map((body, i) => <p key={i}>{body}</p>)}
            </div>
          </SlideSection>
          <SlideSection>
            <Button
              cssClass="projButton"
              key={project.key}
              text={[<a key={1} href={project.button.buttonLink}>{project.button.buttonText}</a>]}
            />
          </SlideSection>
        </div>
        <div className="col-md-2"/>
      </Slide>
      <div className="col-md-2"/>
    </div>
  );
}

export default ProjectDetail;
