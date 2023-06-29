import React, { useState, useEffect } from "react";
import NewLanding from "../components/NewLanding";
import SingleProject from "../components/SingleProject";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { PortfolioProvider } from "../context/context";

import {
  heroData,
  aboutData,
  projectsData,
  contactData,
  footerData,
} from "../data";

export default function Projects() {
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
      <Navigation />
      <div>
        <main>
          <NewLanding />
          <SingleProject exploreBtnShow={false} />
        </main>
        <footer>
          <Contact />
          <Footer />
        </footer>
      </div>
    </PortfolioProvider>
  );
}
