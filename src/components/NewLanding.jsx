import React from "react";
import { Fade, Reveal } from "react-reveal";
import banner from "../images/introimg1.svg";
import man from "../images/man.png";
import table from "../images/table.png";

import cup from "../images/cup.png";
import codeshadow from "../images/codeshadow.png";
import php from "../images/php.png";
import cpp from "../images/cpp.png";
import search from "../images/search.png";
import html from "../images/html.png";
import bracket from "../images/bracket.png";
import { Link } from "react-router-dom";

function NewLanding() {
  const [isDesktop, setIsDesktop] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);
  return (
    <section id="landing" className="intropage p-0">
      <div class="home_bubble">
        <div class="bubble b_one"></div>

        <div class="bubble b_two"></div>

        <div class="bubble b_three"></div>
        <div class="bubble b_four"></div>
        <div class="bubble b_five"></div>
        <div class="bubble b_six"></div>
      </div>

      <Reveal effect="s_shap">
        <Fade right duration={500} distance="30px">
          {" "}
          <img src={banner} alt="banner" className="banner-image" />
        </Fade>
      </Reveal>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div class="frelencer_content">
              <Fade bottom duration={500} delay={200}>
                <h2>
                  Hey there!
                  <br /> I'm Shivam Gupta <br />
                  Full Stack<span className="color-theme"> Developer</span>
                </h2>
              </Fade>
              <Fade bottom duration={500} delay={200}>
                <h4>
                  <span>I create thousand of website</span>
                </h4>
              </Fade>
              <Fade bottom duration={500} delay={200}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={500}
                  distance="30px"
                >
                  <p className="hero-cta mt-5">
                    <span className="cta-btn cta-btn--hero">
                      <Link
                        to="mailto:hire.shivamgupta@gmail.com"
                        smooth
                        duration={800}
                      >
                        {"Hire me"}
                      </Link>
                    </span>
                  </p>
                </Fade>
              </Fade>
            </div>
          </div>

          <div className="col-lg-6 ">
            <div className="frelencer_image">
              <Fade right duration={500} distance="30px">
                <img src={table} alt="table" className="f_img_two" />
              </Fade>
              <Fade left duration={500} distance="30px">
                <img src={man} alt="man" className="f_img_one" />
              </Fade>
              <Fade down duration={500} distance="30px">
                <img src={cup} alt="man" className="f_img_three" />
              </Fade>
              <Fade down duration={500} distance="30px">
                <img src={codeshadow} alt="man" className="f_img_four" />
              </Fade>
              <Fade top duration={500} delay={200}>
                <Reveal
                  effect="fadeInDown f_img_five"
                  // down
                  duration={2000}
                  // distance="30px"
                  count="infinite"
                >
                  <img src={php} alt="man" />
                </Reveal>
                <Reveal
                  effect="fadeInDown f_img_six"
                  // down
                  duration={3000}
                  // distance="30px"
                  count="infinite"
                  delay={200}
                >
                  <img src={cpp} alt="man" />
                </Reveal>
                <Reveal
                  effect="fadeInDown f_img_seven"
                  // down
                  duration={2000}
                  delay={400}
                  // distance="30px"
                  count="infinite"
                >
                  <img src={search} alt="man" />
                </Reveal>

                <Reveal
                  effect="fadeInDown f_img_eight"
                  // down
                  duration={4000}
                  // distance="30px"
                  delay={800}
                  count="infinite"
                >
                  <img src={html} alt="man" />
                </Reveal>
                <Reveal
                  effect="fadeInDown f_img_nine"
                  // down
                  duration={5000}
                  // distance="30px"
                  delay={600}
                  count="infinite"
                >
                  <img src={bracket} alt="man" />
                </Reveal>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewLanding;
