import Portfolio from "../public/portfolio.png";

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
  ],
  skills: [
    {
      firstTitle: "Back end programming languages & tools",
      backend: ["Python", "Django Rest Framework"],
      secondTitle: "Front end programming languages & tools",
      frontend: ["HTML", "CSS", "React JS", "Next JS", "Material UI"],
    },
  ],
  experiences: [
    {
      name: "1. McKinley & Rice",
      link: "https://www.mckinleyrice.com/",
      title: "Fullstack software engineer intern",
      period: "2019.12 ~ 2020.05",
      description: [
        "Developed a front end web of online shopping mall that sells Accessories like necklaces and bracelets using Html and CSS.",
        "Maintained and fixed some front-end UI/UX bugs of the shopping mall that sells clothes for kids using React JS, Python and Django Rest Framework.",
        "Inspected bugs in video uploading app using Swift and Android Studio.",
        "Built a UI/UX front-end web and back-end server of Korean dating web application using React JS and Django rest framework. Built admin app and integrated with the user interface.",
      ],
    },
  ],
};
