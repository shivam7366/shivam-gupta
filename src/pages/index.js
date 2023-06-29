import Footer from "../components/Footer";

import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import SingleProject from "../components/SingleProject";
import Contact from "../components/Contact";
import Navigation from "../components/Navigation";
import { PortfolioProvider } from "../context/context";

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
} from "../data";
import NewLanding from "../components/NewLanding";
import Skills from "../components/skills";
// import WorkEducation from "../src/components/WorkEducation";

export default function Home() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      {/* <Footer /> */}
      <Navigation />
      <div>
        <main>
          {" "}
          <NewLanding />
          {/* <Hero /> */}
          <Skills />
          {/* <WorkEducation /> */}
          <About />
          <SingleProject limit={3} exploreBtnShow={true} />
          <Contact />
          <Footer />
          {/* <Nav */}
        </main>

        <footer></footer>
      </div>
    </PortfolioProvider>
  );
}
