import Portfolio from "../public/portfolio.png";
import MeliJ from "../public/melij.png";
import Kidspick from "../public/kidspick.png";
import Sister from "../public/sister.png";

export const data = {
  projects: [
    {
      name: "Portfolio website",
      description:
        "This is my portfolio website that I update from time to time what I accomplish and what I experience. This website includes my personal information, skills I have studied, my work experiences, and the projects I have done or participated in.",
      githubLink: "https://github.com/jeonghoyang12/my-portfolio",
      placeholder: Portfolio,
      tags: ["Next JS", "CSS", "Material UI"],
    },
    {
      name: "Online shopping mall for jewelries",
      description:
        "Built an online shopping mall website for jewelries using HTML and CSS. Integrated with Korean administration system so that the user can do the job quick and easy. Has an advantage when it comes to registering items or creating different section of items.",
      // githubLink: "#",
      placeholder: MeliJ,
      tags: ["HTML", "CSS"],
    },
    {
      name: "Online shopping mall app for kids' clothes",
      description:
        "Participated in the project solving the bugs or issues in both frontend and backend using React JS and Python. Built an admin page using Django Rest Framework which has great features on administration for the web.",
      // githubLink: "#",
      placeholder: Kidspick,
      tags: ["React JS", "Python", "Django Rest Framework"],
    },
    {
      name: "Online Korean dating platform",
      description:
        "Built a website for Korean dating platform using React JS and CSS. Created APIs using Python and Django Rest Framework and integrated with UI using Redux JS. Built also an admin web using React JS and integrated with UI also using Redux JS. APIs are created separately for UI and admin.",
      // githubLink: "#"
      placeholder: Sister,
      tags: ["React JS", "CSS", "Redux JS", "Python", "Django Rest Framework"],
    },
  ],
  skills: [
    {
      firstTitle: "Back end programming languages & tools",
      backend: ["Python", "Django"],
      secondTitle: "Front end programming languages & tools",
      frontend: ["JavaScript", "React", "Next.js", "Material UI"],
    },
  ],
  experiences: [
    {
      name: "1. McKinley & Rice",
      link: "https://www.mckinleyrice.com/",
      title: "Fullstack software engineer intern",
      period: "2019.12 ~ 2020.05",
      description: [
        "Developed a front end web of online shopping mall that sells jewelries like necklaces and bracelets using Html and CSS.",
        "Maintained and fixed some front-end UI/UX bugs of the shopping mall that sells clothes for kids using React JS, Python and Django Rest Framework.",
        "Inspected bugs in video uploading app using Swift and Android Studio.",
        "Built a UI/UX front-end web and back-end server of Korean dating web application using React JS and Django rest framework. Built admin app and integrated with the user interface.",
      ],
    },
    {
      name: "2. Smart Money System",
      link: "http://smartmoneysystem.top/",
      title: "Fullstack software engineer intern",
      period: "2022.03 ~ 2022.06",
      description: [
        "Supported development on redesigning the main app of safe transaction system between the users which has arbitrations system when any problems occur between the users when sending and receiving money.",
        "Developed a new survey component which lead users to the question based on the answers they have chosen automatically using Flask, Vue.js and MySQL for the database.",
        "Built a new website both front and back for the arbitrators to see the requests from the users and do their job using Express.js and Vue.js.",
      ],
    },
  ],
};
