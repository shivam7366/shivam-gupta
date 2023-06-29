import React from "react";
import Slide from "react-reveal";
const data = {
  skillmessage:
    "Here you can create a short write-up of your skills to show off to employers",
  education: [
    {
      school: "University?",
      degree: "Masters in Beer tasting",
      graduated: "April 2017",
      description:
        "Describe your experience at school, what you learned, what useful skills you have acquired etc.",
    },
    {
      school: "School #1 Maybe College?",
      degree: "What did you study 101",
      graduated: "March 2013",
      description:
        "Describe your experience at school, what you learned, what useful skills you have acquired etc.",
    },
  ],
  work: [
    {
      company: "Awesome Design Studio",
      title: "Senior UX God ",
      years: "March 2018 - Present",
      description:
        "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.",
    },
    {
      company: "Super Cool Studio",
      title: "Junior bug fixer",
      years: "March 2017 - February 2018",
      description:
        "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know.",
    },
  ],
  skills: [
    {
      name: "Python",
      level: "60%",
    },
    {
      name: "VueJs",
      level: "55%",
    },
    {
      name: "ReactJs",
      level: "50%",
    },
    {
      name: "CSS",
      level: "90%",
    },
    {
      name: "PHP",
      level: "80%",
    },
    {
      name: "Swift",
      level: "50%",
    },
    {
      name: "JAVA",
      level: "80%",
    },
  ],
};
function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function WorkEducation() {
  const skillmessage = data.skillmessage;
  const education = data.education.map(function (education) {
    return (
      <div key={education.school} className="container">
        <h3>{education.school}</h3>
        <p className="info">
          {education.degree} <span>&bull;</span>
          <em className="date">{education.graduated}</em>
        </p>
        <p>{education.description}</p>
      </div>
    );
  });

  const work = data.work.map(function (work) {
    return (
      <div key={work.company}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        <p>{work.description}</p>
      </div>
    );
  });

  const skills = data.skills.map((skills) => {
    const backgroundColor = getRandomColor();
    const className = "bar-expand " + skills.name.toLowerCase();
    const width = skills.level;

    return (
      <li key={skills.name}>
        <span style={{ width, backgroundColor }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    );
  });

  return (
    <section id="resume" className="">
      <Slide left duration={1300}>
        <div className="row education d-flex flex-row ">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
}

export default WorkEducation;
