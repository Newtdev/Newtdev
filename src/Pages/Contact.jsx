import React from "react";
import Form from "../components/Form";
import Icons from "../components/Icons";
import { FiMail, FiSmartphone, FiMapPin, FiPhoneIncoming } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      className="min-h-screen bg-primary text-[#8892B0] py-20 px-6 sm:px-8 lg:px-12"
      aria-label="Contact section"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#CCD6F6] mb-4">
            Let's Connect
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto">
            Whether you have a project in mind or just want to chat tech, I'm always open to new opportunities and conversations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="bg-primary-dark p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <FiMail className="text-3xl text-[#64FFDA] mb-4" />
              <h2 className="text-2xl text-[#CCD6F6] mb-2">Email Me</h2>
              <a
                href={"mailto:ejembithomas61@gmail.com"}
                className="text-lg hover:text-[#64FFDA] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send email to Thomas"
              >
                ejembithomas61@gmail.com
              </a>
            </div>

            <div className="bg-primary-dark p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <FiSmartphone className="text-3xl text-[#64FFDA] mb-4" />
              <h2 className="text-2xl text-[#CCD6F6] mb-2">Direct Reach</h2>
              <div className=" flex mt-2 items-center gap-x-3">
                <FiPhoneIncoming />
                <a href="tel:+2347062883672" className="text-lg">
                  2347062883672</a>
              </div>
              <div className=" flex items-center gap-x-3 mt-2">
                <FaWhatsapp />
                <a href="https://wa.me/2348171315756" className="text-lg">
                  Contact Me On WhatsApp</a>
              </div>
              <div className="mt-4">
                <Icons className="flex items-center justify-start" />
              </div>
            </div>

            <div className="bg-primary-dark p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300">
              <FiMapPin className="text-3xl text-[#64FFDA] mb-4" />
              <h2 className="text-2xl text-[#CCD6F6] mb-2">Location</h2>
              <p className="text-lg">Abuja, Nigeria</p>
              <p className="text-sm mt-2 text-[#64FFDA]">Available for remote & worldwide opportunities</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-primary-dark p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl text-[#CCD6F6] mb-8">Send a Message</h2>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;