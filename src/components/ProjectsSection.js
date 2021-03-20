import React from "react";
import _ from "lodash";
import { classNames, withPrefix } from "../utils";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectsSection = (props) => {
  let section = _.get(props, "section", null);

  return (
    <section className={classNames("section")}>
      {_.get(section, "title", null) && (
        <div className="container container--md align-center">
          <h2 className="section__title">{_.get(section, "title", null)}</h2>
        </div>
      )}
      <div className="container container--lg">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // flexFlow: "row wrap",
            justifyContent: "center",
            gap: "2em",
          }}
        >
          {_.map(_.get(section, "projects", null), (project, project_idx) => {
            // add project card. display in a grid
            return (
              <div
                key={project_idx}
                className=""
                style={{
                  textAlign: "center",
                }}
              >
                <Carousel
                  showThumbs={false}
                  arrows={true}
                  centerMode={true}
                  swipeable={true}
                  autoPlay={true}
                >
                  {_.map(_.get(project, "images", null), (image, image_idx) => (
                    <div
                      key={`image-container-${image_idx}`}
                      className="projects-image-container"
                    >
                      <img
                        key={image_idx}
                        className="carousel__image-item"
                        src={withPrefix(_.get(image, "project_photo", null))}
                        alt={_.get(image, "project_photo_alt_text", null)}
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          borderRadius: "1em",
                          boxShadow:
                            "inset 0 2px 10px #dcffa6, 0px 5px 35px #303030",
                        }}
                      />
                    </div>
                  ))}
                </Carousel>
                <h3>{_.get(project, "title", "null")}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
