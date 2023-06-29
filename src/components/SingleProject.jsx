import React, { useContext, useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Tilt } from "react-tilt";
import { Container, Row, Col, Button } from "react-bootstrap";
import PortfolioContext from "../context/context";
import Title from "./Title";
// import ProjectImg from "../Image/ProjectImg";

import { Link } from "react-router-dom";

const Projects = ({ limit, exploreBtnShow }) => {
  const { projects } = useContext(PortfolioContext);

  const showProjects = projects.slice(0, limit || projects.length);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {showProjects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;
            console.log(img);

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">
                        {title || "Project Title"}
                      </h3>
                      <div>
                        <p>
                          {info ||
                            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae."}
                        </p>
                        <p className="mb-4">{info2 || ""}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || "#!"}
                      >
                        See Live
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || "#!"}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: "cubic-bezier(.03,.98,.52,.99)",
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            {/* <ProjectImg alt={title} filename={img} /> */}
                            <div style={{ width: "100%", height: "auto" }}>
                              <img
                                className="rounded shadow-lg pppp"
                                src={img}
                                alt="profile picture"
                                // width="100%"
                                // height="auto"
                              />
                            </div>
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
          {exploreBtnShow && (
            <div className="text-center mt-5">
              <p className="hero-cta mt-5">
                <span className="cta-btn cta-btn--hero">
                  <Link
                    // rel="noopener noreferrer"
                    to="/projects"
                    smooth
                    duration={800}
                  >
                    Explore More
                  </Link>
                </span>
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
