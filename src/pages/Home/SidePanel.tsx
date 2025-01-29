import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub />,
    href: import.meta.env.VITE_GITHUB_URL,
    ariaLabel: "Open Kevin Nguyen's Github profile in a new tab",
  },
  {
    icon: <FaLinkedin />,
    href: import.meta.env.VITE_LINKEDIN_URL,
    ariaLabel: "Open Kevin Nguyen's LinkedIn profile in a new tab",
  },
];

const navLinks = [
  {
    text: "About",
    href: "#about",
  },
  {
    text: "Experiences",
    href: "#experiences",
  },
  {
    text: "Projects",
    href: "#projects",
  },
];

export default function SidePanel({
  activeLinkIndex,
}: {
  activeLinkIndex: undefined | number;
}) {
  return (
    <div className="tw-mb-8 tw-flex tw-flex-col tw-gap-y-8 lg:tw-sticky lg:tw-top-0 lg:tw-max-h-screen lg:tw-w-1/2 lg:tw-gap-y-16 lg:tw-py-24">
      <header>
        <h1 className="tw-text-5xl tw-font-semibold">Kevin Nguyen</h1>
        <h2 className="tw-my-4 tw-text-xl tw-font-semibold">
          Entry Software Engineer
        </h2>
        <p className="tw-w-2/3 tw-text-gray-400">
          I work on developing the front and backends of our web applications!
        </p>
      </header>

      {/* Navbar of the side panel */}
      <nav className="tw-hidden tw-text-xl lg:tw-inline">
        <ul>
          {navLinks.map((linkObj, index) => (
            <li className="tw-mb-4" key={index}>
              <a
                className={`animated-link ${activeLinkIndex === index ? "animated-link-active" : ""}`}
                href={linkObj.href}>
                {linkObj.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Links to github, linkedIn, instagram */}
      <ul className="tw-flex tw-gap-x-2">
        {socialLinks.map((linkObj, index) => (
          <li key={index}>
            <a
              target="_blank"
              rel="noreferrer"
              className="tw-text-3xl tw-text-slate-400 hover:tw-text-slate-300"
              aria-label={linkObj.ariaLabel}
              href={linkObj.href}>
              {linkObj.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
