/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Raj Gohel",
  title: "Hi all, I'm Raj",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Nextjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://flowcv-user-file-uploads-prod.s3.eu-central-1.amazonaws.com/websiteButton/0hc4sok4j0y5qtisn3vkw3c2ph.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rajgohel",
  linkedin: "https://www.linkedin.com/in/raj-gohel-a2331012a",
  gmail: "rajgohel855@gmail.com",
  medium: "https://medium.com/@rajgohel0001",
  stackoverflow: "https://stackoverflow.com/users/11288473/raj-gohel",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as AWS / Azure"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react",
      logo: require("./assets/images/react.png")
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fab fa-react",
      logo: require("./assets/images/next.png")
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fab fa-react",
      logo: require("./assets/images/graphql.png")
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-react",
      logo: require("./assets/images/typescript.png")
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fab fa-react",
      logo: require("./assets/images/redux.png")
    },
    {
      skillName: "Express.js",
      fontAwesomeClassname: "fab fa-react",
      logo: require("./assets/images/express.webp")
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node",
      logo: require("./assets/images/node.png")
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fab fa-node",
      logo: require("./assets/images/redis.png")
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
      logo: require("./assets/images/js.png")
    },
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5",
      logo: require("./assets/images/html.png")
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt",
      logo: require("./assets/images/css.png")
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fab fa-docker",
      logo: require("./assets/images/tailwind.png")
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-docker",
      logo: require("./assets/images/bootstrap.png")
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database",
      logo: require("./assets/images/mysql.png")
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database",
      logo: require("./assets/images/mongodb.png")
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database",
      logo: require("./assets/images/postgresql.png")
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws",
      logo: require("./assets/images/aws.png")
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-aws",
      logo: require("./assets/images/azure.png")
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker",
      logo: require("./assets/images/docker.png")
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-docker",
      logo: require("./assets/images/git.png")
    },
    {
      skillName: "Bitbucket",
      fontAwesomeClassname: "fab fa-docker",
      logo: require("./assets/images/bitbucket.png")
    },
    {
      skillName: "GitLab",
      fontAwesomeClassname: "fab fa-docker",
      logo: require("./assets/images/gitlab.png")
    },
    {
      skillName: "D3.js",
      fontAwesomeClassname: "fab fa-docker",
      logo: require("./assets/images/d3.png")
    },
    {
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-docker",
      logo: require("./assets/images/jira.png")
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "V.V.P. Engineering College",
      logo: require("./assets/images/edu.png"),
      subHeader: "Bachelor Of Engineering in Information Technology",
      duration: "September 2015 - April 2019",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer",
      company: "Dev Information Technology Ltd",
      companylogo: require("./assets/images/devit.png"),
      date: "Aug 2022 – Present",
      desc: "As a Frontend Developer, my duties included managing the development of the modules assigned to me and assisting the team in times of need. I contributed to the wireframing, prototyping, component design for reusability, and research phases. I also participated on the daily scrum call and understood the requirements via the call, email, and corresponding stack holder."
    },
    {
      role: "Sr. Software Developer",
      company: "SharepointEmpower Pvt. Ltd.",
      companylogo: require("./assets/images/spe.jpg"),
      date: "Nov 2019 – Jul 2022",
      desc: "I was in charge of reviewing code for quality and functionality as a senior software developer.drafting and carrying out design blueprints. I also participated on the daily scrum call and understood the requirements via the call, email, and corresponding stack holder. creating, evaluating, and deploying new features in accordance with customer needs."
    },
    {
      role: "Jr. Developer",
      company: "Rao Information Technology Pvt. Ltd.",
      companylogo: require("./assets/images/rao.jpg"),
      date: "Feb 2019 – Oct 2019",
      desc: "I contributed to the development, maintenance, testing, and debugging of websites and applications as a junior developer. Take part in code reviews and provide colleagues feedback. Work together as a team to develop and implement new features. Write effective, readable, and tidy code. Debug and fix problems with the current codebase."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Side Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/netflix.png"),
      projectName: "Netflix clone",
      projectDesc: "Netflix Clone with React, NextJS, MongoDB, TailwindCSS & and Prisma. Environment, Typescript, NextJS Setup. MongoDB & Prisma connect, Database creation. Authentication with NextAuth, Google & and Github Login. Full responsiveness on all pages. Cookie-based authentication. API and Controller creation. Detail-oriented effects and animations using TailwindCSS. React SWR data fetching. Zustand state management.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nflix-simple.vercel.app"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Fundamentals",
      // subtitle:
      //   "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/coursera.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/GTP9XUMB4XTU"
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "rajgohel855@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
