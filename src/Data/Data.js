// icons
import { BiReceipt, BiCubeAlt, BiImages } from "react-icons/bi";
// services icon
import {
  FaHeartbeat,
  FaPills,
  FaHospitalUser,
  FaDna,
  FaWheelchair,
  FaNotesMedical,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaRegQuestionCircle,
} from "react-icons/fa";

// icons of testimonial
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

// contact form icon
import { BsGeoAlt, BsEnvelope, BsPhone } from "react-icons/bs";

// tab img

import tabImgOne from "../images/departments-1.jpg";
import tabImgTwo from "../images/departments-2.jpg";
import tabImgThree from "../images/departments-3.jpg";
import tabImgFour from "../images/departments-4.jpg";
import tabImgFive from "../images/departments-5.jpg";

// doctor img
import cardImgOne from "../images/doctors-1.jpg";
import cardImgTwo from "../images/doctors-2.jpg";
import cardImgThree from "../images/doctors-3.jpg";
import cardImgFour from "../images/doctors-4.jpg";

// testimonial img

import slideOne from "../images/testimonials-1.jpg";
import slideTwo from "../images/testimonials-2.jpg";
import slideThree from "../images/testimonials-3.jpg";
import slideFour from "../images/testimonials-4.jpg";
import slideFive from "../images/testimonials-5.jpg";

// card data
export const cardData = [
  {
    id: 1,
    icon: <BiReceipt />,
    title: "Qualified medical experts",
    text: "Every medical content creator completes our thorough process before their work",
  },
  {
    id: 2,
    icon: <BiCubeAlt />,
    title: "Epidemiology statistics",
    text: "Checks accredited medical information sources and new publications",
  },
  {
    id: 3,
    icon: <BiImages />,
    title: "Symptom assessment",
    text: "connects to our symptom assessment. This helps people check their health",
  },
];

// service data
export const servicesCardData = [
  {
    id: 1,
    icon: <FaHeartbeat />,
    label: "Laser Focus Technique",
    text: "We learn the most effective ways to reach your ideal client or patient",
    url: "/",
  },
  {
    id: 2,
    icon: <FaPills />,
    label: "Breast Center",
    text: "Our breast specialists help women with breast cancer, non-cancerous tumors, lumps, breast pain, fibrocystic disease and other conditions",
    url: "/",
  },
  {
    id: 3,
    icon: <FaHospitalUser />,
    label: "Breastfeeding Clinic",
    text: "Breastfeeding Clinic’s team of specialized nurses and physicians will be there to consult and assist the new mother experience",
    url: "/",
  },
  {
    id: 4,
    icon: <FaDna />,
    label: "Bumrungrad Heart Valve Center",
    text: " The center is staffed with a team of specialist doctors, including cardiologists, cardiac surgeons, cardiac anesthesiologists",
    url: "/",
  },
  {
    id: 5,
    icon: <FaWheelchair />,
    label: "Holistic Wound Care Center",
    text: "The best solution for complex diseases. Because care does not end at the hospital",
    url: "/",
  },
  {
    id: 6,
    icon: <FaNotesMedical />,
    label: "Colorectal Surgery Center",
    text: "Center for the assessment, diagnosis, and treatment of colorectal conditions",
    url: "/",
  },
];

// tab data
export const tabContentData = [
  {
    id: 1,
    eventKey: "first",
    label: "Cardiology",
    title: "Cardiology",
    imgSrc: tabImgOne,
    subText:
      "Doctors in this department give anesthetic for operations and procedures. An anesthetic is a drug or agent that produces a complete or partial loss of feeling.",
    para: "Provides medical care to patients who have problems with their heart or circulation. (Sterile Processing Department (SPD) - Sterile Processing - Central Supply Department (CSD) - Central Supply) - A place in hospitals and other health care facilities that performs sterilization and other actions on medical equipment, devices, and consumables.",
  },
  {
    id: 2,
    eventKey: "second",
    label: "Neurology",
    title:
      "Monitors and assesses patients with various kidney (renal) problems and conditions.",
    imgSrc: tabImgTwo,
    subText:
      "Also called intensive care, this department is for seriously ill patients.",
    para: "(Cardiac intensive care unit (CICU) - A hospital ward specialized in the care of patients with heart attacks, unstable angina, cardiac dysrhythmia and other cardiac conditions that require continuous monitoring and treatment.",
  },
  {
    id: 3,
    eventKey: "third",
    label: "Hepatology",
    title:
      "Treats conditions related to the musculoskeletal, joints, ligaments, bones, muscles, tendons and nerves.",
    imgSrc: tabImgThree,
    subText: "Also known as X-Ray Department and/or Radiology Department.",
    para: "Patients who don't need to stay in a ward are transferred to the lounge on the day of discharge. Many hospitals now have discharge lounges with facilities such as TV's, radio, puzzles, magazines, books and newspapers.",
  },
  {
    id: 4,
    eventKey: "fourth",
    label: "Pediatrics",
    title:
      "This department investigates and treats digestive and upper and lower gastrointestinal diseases",
    imgSrc: tabImgFour,
    subText:
      "Investigates and treats problems relating to the female urinary tract and reproductive organs, such as Endometriosis, infertility and incontinence. These hospital services work with the laboratory. In addition doctors treat blood diseases and malignancies related to the blood.",
  },
  {
    id: 5,
    eventKey: "fifth",
    label: "Eye Care",
    title:
      "Responsible for drugs in a hospital, including purchasing, supply and distribution.",
    imgSrc: tabImgFive,
    subText:
      "Maternity wards provide antenatal care, delivery of babies and care during childbirth",
    para: "Intensive Therapy Unit, Intensive Treatment Unit (ITU), Critical Care Unit (CCU) - A special department of a hospital or health care facility that provides intensive treatment medicine and caters to patients with severe and life-threatening illnesses and injuries, which require constant, close monitoring and support from specialist equipment and medications.",
  },
];

