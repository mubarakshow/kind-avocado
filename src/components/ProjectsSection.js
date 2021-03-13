import React, { useEffect } from "react";
import _ from "lodash";
// import Modal from 'react-modal';
import { classNames, withPrefix } from "../utils";

/**
 * create a card
 * each card represent a project/client
 * card onClick opens up a modal with carousel
 * images can be added through Netlify CMS
 */

const ProjectsSection = (props) => {

  let section = _.get(props, "section", null);

  useEffect(() => {
    console.log('project section', _.get(section, 'projects', null))
  }, [section])

  return (
    <section className={classNames("section")}>
      {_.get(section, "title", null) && (
        <div className="container container--md align-center">
          <h2 className="section__title">{_.get(section, "title", null)}</h2>
        </div>
      )}
      <div className="container container--lg">
        {_.map(_.get(section, "projects", null), (project, project_idx) => {
          // add project card. display in a grid
          console.log("project data", project);
          return (
            <div key={project_idx}>
              <h3>{_.get(project, "title", 'null')}</h3>
              {_.map(_.get(project, "images", null), (image, image_idx) => (
                <img
                  key={image_idx}
                  src={withPrefix(_.get(image, "project_photo", null))}
                  alt={_.get(image, "project_photo_alt_text", null)}
                />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
