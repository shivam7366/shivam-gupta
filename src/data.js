import { nanoid } from "nanoid";
import one from "../src/images/one.jpg";
import two from "./images/two.jpg";
import three from "./images/three.jpg";
import four from "./images/four.jpg";
import five from "./images/five.jpg";
import six from "./images/six.png";
import seven from "./images/seven.jpg";
import eight from "./images/eight.png";

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
  paragraphTwo:
    "I am a self-taught developer and I love to learn new things. I am a quick learner and I am always ready to learn new things. I am a team player and I love to work with a team. I am a hardworking person and I love to do work.",
  paragraphThree:
    " Currently I am pursuing my bachelor's degree in Electronic & Computer Engineering from MBM Engineering College, Jodhpur. I am in 4th year.",
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
    info2: "Backend is created with Directus CMS. ",
    info3: "Technology - Nextjs, Material Ui, Bootstrap, Directus",
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
    info: "A restaurant's website where you can order food. ",
    info2: "Technology - HTML, CSS, JS, React.js, Firebase",
    url: "https://shivam7366.github.io/FoodCart/",
    repo: "https://github.com/shivam7366/FoodCart/tree/master", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: four,
    title: "Task Manager",
    info: " A Task Manager App where you can add, delete, update your tasks.",
    info2:
      " Authentication is done with JWT and password is encrypted with bcryptjs",
    info3: "Technology - HTML, CSS, JS, React.js, Node.js, Express.js, MongoDB",
    url: "",
    repo: "https://github.com/shivam7366/Task-manager", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: five,
    title: "Great Quotes",
    info: "A quote holder app where you can add your quote and also see others quote as well as yours also.",
    info2:
      "Technology - HTML, CSS, JS, React.js, React Router, Firebase, Bootstrap ",
    url: "https://react-route-db196.firebaseapp.com/quotes",
    repo: "https://github.com/shivam7366/Quote-Holder", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: six,
    title: "KPSS UNIVERSITY Website",
    info: " This is a University's website (frontend design only).",
    info2: " Technology - HTML, CSS, JS",
    url: "https://shivam7366.github.io/school_Website/",
    repo: "https://github.com/shivam7366/school_Website", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: seven,
    title: "Play Games ",
    info: " This project have 2 Games and one is Dice and another is Guess Right Digit. Built with pure JavaScript.",
    info2: "Technology - HTML, CSS, JS",
    url: "https://shivam7366.github.io/Games/",
    repo: "https://github.com/shivam7366/Games", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: eight,
    title: "Tour your Dream (Yatra.com)",
    info: " This is a Tour agency's website (frontend design only).",
    info2: "Technology - HTML, CSS, Bootstrap",
    url: "https://shivam7366.github.io/MyfirstProject/",
    repo: "https://github.com/shivam7366/MyfirstProject", // if no repo, the button will not show up
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
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
