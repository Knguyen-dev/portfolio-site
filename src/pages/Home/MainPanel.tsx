import ReactMarkdown from "react-markdown"
import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";
import AboutMe from "./AboutMe";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { MutableRefObject } from "react";
import { APIData } from "../../types";
import portfolioData from "../../data/portfolioData.json";

interface IMainPanelProps {
  aboutRef: MutableRefObject<null | HTMLElement>;
  experiencesRef: MutableRefObject<null | HTMLElement>;
  projectsRef: MutableRefObject<null | HTMLElement>;
}


const data = portfolioData as APIData;


export default function MainPanel({
  aboutRef,
  experiencesRef,
  projectsRef,
}: IMainPanelProps) {

  // TODO: First place where data is used Import and use your data here
  return (
    <main className="tw-flex tw-flex-col tw-gap-y-24 lg:tw-w-1/2 lg:tw-py-24">

      {/* About Me Section */}
      <AboutMe aboutRef={aboutRef} data={data}/>  

      {/* Professional Experiences Section */}
      <section id="experiences" ref={experiencesRef}>
        <header>
          <h1 className="tw-text-xl tw-font-semibold">Experiences</h1>
        </header>

        {/* Create a group called 'list'*/}
        <ul className="tw-group/list tw-my-2">
          {data.experiences.map((experienceObj, index) => (
            /*
            when we hover over a given item in the group called 'list', make that specific one's opacity full (forcefully). Whilst all other
            elements in the group called 'list' will have lower opacity.
            */
            <li
              key={index}
              className="tw-transition-all hover:!tw-opacity-100 group-hover/list:tw-opacity-50">
              <ExperienceCard experienceObj={experienceObj} />
            </li>
          ))}
        </ul>

        <a
          href={data.resumeLink}
          target="_blank"
          className="tw-flex tw-w-fit tw-items-center tw-gap-x-2 tw-font-semibold hover:tw-text-slate-400">
          <span>View Full Resume</span>
          <GrLinkNext />
        </a>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" ref={projectsRef}>
        <header>
          <h1 className="tw-text-xl tw-font-semibold">Projects</h1>
        </header>
        <ul className="tw-group/list tw-my-2">
          {data.projects
            .filter((projectObj) => projectObj.isFeatured)
            .map((projectObj, index) => (
              <li
                key={index}
                className="tw-transition-all hover:!tw-opacity-100 group-hover/list:tw-opacity-50">
                <ProjectCard projectObj={projectObj} />
              </li>
            ))}
        </ul>

        <Link
          className="tw-flex tw-w-fit tw-items-center tw-gap-x-2 tw-font-semibold hover:tw-text-slate-400"
          to="/all-projects">
          <span>View All Projects</span>
          <GrLinkNext />
        </Link>
      </section>
    </main>
  );
}
