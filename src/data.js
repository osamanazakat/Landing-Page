import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";

export const navLinks = [
  {
    id: 1,
    link: "Pricing",
  },
  {
    id: 2,
    link: "Product",
  },
  {
    id: 3,
    link: "About Us",
  },
  {
    id: 4,
    link: "Careers",
  },
  {
    id: 5,
    link: "Community",
  },
];

export const features = [
  {
    id: 1,
    number: "01",
    heading: "Track company-wide progress",
    text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: 2,
    number: "02",
    heading: "Advanced built-in reports",
    text: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    id: 3,
    number: "03",
    heading: "Everything you need in one place",
    text: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

export const footerIcons = [
  {
    id: 1,
    icon: <AiFillFacebook />,
  },
  {
    id: 2,
    icon: <AiFillYoutube />,
  },
  {
    id: 3,
    icon: <AiOutlineInstagram />,
  },
  {
    id: 4,
    icon: <AiOutlineTwitter />,
  },
  {
    id: 5,
    icon: <FaPinterest />,
  },
];

export const footerLinks = [
  {
    id: 1,
    link: "Home",
  },
  {
    id: 2,
    link: "Pricing",
  },
  {
    id: 3,
    link: "Products",
  },
  {
    id: 4,
    link: "About Us",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Anisha Li",
    description:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    avatar: require("./assets/avatar-anisha.png"),
  },
  {
    id: 2,
    name: "Ali Bravo",
    description:
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    avatar: require("./assets/avatar-ali.png"),
  },
  {
    id: 3,
    name: "Richard Watts",
    description:
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
    avatar: require("./assets/avatar-richard.png"),
  },
  {
    id: 4,
    name: "Shanai Gough",
    description:
      "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
    avatar: require("./assets/avatar-shanai.png"),
  },
];
