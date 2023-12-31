import React, { useContext } from "react";
import PropTypes from "prop-types";
import PortfolioContext from "../context/context";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import Slide from "@mui/material/Slide";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Drawer,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
const pages = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Projects",

    link: "/project",
  },
];
const drawerWidth = 240;

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Navigation(props) {
  const { ...footer } = useContext(PortfolioContext);
  const { networks } = footer.footer;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  let container;
  if (typeof window !== "undefined") {
    container = window.document.body;
  }
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        background: "linear-gradient(135deg, #00cdac 0%, #02aab0 100% )",
        height: "100%",
      }}
    >
      <Typography
        variant="h4"
        fontFamily="monospace"
        sx={{ my: 2, color: "white" }}
      >
        @Shivam
      </Typography>
      <Divider />

      {pages.map((item) => (
        <div className="text-center mt-5" key={item.name}>
          <p className="hero-cta mt-5">
            <span className="">
              <Link
                // rel="noopener noreferrer"
                to={item.link}
                style={{ color: "white" }}
              >
                {item.name}
              </Link>
            </span>
          </p>
        </div>
      ))}

      <div className="social-links">
        {networks &&
          networks.map((network) => {
            const { id, name, url } = network;
            return (
              <a
                key={id}
                href={url || "https://github.com/shivam7366"}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={name}
                color="black"
              >
                <i className={`fa fa-${name || "refresh"} fa-inverse`} />
              </a>
            );
          })}
      </div>
    </Box>
  );

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            height: "60px",
            background: "linear-gradient(135deg, #00cdac 0%, #02aab0 100% )",
          }}
        >
          <Container maxWidth="xl">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h3"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                @Shivam
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon fontSize="large" />
                </IconButton>
                <Drawer
                  container={container}
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: drawerWidth,
                      backgroundColor: "#e7f8f8",
                    },
                  }}
                >
                  {drawer}
                </Drawer>
              </Box>
              <Typography
                variant="h3"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                @Shivam
              </Typography>

              <Box
                sx={{
                  flexGrow: 0,
                  display: { xs: "none", md: "flex" },
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                }}
              >
                <div className="social-links" style={{ height: "auto" }}>
                  {networks &&
                    networks.map((network) => {
                      const { id, name, url } = network;
                      return (
                        <a
                          key={id}
                          href={
                            url ||
                            "https://github.com/cobidev/gatsby-simplefolio"
                          }
                          rel="noopener noreferrer"
                          target="_blank"
                          aria-label={name}
                        >
                          <i
                            className={`fa fa-${name || "refresh"} fa-inverse`}
                          />
                        </a>
                      );
                    })}
                </div>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
