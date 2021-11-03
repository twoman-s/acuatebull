import img1 from "./images/standout.svg";
import img2 from "./images/learning.webp";
import img3 from "./images/earn.json";

export const infoOne = {
  id: "home",
  primary: false,
  imgStart: false,
  topPrimary: true,
  topLine: "Lets Start Trading",
  heading: "Learn Stock Trading with Ease",
  lightHeading: true,
  subtitle:
    "We provide simplified and affordabl courses. Easy to learn and understand. Be the best",
  lightSub: true,
  img: img1,
  alt: "img",
  start: true,
  lottie: false,
  aos: "slide-left",
  list: false,
  btnText: "Join Now",
  btnPrimary: true,
  to: "joinus",
};

export const infoTwo = {
  id: "about",
  primary: true,
  imgStart: true,
  topPrimary: true,
  topLine: "We are",
  heading: "India's Best Learning Platform",
  lightHeading: true,
  subtitle:
    "Best Effective and Simplest learning methods available in you language.India's first platform that provides efficient trading course at the lowest price.",
  lightSub: true,
  img: img2,
  alt: "img",
  start: false,
  lottie: false,
  aos: "slide-right",
  list: true,
  pricing: false,

  listItems: [
    "Best Effective and Simplest learning methods available in you language.",
    "India's first platform that provids efficient trading course at the lowest price.",
  ],
};

export const infoThree = {
  id: "us",
  primary: false,
  imgStart: false,
  topPrimary: false,
  topLine: "#Lets Earn Together",
  heading: "Earn with Us!!",
  lightHeading: false,
  subtitle:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  lightSub: true,
  img: img3,
  alt: "img",
  start: true,
  lottie: true,
  aos: "slide-left",
  list: true,
  listItems: [
    "India's best affordable trading school",
    "Master in Technical analysis",
    "Made for Common people",
    "Learn from scratch to advance",
    "Available in your comfortable language",
  ],
};

export const infoFour = {
  id: "joinus",
  primary: false,
  imgStart: true,
  topPrimary: true,
  topLine: "Join Now",
  heading: "Master in Technical Ananlysis & Trading",
  lightHeading: true,
  subtitle: "Become a Profitable Trader by spending cost of a shoe.",
  lightSub: true,
  img: img3,
  alt: "img",
  start: true,
  lottie: true,
  aos: "slide-right",
  list: false,
  listItems: [
    "Learn from scratch to advanced",
    "Attend classes on your comfortable time",
    "9-5 Mon-Fri",
  ],
  pricing: true,
  btnText: "Buy the course",
  btnPrimary: true,
  to: "coursedetails",
};
