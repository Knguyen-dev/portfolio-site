import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { projectList } from "../../data";
import TagChip from "../Home/TagChip";

export default function ProjectsPage() {
  const sortedProjectList = projectList.sort((a, b) => {
    const yearA = a.startDate.getFullYear();
    const yearB = b.startDate.getFullYear();

    // Sort in descending order, so the earliest projects are rendered on top
    return yearB - yearA;
  });

  return (
    <div className="tw-px-4 tw-py-8 lg:tw-container lg:tw-mx-auto lg:tw-p-24">
      <header>
        <Link
          to="/"
          className="tw-flex tw-w-fit tw-items-center tw-gap-x-2 tw-font-semibold hover:tw-text-slate-400">
          <FaArrowLeftLong />
          <span>Back to Kevin Nguyen</span>
        </Link>
        <h1 className="tw-text-xl tw-font-bold lg:tw-text-5xl">All Projects</h1>
        <h2 className="tw-mt-2 tw-text-slate-400 lg:tw-w-1/3">
          A list of all of my projects, rather than just the featured ones.
        </h2>
      </header>

      <table className="tw-mt-12 tw-w-full tw-border-collapse tw-text-left">
        <thead className="tw-sticky tw-top-0 tw-z-10 tw-border-b tw-border-slate-300/10 tw-bg-slate-900/75 tw-px-6 tw-py-5 tw-backdrop-blur">
          <tr>
            <th className="tw-py-4 tw-pr-8 tw-text-sm tw-font-semibold tw-text-slate-200">
              Year
            </th>
            <th className="tw-py-4 tw-pr-8 tw-text-sm tw-font-semibold tw-text-slate-200">
              Project
            </th>
            <th className="tw-hidden tw-py-4 tw-pr-8 tw-text-sm tw-font-semibold tw-text-slate-200 lg:tw-table-cell">
              Made For
            </th>
            <th className="tw-hidden tw-py-4 tw-pr-8 tw-text-sm tw-font-semibold tw-text-slate-200 lg:tw-table-cell">
              Built with
            </th>
            <th className="tw-hidden tw-py-4 tw-pr-8 tw-text-sm tw-font-semibold tw-text-slate-200 sm:tw-table-cell">
              Github Url
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedProjectList.map((project, index) => (
            <tr
              key={index}
              className="tw-border-b tw-border-slate-300/10 tw-align-top">
              <td className="tw-py-4 tw-pr-8 tw-text-slate-400">
                {project.startDate.getFullYear()}
              </td>
              <td className="tw-max-w-36 tw-py-4 tw-pr-8 tw-font-semibold">
                {project.title}
              </td>
              <td className="tw-hidden tw-py-4 tw-pr-8 lg:tw-table-cell">
                <p className="tw-text-slate-400">
                  {project.madeFor || "Personal Project"}
                </p>
              </td>
              <td className="tw-hidden tw-max-w-56 tw-py-4 tw-pr-8 lg:tw-table-cell">
                <ul className="tw-flex tw-flex-wrap tw-gap-2">
                  {project.tags?.map((tag, index) => (
                    <li key={index}>
                      <TagChip tag={tag} />
                    </li>
                  ))}
                </ul>
              </td>
              <td className="tw-hidden tw-py-4 tw-pr-8 sm:tw-table-cell">
                <a
                  href={project.repoUrl}
                  className="tw-text-blue-500 hover:tw-underline"
                  target="_blank"
                  rel="noopener noreferrer">
                  View Code
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
