import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Download = () => {
  return (
    <div>
      <div className="ml-[5%] mr-[5%] lg:ml-[5%] lg:mt-[3%] mt-[10%] text-center">
        <a
          href="THOMAS EJEMBI RESUME.pdf"
          download="Thomas Ejembi.pdf"
          className="inline-flex text-black hover:underline hover:text-stone-600">
          Download cv <AiOutlineCloudDownload className="mt-1 ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Download;
