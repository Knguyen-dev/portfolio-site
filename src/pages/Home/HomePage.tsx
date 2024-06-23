import { useState, useRef, useEffect } from "react";
import SidePanel from "./SidePanel";
import MainPanel from "./MainPanel";

export default function HomePage() {
  const [activeLinkIndex, setActiveLinkIndex] = useState<undefined | number>(0);
  const aboutRef = useRef<null | HTMLElement>(null);
  const experiencesRef = useRef<null | HTMLElement>(null);
  const projectsRef = useRef<null | HTMLElement>(null);

  // Creates an event listener that handles updating the 'activeLinkIndex' when scrolling
  useEffect(() => {
    const handleScroll = () => {
      // If references are still undefined, stop early
      if (
        !aboutRef.current ||
        !experiencesRef.current ||
        !projectsRef.current
      ) {
        return;
      }

      /**
       * NOTE: Returns the current vertical scroll position of the window, measured from hte
       * top of hte viewport to the top of the document. So this just represents
       * hwo many pixels the document has been scrolled vertically.
       */
      const scrollPosition = window.scrollY;

      /**
       * - If our scroll position is greater than or equal to the about section, hten
       *   it's at the top or beyond the about section. Then we check that it's less
       *   than the experience page, so the position is still above the experiences section.
       * NOTE: So this logic is similar for the rest
       */
      if (
        scrollPosition >= aboutRef.current.offsetTop &&
        scrollPosition < experiencesRef.current.offsetTop
      ) {
        setActiveLinkIndex(0); // About section is in view
      } else if (
        scrollPosition >= experiencesRef.current.offsetTop &&
        scrollPosition < projectsRef.current.offsetTop
      ) {
        setActiveLinkIndex(1); // Experiences section is in view
      } else if (scrollPosition >= projectsRef.current.offsetTop) {
        setActiveLinkIndex(2); // Projects section is in view
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [aboutRef, experiencesRef, projectsRef]);

  return (
    <div className="tw-px-6 tw-py-12 xl:tw-container md:tw-px-12 md:tw-py-20 lg:tw-flex lg:tw-justify-between lg:tw-gap-4 lg:tw-py-0 xl:tw-mx-auto">
      <SidePanel activeLinkIndex={activeLinkIndex} />

      <MainPanel
        aboutRef={aboutRef}
        experiencesRef={experiencesRef}
        projectsRef={projectsRef}
      />
    </div>
  );
}
