import React, { Suspense } from "react";
import Icons from "../components/Icons";
import { FiDownload } from "react-icons/fi";
import Achievement from "../components/Achievement";
import Resume from '../assets/pdfs/THOMAS EJEMBI RESUME.pdf'

const historys = [
  {
    id: 1,
    title: "Sparkle Nigeria (licensed bank), Lagos — March 2025 - Present",
    titleSub: "Deputy Lead / Senior Mobile Engineer",
    description:
      "Mobile platform for a licensed microfinance bank. Wrapped the SmileID identity SDKs in custom Swift and Kotlin modules, moving KYC verification off the JavaScript bridge and cutting verification latency. Architected the BulkPayment engine so complex multi-beneficiary transactions execute asynchronously without blocking the UI thread. Hold a 99.99% crash-free session rate across a growing production user base through error boundaries, payment-payload encryption and native exception handling. Own release engineering across both stores — Play Console policy remediation, signing, staged rollout and over-the-air updates — with Snyk vulnerability scanning, SonarQube analysis and automated tests wired into CI. Designed and open-sourced blynk-deferlink, the deferred deep-linking engine that replaced Firebase Dynamic Links for the bank's referral flow.",
  },
  {
    id: 2,
    title: "Wish To Wear, United Kingdom (Remote) — July 2025 - February 2026",
    titleSub: "Lead Mobile Engineer (Contract)",
    description:
      "Led mobile delivery for a UK product team, remote from Lagos. Owned the React Native architecture and the release cadence across iOS and Android.",
  },
  {
    id: 3,
    title: "Sky Ventures (South East Asia) — June 2024 - March 2025",
    titleSub: "Software Engineer Lead",
    description:
      "Led a cross-functional engineering team of 10 — product managers, QA engineers, DevOps specialists and developers. Selected and defined technology stacks, and oversaw delivery of both Web2 and Web3 projects including payment platforms. Managed technical architecture across blockchain and traditional web ecosystems, ran code reviews, drove product strategy and technical roadmap alignment, and mentored the team on web and blockchain development.",
  },
  {
    id: 4,
    title: "Blynk, formerly Blink (Remote) — October 2023 - Present",
    titleSub: "Mobile Developer",
    description:
      "Independently architected and built the entire mobile ecosystem in React Native — consumer-facing Blynk Pay and merchant-facing Blynk Merchant. Implemented Socket.IO for real-time updates across both platforms and a push notification system for critical actions such as card addition and payment confirmation. Hardened sensitive payment screens with multi-factor authentication — biometric, PIN and pattern locks. Bridged React Native to native functionality for NFC contactless payments, biometric authentication and custom sound notifications, working to financial-industry security standards throughout.",
  },
  {
    id: 5,
    title: "Opendesk Tech (Remote) — November 2023 - July 2024",
    titleSub: "Mobile Developer (Contract)",
    description:
      "Built the user application in React Native with Redux for state management and Socket.IO for real-time interaction. Established a component library and styling system that measurably improved development speed and consistency. Led planning and execution of new features against tight deadlines, worked closely with UX/UI designers to iterate on user feedback, and optimised performance across a wide range of devices.",
  },
];

const techStack = [
  { name: "React", years: "6+ years" },
  { name: "React Native (Android & iOS)", years: "6+ years" },
  { name: "TypeScript", years: "5+ years" },
  { name: "Kotlin", years: "3+ years" },
  { name: "Swift", years: "2+ years" },
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
            href={Resume}
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