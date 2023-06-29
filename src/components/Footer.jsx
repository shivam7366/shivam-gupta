import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
import PortfolioContext from "../context/context";
import GithubButtons from "./GithubButtons";

import { githubButtons } from "../data";

const Footer = () => {
  const { ...footer } = useContext(PortfolioContext);
  const { networks } = footer.footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom text-center">
      <Container>
        <span className="back-to-top">
          <Link to="landing" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || "https://github.com/cobidev/gatsby-simplefolio"}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || "refresh"} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} -{" "}
          <a
            href="https://github.com/shivam7366"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shivam Gupta
          </a>
        </p>

        {isEnabled && <GithubButtons />}
      </Container>
    </footer>
  );
};

export default Footer;
