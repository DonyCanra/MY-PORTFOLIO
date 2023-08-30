import React from "react";
import { FaInstagram, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiJavascript, SiNestjs, SiTypescript } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <a href={"https://www.instagram.com/donycanra"} target="_blank" rel="noreferrer noopener">
            <span className="bannerIcon">
              <FaInstagram />
            </span>
          </a>
          <a href={"https://github.com/DonyCanra"} target="_blank" rel="noreferrer noopener">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a href={"https://www.linkedin.com/in/donicanrarofikar"} target="_blank" rel="noreferrer noopener">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>

        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">BEST SKILL ON</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <SiJavascript />
          </span>
          <span className="bannerIcon">
            <SiTypescript />
          </span>
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNestjs />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
