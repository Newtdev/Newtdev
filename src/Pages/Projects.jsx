
import React, { useState, useEffect, Suspense } from "react";
import WebApp from "../components/WebApp";
import MobileApp from "../components/MobileApp";
import Icons from "../components/Icons";
import { projects } from "../utils/projects";

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  return (
    <Suspense fallback={<h1>Loading</h1>}>

    <section
      className="min-h-screen bg-primary text-[#8892B0] relative py-20 px-6 sm:px-8 lg:px-12 xl:px-16"
      aria-label="Projects section"
    >


      <div
        role="tablist"
        aria-label="Project categories"
        className="flex border-b border-gray-200 dark:border-gray-700 mb-12"
      >
        {['Mobile Projects', 'Web Projects'].map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`panel-${index}`}
            className={`px-8 py-4 text-lg font-medium transition-all duration-300 border-b-2 ${activeTab === index
              ? 'border-secondary text-secondary'
              : 'border-transparent text-grey-light hover:text-grey-lighter'
              } `}
            onClick={() => setActiveTab(index)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                setActiveTab(prev => (prev + 1) % 2);
              }
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${activeTab}`}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <Icons
          ariaLabel="Social media links"
          className={`fixed ${isMobile ? "bottom-20 right-8 -translate-x-1/2" : "right-8 bottom-8"
            } z-20`}
        />

        {(activeTab === 0 ? <MobileApp mobile={projects.mobile} /> : <WebApp web={projects?.web} />)}
      </div>


    </section>
    </Suspense>
  );
};

export default Projects;