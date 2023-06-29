import React, { Fragment } from "react";
import emoji from "react-easy-emoji";
import { Fade } from "react-reveal";
// import DisplayLottie from "../components/DisplayLottie";
import { Container, Row, Col, UncontrolledTooltip } from "react-bootstrap";
import skills from "../images/skills.svg";

// import { skillsSection } from "../portfolio";

const Skills = () => {
  return (
    <Fade bottom duration={1000} distance="40px">
      <Container className="text-center my-5 py-5 section section-lg">
        <h1 className="h1">{skillsSection.title}</h1>
        <p className="lead my-5 pt-3 pb-5">{skillsSection.subTitle}</p>
        <Row>
          <Col lg="6">
            {/* <DisplayLottie animationPath="/lottie/webdev.json" /> */}

            <img src={skills} alt="skills" />
          </Col>

          <Col lg="6" style={{ marginTop: "60px" }}>
            {/* <div className="d-flex justify-content-center flex-wrap mb-1">
              {skillsSection.softwareSkills.map((skill) => {
                return (
                  <Fragment key={skill.skillName}>
                    <div
                      className="icon icon-lg icon-shape shadow rounded-circle mb-5"
                      id={skill.skillName}
                    >
                      <span
                        className="iconify"
                        data-icon={skill.fontAwesomeClassname}
                        data-inline="false"
                      ></span>
                    </div>
                    <UncontrolledTooltip
                      delay={0}
                      placement="bottom"
                      target={skill.skillName}
                    >
                      {skill.skillName}
                    </UncontrolledTooltip>
                  </Fragment>
                );
              })}
            </div> */}
            <Fade right delay={50} duration={1000} distance="40px">
              <div>
                {skillsSection.skills.map((skill) => {
                  return (
                    <p style={{ textAlign: "justify" }} key={skill}>
                      {skill}
                    </p>
                  );
                })}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </Fade>
  );
};

export default Skills;

const skillsSection = {
  title: "Tech Skills",
  subTitle:
    "I AM A CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡Frontend : HTML5, CSS, JavaScript, Bootstrap, React Bootstrap, Material UI, Styled Components, Reactjs, Redux, React Router , React Hooks, Webflow"
    ),
    emoji("⚡Backend: NodeJs Express"),
    emoji("⚡Databases : MongoDb, MySQL, Firebase"),

    emoji("⚡Version Control : GIT & Github"),

    emoji("⚡Hosting Platforms : Firebase, Vercel, Github Pages, Heroku"),
    emoji("⚡Programming Language : C, CPP, Python, JavaScript"),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "tailwind",
      fontAwesomeClassname: "vscode-icons:file-type-tailwind",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },

    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "logos:flutter",
    },
    {
      skillName: "React-Native",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "Elixir",
      fontAwesomeClassname: "vscode-icons:file-type-elixir",
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "vscode-icons:file-type-swift",
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "logos:python",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "logos:docker-icon",
    // },
  ],
};
