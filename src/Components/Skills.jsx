import React, { Component } from "react";
import Slide from "react-reveal";

class Skills extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em style={{ color: "#f6f6f6" }}>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="skills">
        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span style={{ color: "#f6f6f6" }}>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p style={{ color: "#f6f6f6", fontWeight: "bold" }}>
                {skillmessage}
              </p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Skills;
