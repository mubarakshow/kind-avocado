/**
 * create a card
 * each card represent a project/client
 * card onClick opens up a modal with carousel
 * images can be added through Netlify CMS
 */

import React, { useEffect } from "react";
import _ from "lodash";
import Modal from "react-modal";

import { classNames, withPrefix, markdownify } from "../utils";

export default class ProjectSection extends React.Component {
  constructor() {
    this.state = {
      modalIsOpen: false,
    };
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
  }

  render() {
    let section = _.get(this.props, "section", null);
    console.log('section Data', section)
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
            console.log('project data', project)
            return (
              <div key={project_idx}>
                {_.map(_.get(project, 'images', null ), (image, image_idx) => (
                  <img src={withPrefix(_.get(image, 'project_photo', null))} alt={_.get(image, 'project_photo_alt_text', null)} />
                ))}
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}
