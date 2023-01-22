import { FaHtml5, FaCss3, FaNodeJs, FaReact, FaSass, FaFigma, FaUser, FaMapMarkerAlt, FaPaperPlane, FaEnvelope, FaInstagram, FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import work1 from "./assets/jam.jpg";
import work2 from "./assets/techy.jpg";
import work3 from "./assets/video.jpg";
import work4 from "./assets/Card.jpg";
import work5 from "./assets/todo.jpg";


export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
  <a href="https://github.com/Ritikpal1852" target="_blank"><FaGithub /></a>,
  <a href="https://www.linkedin.com/in/ritik-pal-7a4693216/" target="_blank"><FaLinkedin /></a>,
  <a href="mailto: ritikpal5316@gmail.com" target="_blank"><FaEnvelope/></a>,
  <a href="https://www.instagram.com//" target="_blank"><FaInstagram /></a>,
  <a href="https://leetcode.com/ritikpal1614/" target="_blank"><FaCode /></a>,
   
]

export const bios = [
  {
    id: 1,
    icon: <FaUser/>,
    key: "Name",
    value: "Ritik Pal"
  },
  // {
  //   id: 2,
  //   icon: <FaPhoneAlt />,
  //   key: "Phone",
  //   value: "+91 9837415975"
  // },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "ritikpal5316@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />, <FaSass />, <FaFigma />]

export const educations = [
  {
    id: 1,
    year: "2023",
    degree: "M.Sc Chemistry",
    college: "IIT Hyderabad"
  },
  {
    di: 2,
    year: "2021",
    degree: "B.Sc (Hons) Chemistry",
    college: "University of Delhi"
  },
  {
    id: 3,
    year: "2018",
    degree: "12th Class",
    college: "uttarakhand Board"
  }
]

//experiences
export const experiences= [
  {
    id: 1,
    year: "2022",
    position: "Front-end developer",
    company: "Milan (IIT Hyderabad)"
  },
  {
    id: 2,
    year: 2022,
    position: "Designer",
    company: "sunshine (IIT Hyderabad)"
  },
  {
    id: 3,
    year: "2022-2023",
    position: "Placement Coordinator",
    company: "OCS (IIT Hyderabad)"
  }
]
export const finishes = [
  {
    id: 1,
    number: '1+',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "7+",
    itemName: "7+ Front-end Projects"
  },
  {
    id: 3,
    number: "1+",
    itemName: "Full Stack Projects"
  },
  {
    id: 4,
    number: "1",
    itemName: "DataBase Project"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    git: "https://github.com/Ritikpal1852/IIT_JAM_Chemistry",
    view: "https://chemistry-iit-jam.vercel.app/",
    text: "IIT-JAM",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    git: "https://github.com/Ritikpal1852/TechStar",
    view: "https://tech-star-three.vercel.app",
    text: "TechStar",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    git: "https://github.com/Ritikpal1852/VideoHub",
    view: "https://video-hub-peach.vercel.app",
    text: "VideoHub",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    git: "https://github.com/Ritikpal1852/Item_card",
    view: "https://https://ritikpal1852.github.io/Item_card/",
    text: "Item-Card",
    category: "web"
  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    git: "https://github.com/Ritikpal1852/Todo-List",
    view: "",
    text: "ToDo List",
    category: 'web'
  },
]


export const workNavs = [
  "All", "Web", "Chemistry"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "H-Block, IIT Hyderabad, kandi sangaraddy"
  },
  {
    id: 2,
    icon: <a href="mailto: ritikpal5316@gmail.com" target="_blank"><FaEnvelope/></a>,
    infoText: "ritikpal5316@gmail.com"
  },
  {
    id: 3,
    icon: <a href="https://www.linkedin.com/in/ritik-pal-7a4693216/" target="_blank"><FaLinkedin /></a>,
    infoText: "linkedin"
  }
]
