import React from "react";
import { socialMedia, contactMe } from "../../data";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          {socialMedia.map((item, index) => (
            <span key={index} className="bannerIcon" onClick={() => openInNewTab(item.link)}>
              {item.icon}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Contact Me</h2>
        <div className="flex gap-4">
          {contactMe.map((item, index) => (
            <span key={index} className="bannerIcon" onClick={() => openInNewTab(item.link)}>
              {item.icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;
