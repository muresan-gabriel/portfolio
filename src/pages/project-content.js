const projects = [
  {
    name: "dev-lib",
    title: "DEV.LIB",
    description: [
      "Built using HTML, CSS, JS, PHP and SQL, dev.lib is a project created for the 'Web and Mobile Development' Laboratory @ Technical University of Cluj-Napoca.",
      "Users have the ability to create an account and login, authentication system developed using PHP for the server, aswell as SQL for creating and storing user information.",
      "Users can also post their own assets, such as icon packages, illustrations, React components, and many more. Each user has their own profile and they can easily edit it.",
      "I learnt how to connect a PHP application to an SQL database and run queries from the PHP application to retrieve the data that is needed.",
      "I also learnt how to use a framework (Bootstrap) and how efficient it is to implement it in projects.",
      "The website is deployed on Netlify, but will soon be ported on DigitalOcean or AWS, as Netlify does not support deployment of PHP applications.",
      "The project is intended to be worked on at the same pace as the laboratory. The website and it's functionalities are not final and are still in development.",
    ],
    link: "https://devlibproject.netlify.app/",
  },
  {
    name: "orgnz",
    title: "orgnz.",
    description: [
      "React application created to schedule and preview tasks or observe and analyze spendings.",
      "The application is built in React and is planned to follow a full-stack development course I took on LinkedIn Learning.",
      "It's planned to use the MERN stack to be able to easily add and remove tasks, store them in a database, but also to track data about tasks and spendings.",
      "Project is currently in development.",
    ],
    link: "https://orgnz.netlify.app/",
  },
  {
    name: "portfolio-v1",
    title: "Portfolio v1.0",
    description: [
      "My first personal website was built using vanilla HTML, CSS and JS, but Bootstrap was used for layout and responsiveness.",
      "The website has a minimalistic design, focusing on micro-interactions and UX. It also has a short transition in between each page which displays my personal logo.",
      "At the time of building this website I was following a JS course made by Jonas Schmedtmann on Udemy, and I used what I've learnt to code certain interactions using vanilla Javascript.",
      "It has a basic setup of .html documents for each page. I've learnt during the process of building the website a short hack for when Javascript files load before the DOM does, which is to add a 'defer' attribute to script tags.",
      "The website was used to showcase development work and allow recruiters to easily visualize and access projects.",
      "The website was first deployed on GitHub pages. After a period of time, a custom domain was aquired and the website was deployed on Netlify. It is the ancestor of the React application you're currently on, the present portfolio.",
    ],
    link: "https://muresan-gabriel.github.io/",
  },
  {
    name: "la-moara",
    title: "'La Moară' Webinar by Cognizant Softvision",
    description: [
      "'La Moară' is a JS Webinar made by Cognizant Softvision.",
      "The purpose of this webinar is to build a web-based game using React, Node.js, Express.js and Socket.io, based on a game called 'Nine Men's Morris'.",
      "It follows an eight week course which started as an introduction to HTML and CSS, followed by an introduction in JS fundamentals.",
      "Progress is being tracked via homeworks assigned at the end of each course.",
      "The code written during the course sessions and the homeworks are present in a GitHub repository for easy access and the whole repository is deployed on Netlify as a React application.",
      "The first homework was completed inside a simple .html document with a .css file attached to it for styling.",
      "So far, during the course, I've learnt more about structuring information inside containers, OOP in JS, and that the Monokai Pro theme and the Fira Code font are a great combination for VSCode (thanks, Alex).",
      "The course is only two weeks in and more is yet to be learnt from it.",
    ],
    link: "https://la-moara-cognizant-softvision-course.netlify.app/",
  },
  {
    name: "logo-portfolio",
    title: "Logo Collection v1.0",
    description: ["Work in progress..."],
  },
  {
    name: "ui-portfolio",
    title: "UI Collection v1.0",
    description: ["Work in progress..."],
  },
];

export default projects;