// doctors data
export const doctorsData = [
  {
    imgScr: cardImgOne,
    name: "Walter White",
    designation: "Chief Medical Officer",
    text: "Diabetes, Thyroid & Hormone Specialist",
    icons: [<FaTwitter />, <FaFacebookF />, <FaInstagram />, <FaLinkedin />],
  },
  {
    imgScr: cardImgTwo,
    name: "Sarah Jhonson",
    designation: "Anesthesiologist",
    text: "Breast, Colorectal & Laparoscopic Surgeon",
    icons: [<FaTwitter />, <FaFacebookF />, <FaInstagram />, <FaLinkedin />],
  },
  {
    imgScr: cardImgThree,
    name: "William Anderson",
    designation: "Cardiology",
    text: "Skin & Sex Specialist",
    icons: [<FaTwitter />, <FaFacebookF />, <FaInstagram />, <FaLinkedin />],
  },
  {
    imgScr: cardImgFour,
    name: "Amanda Jepson",
    designation: "Neurosurgeon",
    text: "Chest & Asthma Specialist",
    icons: [<FaTwitter />, <FaFacebookF />, <FaInstagram />, <FaLinkedin />],
  },
];

// faq data
export const faqData = [
  {
    icon: <FaRegQuestionCircle />,
    eventKey: 0,
    label: "What are the documents required for the admissions?",
    text: "Passport of students And Parents both, Marksheets 10th, 11th, and 12th, Address Proof, Birth Certificate, School Pass-out certificates, School leaving certificate, Migration Certificates if any And NEET-UG Score card",
  },
  {
    icon: <FaRegQuestionCircle />,
    eventKey: 1,
    label: "Need fees structures for all colleges?",
    text: "Send your scanned documents during registration we’ll send you the fees structure and provisional admission confirmation email. Mail us info [@] mbbsbangladesh.com",
  },
  {
    icon: <FaRegQuestionCircle />,
    eventKey: 2,
    label: "How much amount i have to pay?",
    text: "You have to pay exact fees and all charges fee during the admission process, all charges are fixed by respective individual Medical Colleges. All fees Payment directly to colleges account, you need to transfer fee in US Dollars via T.T (Telegraphic Transfer) from your local bank in name of College account.",
  },
  {
    icon: <FaRegQuestionCircle />,
    eventKey: 3,
    label: "How to apply for government medical college?",
    text: "If you got 98%+ in Biology and overall 90%+ you are eligible to apply to Government Medical Colleges, under SAARC Scholarship Program.",
  },
  {
    icon: <FaRegQuestionCircle />,
    eventKey: 4,
    label: "Do not have passport?",
    text: "Apply for Passport refer Government of India Passport Seva Kendra website and apply online www.passport.gov.in",
  },
];

// testimonial data
export const testimonialData = [
  {
    id: 1,
    imgSrc: slideOne,
    name: "Saul Goodman",
    quoteLeft: <RiDoubleQuotesL />,
    quoteRight: <RiDoubleQuotesR />,
    designation: "Ceo & Founder",
    comment:
      "The best graduate of this year is Aena Saeed. She has been awarded with Sir Ziauddin Gold Medal for her extraordinary academic performance in the field of Medicine. She has achieved distinction in 9 subjects.",
  },
  {
    id: 2,
    imgSrc: slideTwo,
    name: "Sara Wilsson",
    quoteLeft: <RiDoubleQuotesL />,
    quoteRight: <RiDoubleQuotesR />,
    designation: "Designer",
    comment:
      "As an M.B.B.S alumnus today, dating back to those tandem steps entering medical college with high hopes of parents, peers and a huge responsibility to bestow on young reluctant shoulders, Ziauddin University has laid down",
  },
  {
    id: 3,
    imgSrc: slideThree,
    name: "Jena Karlis",
    quoteLeft: <RiDoubleQuotesL />,
    quoteRight: <RiDoubleQuotesR />,
    designation: "Ceo & Founder",
    comment:
      "One of the things I love most about OU College of Medicine is the emphasis on different learning styles.",
  },
  {
    id: 4,
    imgSrc: slideFour,
    name: "Matt Brandon",
    quoteLeft: <RiDoubleQuotesL />,
    quoteRight: <RiDoubleQuotesR />,
    designation: "Freelancer",
    comment:
      "At the University o f Oklahoma College of Medicine, you really feel like the experience and learning is tailored to you. ",
  },
  {
    id: 5,
    imgSrc: slideFive,
    name: "John Larson",
    quoteLeft: <RiDoubleQuotesL />,
    quoteRight: <RiDoubleQuotesR />,
    designation: "Entrepreneur",
    comment:
      "he College of Medicine fosters what is perhaps the best sense of community in the nation. The modules within the college exemplify this idea not only academically",
  },
];

// contact data
export const addressData = [
  {
    id: 1,
    icon: <BsEnvelope />,
    label: "Location",
    text: "A108 Adam Street, New York, NY 535022",
  },
  {
    id: 2,
    icon: <BsGeoAlt />,
    label: "Email",
    text: "info@example.com",
  },
  {
    id: 3,
    icon: <BsPhone />,
    label: "Call:",
    text: "+1 5589 55488 55s",
  },
];
