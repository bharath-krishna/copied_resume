import React, { Component } from "react";
// import Zmage from "react-zmage";
import Fade from "react-reveal";
import ProjetCard from "./ProjetCard";

let id = 0;
class Projects extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            {/* <Zmage alt={projects.title} src={projectImage} /> */}
            <ProjetCard
              title={projects.title}
              image={projectImage}
              description={projects.category}
              url={projects.url}
              appUrl={projects.appUrl}
              docker_image_url={projects.docker_image_url}
            />
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Projects.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Projects;
