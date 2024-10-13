import { IExperience } from "./types/IExperience";
import { IProject } from "./types/IProject";

/**
 * Put all external data for the app here. So all of your
 * experiences, projects, your urls to other websites all belong here.
 * It's not going to be that much data, and since it's all closely related, you can
 * justify putting it all here instead of having it in different files.
 * Single source of truth in this case.
 */

export const resumeUrl: string =
  "https://docs.google.com/document/d/1NBrCtHgY4vvicPOdYBR7mo-Alf07Z7h4bsf_a5IeeNo/edit?usp=sharing";

export const linkedInUrl =
  "https://www.linkedin.com/in/kevin-nguyen-13313b298/";

export const githubUrl = "https://github.com/Knguyen-dev/";

export const experienceList: IExperience[] = [
  {
    dateRange: "August 2022 - May 2024",
    jobTitle: "Secretary and President",
    jobDescription: `Helped plan and develop the logistics for over 20 on-campus events within my time there. 
  Lead the development of a campus project to designate more private studying rooms for students on the Bloomington campus. This included things such as
  crafting up a project plan that got the project approved by higher ups, gathering student feedback, and ensured that the project was going well.`,
    companyTitle: "SGA (Ivy Tech)",
    companyUrl: "https://www.ivytech.edu/locations/bloomington/",
  },
];

export const projectList: IProject[] = [
  {
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-06-30"),
    title: "Company blog webapp/CMS",
    description: `A full-stack blog application that has been created under the assumption that a team of editors would be managing it. 
                  Implements user authentication (JWT) with credential refresh, alongside role-based access authorization on the API and client. 
                  Handles complex CRUD operations associated with the creation and modification of various database models such as users, posts, categories, and tags. Implements secure 
                  functionality to send emails to a user's account for cases such as password reset, email verification, and username recovery.`,
    tags: ["React", "JavaScript", "TypeScript", "Express", "MongoDB", "Redis"],
    repoUrl: "https://github.com/Knguyen-dev/Blog-API",
    isFeatured: true,
  },
  {
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-04-30"),
    title: "Inventory Management Application",
    description: `A C++ console application for managing a store's inventory of products. 
                  Application handles complex database queries such as JOINS, handles various edge cases involving product availability, SQL cascading,
                  handling what to do when customer has insufficient balance, etc.`,
    tags: ["C++", "SQL"],
    repoUrl: "https://github.com/Knguyen-dev/SDEV210-Knguyen.git",
    isFeatured: true,
  },
  {
    startDate: new Date("2023-07-01"),
    endDate: new Date("2023-07-31"),
    title: "Book Library - Console",
    description: `A C++ console application that manages books in a university library. As a librarian, you can create and add books
                  to the library. You can also register students, and then handle the issuing and returning of books to and from students.
                  Created data-structures such as hashmaps and linked lists from scratch in order to store books in-memory. Our hashmap implementation used linked lists to avoid hash collisions. Integrated other algorithms such as merge sort for displaying stored books in alphabetical order!`,
    tags: ["C++", "Data Structures and Algorithms"],
    repoUrl: "https://github.com/Knguyen-dev/Book-Library-Console.git",
    madeFor: "Course Work",
    isFeatured: true,
  },
  {
    startDate: new Date("2023-08-01"),
    endDate: new Date("2023-12-31"),
    title: "AI-Powered Story Writer",
    description: `A Python GUI application that allows users to chat to a story-writing AI to help the user write and flesh out stories. 
                  Register, login, and start creating and saving AI-generated stories in your library. This was a very complex project, and as a team,
                  everyone worked on a different part of the application. I worked on designing and handling the database interaction logic, and the others 
                  worked on things such as the AI logic, front-end design, and integration with a Python PDF generation library. None of this would 
                  have been possible without those intelligent individuals!`,
    tags: ["Python", "SQL", "Tkinter GUI"],
    repoUrl: "https://github.com/Knguyen-dev/SDEV-265-Group-4",
    madeFor: "Course Work",
    isFeatured: true,
  },
  {
    startDate: new Date("2023-03-01"),
    endDate: new Date("2023-05-31"),
    title: "Kroger Ecommerce App",
    description: `A Python GUI application that simulates allowing users to register and sign up for shopping at an online supermarket.
                  Allows authenticated users to put items in their shopping cart and check out those items.
                  Learn more about the code from my first ever time working in a software development team!`,
    tags: ["Python", "SQL", "Tkinter GUI"],

    madeFor: "Course Work",
    repoUrl:
      "https://github.com/Knguyen-dev/SDEV_220_Final_Project_TeamBlue_Nguyen.git",
  },
  {
    startDate: new Date("2023-12-20"),
    endDate: new Date("2024-01-11"),
    title: "GamerCity - Videogame Store",
    description: `A React application that imitates an ecommerce website. Here the user is shopping for video games at the company "GamerCity"!`,
    madeFor: "Personal Project",
    tags: ["React", "JavaScript"],
    repoUrl: "https://github.com/Knguyen-dev/Shopping-Cart-App",
  },
  {
    startDate: new Date("2023-11-17"),
    endDate: new Date("2023-11-28"),
    title: "Memory Card Game - Video Game Edition",
    description: `A memory-based game that makes the user pick from a list of video games. The user must continue picking games that they haven't picked before!`,
    tags: ["React", "JavaScript"],
    repoUrl: "https://github.com/Knguyen-dev/Memory-Game.git",
  },
  {
    startDate: new Date("2023-10-10"),
    endDate: new Date("2023-11-18"),
    title: "Resume Builder",
    description: `A React application that allows users to build a resume, and see the changes they make happen in real time.`,
    tags: ["React", "JavaScript"],
    repoUrl: "https://github.com/Knguyen-dev/CV-Application.git",
  },
  {
    startDate: new Date("2023-07-30"),
    endDate: new Date("2023-11-04"),
    title: "Weather App",
    description: `A JavaScript application that allows users to see the weather forecast for any place they search.`,
    tags: ["JavaScript", "API"],
    repoUrl: "https://github.com/Knguyen-dev/simple-weather-app",
  },
];
