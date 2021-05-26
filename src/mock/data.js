import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Umaima Afzal | Business Information Systems', // e.g: 'Name | Developer'
  lang: 'English and Urdu', // e.g: en, es, fr, jp
  description: 'Portfolio Website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Aspiring Data Analyst | ',
  name: 'Umaima Afzal',
  subtitle: '| A recent graduate of Business Information Systems from Oregon State University',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'A recent graduate of Business Information Systems with experience leading teams, documentation, development, and delivery of new and innovative ideas. I have past experience in C# programming, SQL, JavaScript, Database creation using SQL server and MS Access, Tableau, and Rapid Miner. I am a visionary and creative thinker with strong analytical and problem-solving skills. I am equipped with strong communication and leadership skills while also being adaptable to different situations.',
  paragraphTwo:
    'I am equipped with strong communication and leadership skills while also being adaptable to different situations',
  paragraphThree: '',
  resume: 'https://github.com/umaimafzal/resume/blob/main/UmaimaAfzal_resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'City of Portland HR Bureau - Administrative Rules Process Improvement',
    info:
      'Implemented a centralized database system to store proposals using MS SQL Server. Carried out extensive research on existing software solutions. ',
    info2:
      'Created a custom built C# application using Visual Studio ASP.NET Core that would connect to the database and effectively store and track proposal entries.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projecttwo.jpg',
    title: 'Exlibris Alma Digital - Digital Course Reserves for Oregon State University Libraries',
    info:
      'Researched alternatives of physical course reserves during the Pandemic. Contacting the Ex Libris team to create controlled digital lending library that adheres with copyright laws.',
    info2:
      'Tested the compatibility of the software and documented the processes for future training. Trained staff members on data entry procedures in the new system. Assessed the usefulness and effectiveness of the new system by taking surveys.',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'afzalumaima26@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'gmail',
      url: 'afzalumaima26@gmail.com',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/umaimaafzal/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/umaimafzal',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
