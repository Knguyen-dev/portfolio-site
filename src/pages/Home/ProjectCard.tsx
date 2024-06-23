import { GrLinkNext } from "react-icons/gr";
import { IProject } from "../../types/IProject";
import { formatStartAndEndDates } from "../../api/Intl";

interface IProjectCardProps {
  projectObj: IProject;
}

export default function ProjectCard({ projectObj }: IProjectCardProps) {
  return (
    <a
      href={projectObj.repoUrl}
      className="tw-block tw-rounded tw-p-4 tw-transition-all hover:tw-bg-slate-800/50 hover:tw-shadow-[0_4px_6px_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(148,163,184,0.1)]"
      aria-label={`Open github repo for project titled '${projectObj.title}' in another tab.`}
      target="_blank"
      rel="noreferrer">
      <div>
        <header className="tw-slate-500 tw-mb-3 tw-font-semibold">
          <div className="tw-flex tw-items-center">
            <h1 className="tw-mr-2">{projectObj.title}</h1>
            <GrLinkNext fontWeight="thin" />
          </div>

          <h2 className="tw-text-xs tw-uppercase tw-tracking-widest tw-text-slate-400">
            {formatStartAndEndDates(projectObj.startDate, projectObj.endDate)}
          </h2>
        </header>

        <div className="tw-font-semibold sm:tw-col-span-7">
          <p className="tw-text-sm tw-text-slate-400">
            {projectObj.description}
          </p>
          {projectObj.tags && (
            <ul className="tw-mt-4 tw-flex tw-flex-wrap tw-gap-2">
              {projectObj.tags.map((tag, index) => (
                <li key={index}>
                  <div className="tw-rounded-full tw-bg-teal-400/10 tw-px-3 tw-py-1 tw-text-xs tw-text-slate-300">
                    {tag}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </a>
  );
}
