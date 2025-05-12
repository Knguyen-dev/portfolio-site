import { GrLinkNext } from "react-icons/gr";
import { Experience } from "../../types";
import {formatStartAndEndDates} from "../../api/Intl"

interface IExperienceCardProps {
  experienceObj: Experience;
}

export default function ExperienceCard({
  experienceObj,
}: IExperienceCardProps) {


  let startDate = new Date(experienceObj.dates.start)
  let endDate;
  if (experienceObj.dates.end) {
    endDate = new Date(experienceObj.dates.end)
  } else {
    endDate = new Date(Date.now())
  }

  return (
    <a
      href={experienceObj.link}
      className="tw-block tw-rounded tw-p-4 tw-transition-all hover:tw-bg-slate-800/50 hover:tw-shadow-[0_4px_6px_rgba(0,0,0,0.1),inset_0_1px_0_0_rgba(148,163,184,0.1)]"
      target="_blank"
      rel="noreferrer">
      <div>
        <header className="tw-slate-500 tw-mb-3 tw-font-semibold">
          <div className="tw-flex tw-items-center">
            <h1 className="tw-mr-2">
              {experienceObj.title}
            </h1>
            <GrLinkNext fontWeight="thin" />
          </div>

          <h2 className="tw-text-xs tw-uppercase tw-tracking-widest tw-text-slate-400">
            {formatStartAndEndDates(startDate, endDate)}
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
