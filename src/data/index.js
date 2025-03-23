import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";
import { SiProgress, SiAntdesign, SiInstagram, SiWhatsapp, SiGmail } from "react-icons/si";

// Features Data
export const featuresData = [
  {
    id: 1,
    title: "Mathematics",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  },
  {
    id: 2,
    icon: <AiFillAppstore />,
    title: "Frontend Development",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  },
  {
    id: 3,
    icon: <SiProgress />,
    title: "Backend Development",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  },
  {
    id: 4,
    icon: <FaMobile />,
    title: "Mobile Development",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  },
  {
    id: 5,
    icon: <SiAntdesign />,
    title: "Web Design",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  },
  {
    id: 6,
    icon: <FaGlobe />,
    title: "Hosting Websites",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque solutahic consequuntur eum repellendus ad",
  },
];

export const socialMedia = [
  { name: "GitHub", icon: <FaGithub />, link: "https://github.com/DonyCanra" },
  { name: "LinkedIn", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/donicanrarofikar" },
  { name: "Instagram", icon: <SiInstagram />, link: "https://www.instagram.com/donycanra" },
];

export const contactMe = [
  { name: "Gmail", icon: <SiGmail />, link: "mailto:donicanrarofikar@gmail.com" },
  { name: "WhatsApps", icon: <SiWhatsapp />, link: "https://wa.me/082224034729" },
  { name: "Download CV", icon: <FaDownload />, link: "/cv.pdf" },
];
