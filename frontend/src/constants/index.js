export const words = [
  { Text: "Interfaces", imagePath: "/images/monitor.svg" },
  { Text: "Experiences", imagePath: "/images/concepts.svg" },
  { Text: "Applications", imagePath: "/images/code.svg" },
  { Text: "Solutions", imagePath: "/images/rocket.svg" },
  { Text: "Interfaces", imagePath: "/images/monitor.svg" },
  { Text: "Experiences", imagePath: "/images/concepts.svg" },
  { Text: "Applications", imagePath: "/images/code.svg" },
  { Text: "Solutions", imagePath: "/images/rocket.svg" },
];

export const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 6, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
  { value: 15, suffix: "+", label: "Repositories Built" },
];

export const badgeColors = {
  blue: "bg-blue-500/10 border-blue-500/30 text-blue-300",
  green: "bg-green-500/10 border-green-500/30 text-green-300",
  orange: "bg-orange-500/10 border-orange-500/30 text-orange-300",
  purple: "bg-purple-500/10 border-purple-500/30 text-purple-300",
  pink: "bg-pink-500/10 border-pink-500/30 text-pink-300",
  cyan: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
  yellow: "bg-yellow-500/10 border-yellow-500/30 text-yellow-300",
  red: "bg-red-500/10 border-red-500/30 text-red-300",
};

// Featured projects
export const projects = [
  {
    title: "Veehive",
    description:
      "Airbnb-style car rental app with host and renter roles, real-time chat, and booking management.",
    image: "/images/Projects-thumbnail/Veehive-thumbnail.png",
    link: "#",
    tech: [
      { name: "React Native", color: "blue" },
      { name: "TypeScript", color: "blue" },
      { name: "Nativewind", color: "blue" },
      { name: "Expo", color: "orange" },
      { name: "Firebase", color: "yellow" },
      { name: "Stripe", color: "purple" },
      { name: "Agora", color: "cyan" },
    ],
  },
  {
    title: "MovieFlix",
    description:
      "MovieFlix is a sleek, user-centric mobile application designed for film enthusiasts to effortlessly discover, track, and explore movies. The platform bridges the gap between searching for trending titles and diving deep into rich cinematic details, offering an intuitive browsing experience optimized for mobile devices.",
    image: "/images/Projects-thumbnail/movieflix.png",
    link: "#",
    tech: [
      { name: "React Native", color: "blue" },
      { name: "TypeScript", color: "blue" },
      { name: "Nativewind", color: "blue" },
      { name: "Movie API", color: "cyan" },
    ],
  },
];

// Social links
export const socialLinks = [
  {
    name: "GitHub",
    handle: "Sesante1",
    href: "https://github.com/Sesante1",
    iconBg: "bg-white/[0.08]",
    iconColor: "text-white",
    icon: "images/github-icon.webp",
  },
  {
    name: "LinkedIn",
    handle: "Jomel Sesante",
    href: "https://www.linkedin.com/in/jomel-sesante",
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-300",
    icon: "images/linkedin-icon.webp",
  },
  {
    name: "Gmail",
    handle: "jomelsesante1@gmail.com",
    href: "mailto:jomelsesante1@gmail.com",
    iconBg: "bg-white",
    iconColor: "text-red-300",
    icon: "images/gmail-icon.webp",
  },
];

// Skills
export const skills = {
  Frontend: [
    {
      name: "HTML",
      icon: "images/html-icon.png",
      bg: "bg-orange-500/10",
      border: "border-orange-500/30",
    },
    {
      name: "CSS",
      icon: "images/css-icon.webp",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
    },
    {
      name: "Tailwind",
      icon: "images/tailwind-icon.png",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30",
    },
    {
      name: "JavaScript",
      icon: "images/javascript-icon.jpg",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/30",
    },
    {
      name: "React",
      icon: "images/react-icon.png",
      bg: "bg-cyan-400/10",
      border: "border-cyan-400/30",
    },
    {
      name: "React Native",
      icon: "images/react-icon.png",
      bg: "bg-cyan-400/10",
      border: "border-cyan-400/30",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      icon: "images/nodejs-icon.png",
      bg: "bg-green-500/10",
      border: "border-green-500/30",
    },
    {
      name: "Express",
      icon: "images/express-icon.png",
      bg: "bg-white/[0.06]",
      border: "border-white/15",
    },
  ],
  Tools: [
    {
      name: "Git",
      icon: "images/git-icon.png",
      bg: "bg-red-500/10",
      border: "border-red-500/30",
    },
    {
      name: "VS Code",
      icon: "images/vscode-icon.png",
      bg: "bg-blue-600/10",
      border: "border-blue-600/30",
    },
    {
      name: "MySQL",
      icon: "images/mysql-icon.png",
      bg: "bg-teal-500/10",
      border: "border-teal-500/30",
    },
    {
      name: "Postman",
      icon: "images/postman-icon.png",
      bg: "bg-orange-400/10",
      border: "border-orange-400/30",
    },
  ],
};
