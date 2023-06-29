import { nanoid } from "nanoid";
import one from "../src/images/one.jpg";
import two from "./images/two.jpg";
import three from "./images/three.jpg";
import zero from "./images/project.jpg";

// HEAD DATA
export const headData = {
  title: "Shivam Gupta", // e.g: 'Name | Developer'
  lang: "en", // e.g: en, es, fr, jp
  description: "Full Stack Developer", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, my name is ",
  name: "Shivam Gupta",
  subtitle: "I am a Full Stack Developer",
  cta: "",
};

// ABOUT DATA
export const aboutData = {
  img: "./images/profile.jpg",
  paragraphOne:
    "Hi all, I'm Shivam Gupta, A passionate Full Stack Web Developer and React Native Mobile App Developer having an experience of building applications with HTML / CSS / JavaScript / Reactjs / Nextjs / Nodejs / React Native/ Bootstrap / Material UI / Tailwind / Ant Design / Webflow and some other cool libraries and frameworks and Databases (MongoDB, SQL, MySQL, Firebase..)",
  paragraphTwo: "",
  paragraphThree: "",
  resume:
    "https://drive.google.com/file/d/1-DhlFgKrBvvpMK6Nm86M4_2hOPBWOFRN/view?usp=sharing", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: one,
    title: "MBM University Website",
    info: "This is MBM University Website Created with Nextjs, Material Ui, Bootstrap.",
    info2: "Backend is created with datastack ",
    url: "https://mbm.ac.in",
    repo: "", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: two,
    title: "Portfolio Website",
    info: "",
    info2: "",
    url: "/",
    repo: "https://github.com/shivam7366/shivam-gupta", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: three,
    title: "Desi Rasoi",
    info: "A restaurant's website where you can order food. Technology - HTML,CSS,JS,React.js,Firebase",
    info2: "",
    url: "https://shivam7366.github.io/FoodCart/",
    repo: "https://github.com/shivam7366/FoodCart/tree/master", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: three,
    title: "Desi Rasoi",
    info: "A restaurant's website where you can order food. Technology - HTML,CSS,JS,React.js,Firebase",
    info2: "",
    url: "https://shivam7366.github.io/FoodCart/",
    repo: "https://github.com/shivam7366/FoodCart/tree/master", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "hire.shivamgupta@gmail.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/gupta-shivam-/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/shivam7366",
    },
    {
      id: nanoid(),
      name: "twitter",
      url: "https://twitter.com/shivam_1623",
    },

    {
      id: nanoid(),
      name: "phone",
      url: "tel:+91-988-711-7366",
    },
    // {
    //   id: nanoid(),
    //   name: "codeforces",
    //   url: "https://codeforces.com/profile/shivam_1623",
    // },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
