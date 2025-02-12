import React from "react";
import { Link } from "react-router";

const ThomasLogo = () => {
  return (
    <div>
      <Link
        to="/"
        className="text-2xl hover:text-[#555] transition ease-in duration-300">
        Thomas Ejembi
      </Link>
    </div>
  );
};

export default ThomasLogo;
