
  const historys = [
    {
      id: 1,
      title: " Sky ventures (South East Asia), June 2024 - Present",
      titleSub: "Software Engineer Lead",
      description:
        "Led and managed a cross-functional engineering team of 10 professionals, including Product Managers, Quality Assurance Engineers, DevOps specialists, and software developers. Provide strategic technical leadership by selecting and defining technology stacks for innovative projects while overseeing the development of both Web2 and Web3 projects, such as meme coins and payment platforms. Manage technical architecture for diverse blockchain and traditional web application ecosystems, conducting comprehensive code reviews to ensure code quality, performance, and adherence to best practices. Perform advanced debugging and troubleshooting of complex software issues, drive product strategy, and ensure technical roadmap alignment for emerging digital technologies. Collaborate on blockchain and traditional web development initiatives, mentor team members in cutting-edge web technologies and blockchain development, and evaluate and integrate emerging technologies across Web2 and Web3 domains. Implement scalable solutions for cryptocurrency and payment platform infrastructures while leading technical decision-making processes for innovative digital projects.",
    },
    {
      id: 2,
      title: "Blink (Remote) —October 2023 - Present",
      titleSub: "Mobile Developer",
      description:
        "Independently architected and developed the entire mobile application ecosystem using React Native and React Native Elements, delivering a simple, fast, and high-performance user interface. Implemented Socket.IO for real-time communication, ensuring instant updates across both user and merchant platforms, and designed a robust push notification system for critical user actions such as card addition and payment confirmation. Enhanced security by implementing multi-factor authentication, including biometric, PIN, and pattern locks for sensitive payment screens. Bridged React Native with native functionalities, integrating advanced features such as NFC for contactless payments, biometric authentication, and custom sound notifications. Utilized React Animated to create fluid screen transitions and component animations, significantly enhancing user experience. Developed both the consumer-facing (BlinkPay) and merchant-facing (Blink Merchant) applications, gaining comprehensive insight into the payment ecosystem while ensuring strict adherence to financial industry security standards throughout the development process.",
    },
    {
      id: 3,
      title: "Opendesk Tech (Remote) — November 2023 - July 2024",
      titleSub: "Mobile Developer (Contract)",
      description:
        "Developed the user application using React Native and React Native Elements, implementing Redux for state management and Socket.IO for real-time interactions. Established a comprehensive component library and styling system, significantly enhancing development efficiency and code consistency. Led the planning and execution of new features, consistently meeting tight deadlines while maintaining high-quality standards. Collaborated closely with UX/UI designers to iteratively improve the application based on user feedback, resulting in enhanced user satisfaction. Fostered strong cross-functional relationships with back-end developers and designers, ensuring seamless integration and a cohesive user experience across all platforms. Optimized application performance, focusing on speed and efficiency across various mobile devices.",
    },
    {
      id: 4,
      title: "Krext, US (Remote) — July 2023 - August 2024",
      titleSub: "Software Developer",
      description:
        "Solely responsible for developing and maintaining Krext's employee productivity management web application using React, Redux, Material UI, and Tailwind CSS. Collaborated with the product team to design and build intuitive user interfaces with a strong focus on usability and performance. Implemented complex features such as an interactive calendar, real-time messaging, and analytics dashboards. Optimized page load time by 45% through code splitting and caching techniques. Established a component library, styling system, and automated tests to streamline development. Led the planning and execution of new feature implementations within tight timelines while working cross-functionally to continuously improve UX and UI based on user feedback. Contributed to enhancing the overall developer workflow through documentation and knowledge sharing, ensuring efficient and high-quality development processes.",
    },
    {
      id: 5,
      title: "Tratrust Limited, Abuja — September 2022 - February 2024",
      titleSub: "Frontend Developer",
      description:
        "Built two high-rated iOS and Android apps in React Native, supporting core company workflows, and developed Rencoin and Globaledge, a crypto investment platform. Integrated Supabase for scalable and secure data and authentication services across the apps while implementing technical designs, wireframes, and user stories within tight deadlines. Wrote unit and integration tests to maintain 95% code coverage and participated in architecture reviews, sprints, and code quality audits to ensure robust development practices.",
    },
    {
      id: 6,
      title: "Concise Software, US (Remote) December 2022 - May 2023",
      titleSub: "Frontend Developer (Contract)",
      description:
        "Developed an intuitive, scalable document management portal for Durham Public Schools using React, Redux Toolkit, and React Query. Built 35 downloadable and printable documents/forms with auto-populated fields, significantly improving efficiency. Implemented React Print and Quill rich-text editing to deliver a superior user experience and designed a user-friendly interface optimized for the web, achieving 95% satisfaction ratings. Integrated APIs and Redux Query for seamless data population across documents and led the planning and execution of new feature rollouts within tight timelines. Contributed to retrospectives and documentation to streamline developer workflows, ensuring consistent and efficient development processes.",
    },
  ];

import React, { Suspense } from "react";
import Icons from "../components/Icons";
import { FiDownload } from "react-icons/fi";
import Achievement from "../components/Achievement";

const techStack = [
  { name: "React", years: "4+ years" },
  { name: "React Native (Android & iOS)", years: "3+ years" },
  { name: "TypeScript", years: "3+ years" },
  { name: "Kotlin", years: "2+ years" },
  { name: "Android (Jetpack Compose)", years: "1+ years" },

];
const About = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>

    <section
      className="min-h-screen bg-primary text-[#8892B0] relative py-20 px-6 sm:px-8 lg:px-12 xl:px-16"
      aria-label="About section"
    >


        <div className="fixed bottom-16 md:bottom-8 right-8 z-50">
        <a
            href='assets/pdfs/THOMAS EJEMBI RESUME.pdf'
          download
          className="flex items-center bg-secondary text-[#0A192F] px-6 py-3 rounded-lg shadow-lg hover:bg-secondary-light transition-colors duration-300 group"
          aria-label="Download resume"
        >
          <FiDownload className="mr-2 h-5 w-5" />
          <span className="font-mono text-sm">Download Resume</span>
        </a>
      </div>


      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#CCD6F6] mb-12">
          Professional Journey
        </h1>


        <section aria-label="Technical expertise" className="mb-20">
          <h2 className="text-2xl text-[#CCD6F6] mb-8">Core Competencies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-[#112240] p-4 rounded-lg hover:-translate-y-1 transition-transform duration-300"
              >
                <h3 className="text-secondary font-mono text-sm mb-1">
                  {tech.name}
                </h3>
                <p className="text-xs text-[#8892B0]">{tech.years} experience</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section aria-label="Work history">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[9px] h-full w-0.5 bg-[#233554]" aria-hidden="true" />

            {historys.map((history, index) => (
              <article
                key={history.id}
                className="relative pl-10 mb-12 group"
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-0 top-2 w-4 h-4 rounded-full bg-secondary ring-8 ring-secondary/20"
                  aria-hidden="true"
                />

                <header className="mb-4">
                  <h2 className="text-xl text-[#CCD6F6] font-semibold mb-1">
                    {history.title}
                  </h2>
                  <p className="text-secondary text-sm font-mono">
                    {history.titleSub}
                  </p>
                </header>

                <div className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <p className="text-sm leading-relaxed">
                    {history.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <Achievement />
        </section>
      </div>

        <div className="fixed left-5 lg:left-24 bottom-0 mt-20">
        <Icons />
      </div>
    </section>
    </Suspense>
  );
};

export default About;