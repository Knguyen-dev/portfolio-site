import { resumeUrl, projectList, experienceList } from "../../data";

import ExperienceCard from "./ExperienceCard";
import ProjectCard from "./ProjectCard";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { MutableRefObject } from "react";

interface IMainPanelProps {
  aboutRef: MutableRefObject<null | HTMLElement>;
  experiencesRef: MutableRefObject<null | HTMLElement>;
  projectsRef: MutableRefObject<null | HTMLElement>;
}

export default function MainPanel({
  aboutRef,
  experiencesRef,
  projectsRef,
}: IMainPanelProps) {
  return (
    <main className="tw-flex tw-flex-col tw-gap-y-24 lg:tw-w-1/2 lg:tw-py-24">
      {/* About Me Section */}
      <section id="about" ref={aboutRef}>
        <header>
          <h1 className="tw-mb-2 tw-text-xl tw-font-bold">About Me</h1>
        </header>

        <div className="tw-text-md tw-flex tw-flex-col tw-gap-y-2 tw-text-slate-400">
          <p>
            Currently, I'm still studying Computer Science. Outside of school, I
            build personal projects to expand and refine my skills. I have
            experience working in languages such as TypeScript, Java, C++, and
            Python. I also have some experience designing and working with SQL
            and NoSQL databases as well. While I have experience in full-stack
            development, I'm still trying to get experience to see which field
            is best for me. In terms of career goals, I dream of a job where I'm
            able to serve some higher purpose, and feel like my work is
            meaningful.
          </p>

          <p>
            Beyond software and technology, I enjoy playing video games like
            Minecraft and Terraria. These games provide a great way to connect
            with friends and unwind after a busy day, and honestly there's
            nothing better than being able to talk to your friends and relax
            every once in a while.
          </p>
        </div>
      </section>

      {/* Professional Experiences Section */}
      <section id="experiences" ref={experiencesRef}>
        <header>
          <h1 className="tw-text-xl tw-font-semibold">Experiences</h1>
        </header>

        {/* Create a group called 'list'*/}
        <ul className="tw-group/list tw-my-2">
          {experienceList.map((experienceObj, index) => (
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
          href={resumeUrl}
          target="_blank"
          className="tw-flex tw-w-fit tw-items-center tw-gap-x-2 tw-font-semibold hover:tw-text-slate-400">
          <span>View Full Resume</span>
          <GrLinkNext />
        </a>
      </section>

      <section id="projects" ref={projectsRef}>
        <header>
          <h1 className="tw-text-xl tw-font-semibold">Projects</h1>
        </header>
        <ul className="tw-group/list tw-my-2">
          {projectList
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
