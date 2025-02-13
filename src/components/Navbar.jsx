import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  HomeIcon,
  ProjectsIcon,
  AboutIcon,
  ContactIcon,
} from "../components/Icons";

export const RoutesEnum = {
  Home: '/',
  About: '/about',
  Projects: '/projects',
  Contact: '/contact',
  Details: '/details/:id'
}

const Links = [
  {
    id: 1,
    link: RoutesEnum.Home,
    name: "Home",
    icon: <HomeIcon className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    id: 2,
    link: RoutesEnum.Projects,
    name: "Projects",
    icon: <ProjectsIcon className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    id: 3,
    link: RoutesEnum.About,
    name: "About Me",
    icon: <AboutIcon className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
  {
    id: 4,
    link: RoutesEnum.Contact,
    name: "Contact",
    icon: <ContactIcon className="h-5 w-5 sm:h-6 sm:w-6" />,
  },
];


const Navbar = () => {
  const path = useLocation()
  const [activeNav, setActiveNav] = useState(path.pathname);
  const [isMobile] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);

  return (
    <nav
      className={`fixed bottom-0 left-1/2 z-20 -translate-x-1/2 transform bg-primary-dark/90 backdrop-blur-sm rounded-t-xl px-4 sm:px-6 py-2 shadow-lg transition-all duration-300 ${isMobile ? "w-full rounded-none" : "w-auto hover:bg-primary-dark/100"
        }`}
      aria-label="Main navigation"
      onMouseLeave={() => setHoveredNav(null)}>
      <div
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-md bg-secondary-light text-primary text-sm font-medium transition-all duration-300 ${hoveredNav ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        aria-live="polite">
        {Links.find((item) => item.id === hoveredNav)?.name}

        <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary-light rotate-45" />
      </div>

      <div className="flex gap-4 sm:gap-6 md:gap-8">
        {Links.map(({ id, name, icon: Icon, link }) => (
          <Link
            key={id}
            to={link}
            onClick={() => setActiveNav(link)}
            onMouseEnter={() => setHoveredNav(id)}
            onFocus={() => setHoveredNav(id)}
            className={`relative p-2 rounded-full z-10 transition-all duration-300 ${activeNav === link
              ? "text-white bg-secondary-light/20"
              : "text-secondary-light hover:text-white"
              } ${isMobile ? "text-sm" : "text-base"
              } focus:outline-none focus:ring-2 focus:ring-secondary-light`}
            aria-label={`${name} section`}>
            {Icon}

            {/* Mobile Active Label */}
            {isMobile && activeNav === link && (
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-secondary-light text-xs">
                {name}
              </span>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
