import React from "react";

import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf} from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock} from "lucide-react";
import user1 from "../../assets/profile-picture/coll.png";
import user2 from "../../assets/profile-picture/cool4.png";
import user3 from "../../assets/profile-picture/fevor.png";
import user4 from "../../assets/profile-picture/health.png";
import user5 from "../../assets/profile-picture/school.png";
import user6 from "../../assets/profile-picture/world.png";


export const navItems = [
    {label: "Feature", href: "#"},
    {label: "Workflow", href: "#"},
    {label: "Pricing", href: "#"},
    {label: "Testimonials", href: "#"}
];

export const features = [
    { 
        label: "Chatbot", 
        description: "This feature allows users to interact with an AI-powered chatbot for seamless communication, providing answers, suggestions, or assistance in real-time.", 
        icon: <BotMessageSquare /> 
      },

      { 
        label: "Realtime", 
        description: "Provides real-time updates and information, ensuring users stay informed with the latest data or changes.", 
        icon: <BatteryCharging />  
      },
      { 
        label: "Security", 
        description: "Ensures the protection of sensitive information and resources through robust security measures and reliable authentication.", 
        icon: <Fingerprint /> 
      },
      
      { 
        label: "Privacy", 
        description: "Focuses on safeguarding personal data and ensuring confidentiality, enabling users to maintain control over their private information.", 
        icon: <ShieldHalf /> 
      },
      
      { 
        label: "Integration", 
        description: "Facilitates seamless connections between systems and services, ensuring efficient workflows and interoperability.", 
        icon: <PlugZap /> 
      },
      
      { 
        label: "Support", 
        description: "Provides assistance and resources to address user inquiries or issues, ensuring a reliable and helpful experience.", 
        icon: <GlobeLock /> 
      },
      
    ];



export const checklistItems = [
  {
    title: "Code Optimization",
    description: "Focuses on enhancing the efficiency and performance of code by reducing redundancy and improving execution speed."
  },
  {
    title: "Debugging",
    description: "Involves identifying and fixing errors in the code to ensure smooth and error-free program execution."
  },
  {
    title: "Version Control",
    description: "Enables collaborative coding and tracking of changes through tools like Git for organized development."
  },
  {
    title: "Testing",
    description: "Ensures software reliability by verifying that code behaves as expected under various scenarios."
  },
  {
    title: "API Integration",
    description: "Facilitates seamless interaction between different systems by connecting and utilizing external APIs effectively."
  },
  {
    title: "Responsive Design",
    description: "Ensures that web applications adapt seamlessly to various screen sizes and devices for optimal user experience."
  }
];


export const PricingOptions =[
  {
    title: "Free",
    price: "K0",
    features: [
      "private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "K210",
    features: [
      "private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Free",
    price: "K2000",
    features: [
      "private board sharing",
      "Unlimited Storage",
      "High Performance Networ",
      "Private Mode",
    ],
  },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Tech Solutions Inc.",
    image: user1,
    text: "Working with this team has been an absolute pleasure. Their dedication and expertise helped us achieve our goals efficiently."
  },
  {
    user: "Jane Smith",
    company: "Innovate Corp.",
    image: user2,
    text: "I was amazed by the creativity and attention to detail. They exceeded our expectations and delivered outstanding results."
  },
  {
    user: "Michael Brown",
    company: "Global Enterprises",
    image: user3,
    text: "Their professionalism and commitment are unmatched. I highly recommend their services for anyone seeking top-notch quality."
  },
  {
    user: "Emily Davis",
    company: "NextGen Solutions",
    image: user4,
    text: "The team delivered exceptional results. Their innovative approach made a significant difference in our project."
  },
  {
    user: "David Wilson",
    company: "Pioneer Tech",
    image: user5,
    text: "Their communication and problem-solving skills are outstanding. They truly went above and beyond to meet our needs."
  },
  {
    user: "Sophia Martinez",
    company: "Bright Future Inc.",
    image: user6,
    text: "I was thoroughly impressed with their professionalism and creativity. They are truly a pleasure to work with."
  }
];

export const resourcesLink = [
  { label: "Getting Started", href: "#" },
  
  { label: "Tutorials", href: "#" },
  { label: "API Documentation", href: "#" },
  { label: "Community Forum", href: "#" },
];

export const platformLink = [
  { label: "Features", href: "#" },
  { label: "Supported Devices", href: "#" },
  { label: "System Requirements", href: "#" },
  { label: "Downloads", href: "#" },
  { label: "Release Notes", href: "#" },
];

export const communityLink = [
  { label: "Events", href: "#" },
  { label: "Meetups", href: "#" },
  { label: "Conferences", href: "#" },
  { label: "Hackathons", href: "#" },
  { label: "Jobs", href: "#" },
  ];