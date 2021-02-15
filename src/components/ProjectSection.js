/**
 * create a card
 * each card represent a project/client
 * card onClick opens up a modal with carousel
 * images can be added through Netlify CMS
 */

import React from "react";
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

  handleModalOpen() {
    this.setState((this.state.modalIsOpen = true));
  }
  handleModalClose() {
    this.setState((this.state.modalIsOpen = false));
  }

  render() {
    let section = _.get(this.props, "section", null);

    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
      },
    };

    // return (
    //   <div>
    //     <button onClick={this.handleModalOpen}>Open Modal</button>
    //     <Modal
    //       isOpen={this.state.modalIsOpen}
    //       onAfterOpen={afterOpenModal}
    //       onRequestClose={this.handleModalClose}
    //       style={customStyles}
    //       contentLabel="Example Modal"
    //     >

    //       <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
    //       <button onClick={closeModal}>close</button>
    //       <div>I am a modal</div>
    //       <form>
    //         <input />
    //         <button>tab navigation</button>
    //         <button>stays</button>
    //         <button>inside</button>
    //         <button>the modal</button>
    //       </form>
    //     </Modal>
    //   </div>
    // )
    return (
      <section className={classNames("section")}>
        {_.get(section, "title", null) && (
          <div className="container container--md align-center">
            <h2 className="section__title">{_.get(section, "title", null)}</h2>
          </div>
        )}
        <div className="container container--lg">
          {_.map(_.get(section, "projects", null), (project, project_idx) => (
            // add project card. display in a grid
            <div key={project_idx}>
              {_.get(project, "image", null) && (
                <div className="flex flex--middle flex--center flex--col-2">
                  <img src={withPrefix(_.get(project, "image", null))} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }
}
