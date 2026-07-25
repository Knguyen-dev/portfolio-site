import { GrLinkNext } from "react-icons/gr";
import { Experience } from "../../types";
import {formatStartAndEndDates} from "../../api/Intl"

interface IExperienceCardProps {
  experienceObj: Experience;
}

export default function ExperienceCard({
  experienceObj,
}: IExperienceCardProps) {
  const startDate = new Date(experienceObj.dates.start)
  const endDate = experienceObj.dates.end ? new Date(experienceObj.dates.end) : undefined;
  return (
    <a
      href={experienceObj.link}
      className="tw-block tw-rounded tw-p-4 tw-transition-all hover:tw-bg-slate-800/50 hover:tw-shadow-[0_4px_6px_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(148,163,184,0.1)]"
      target="_blank"
      rel="noreferrer">
      <div>
        <header className="tw-mb-3 tw-font-semibold">
          {/* Top Row: Company Name on the left, Dates on the right */}
          <div className="tw-flex tw-items-baseline tw-justify-between">
            <h1 className="tw-text-lg tw-font-bold tw-text-white">
              {experienceObj.companyName}
            </h1>

            <h2 className="tw-text-xs tw-uppercase tw-tracking-widest tw-text-slate-400">
              {formatStartAndEndDates(startDate, endDate)}
            </h2>
          </div>

          {/* Bottom Row: Job Title below Company Name */}
          <h2 className="tw-text-sm tw-font-normal tw-text-slate-400 tw-mt-0.5">
            {experienceObj.title}
          </h2>
        </header>

        <div className="tw-font-semibold sm:tw-col-span-7">
          <p className="tw-text-sm tw-text-slate-400">
            {experienceObj.description}
          </p>
        </div>
      </div>
    </a>
  );
}
