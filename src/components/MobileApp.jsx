import React, { useState } from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { FaEye } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { RoutesEnum } from "./Navbar";

const MobileApp = ({ mobile }) => {
  const [preload, setPreload] = useState(false);
  const navigate = useNavigate()

  return (
    <>
      {mobile?.map((project) => {
        return <article
          key={project.id}
          className="group relative bg-[#112240] rounded-lg p-6 transition-transform duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl"
          onMouseEnter={() => setPreload(true)}
        >
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-md aspect-video mb-6">
            <img
              src={project.imgSrc}
              alt={`Screenshot of ${project.title}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading={preload ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Project Content */}
          <h3 className="text-2xl font-semibold text-[#CCD6F6] mb-2">
            {project.title}
          </h3>
          <p className="text-[#8892B0] text-sm leading-relaxed mb-4">{project.description}</p>

          {/* Tech Stack */}
          <ul className="flex flex-wrap gap-2 mb-6">
            {project?.tech?.map((tech, i) => (
              <li
                key={i}
                className="text-xs text-secondary font-mono px-2 py-1 bg-secondary/10 rounded"
              >
                {tech}
              </li>
            ))}
          </ul>

          {/* Project Links */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(`/details/${project.slug}`,)}

              className="text-xs text-white px-2 py-2 bg-secondary/10 rounded cursor-pointer gap-x-2 flex items-center"
            >
              More details
              <FaEye />
            </button>


            <a
              download
              href={project.live}
              role="button"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-secondary transition-colors text-xs hover:text-white px-2 py-2 bg-secondary/10 rounded cursor-pointer gap-x-2 flex items-center"
              aria-label={`Visit ${project.title} live site`}
            >
              Download
              <AiOutlineCloudDownload className="w-4 h-4" />
            </a>
          </div>
        </article>
      })}
    </>
  );
};

export default MobileApp;
