import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./animation.css";
import ProjectSection from "./components/ProjectSection";
import MainLayout from "./components/MainLayout";
import {
  ThemeProvider,
  useTheme,
  type ThemeType,
} from "./context/ThemeContext";
import { useState, useEffect } from "react";

interface Project {
  title: string;
  description: string;
  containerContent: React.ReactNode;
  tags: Array<{
    text: string;
    color: string;
  }>;
  projectLink?: string;
  isReversed?: boolean;
  containerProps?: {
    maxTilt?: number;
    scale?: number;
    glassOpacity?: number;
    glassBlur?: number;
    className?: string;
  };
}

// Development projects
const developmentProjects: Project[] = [
  {
    title: "React Application",
    description:
      "A modern React application built with the latest technologies. This project showcases my skills in frontend development and responsive design.",
    containerContent: (
      <>
        <h2 className="text-xl font-bold mb-4">Project One</h2>
        <div className="flex justify-center">
          <img
            src="D:/Coden/portfolio/src/assets/images/aawhq7yb.png"
            className="w-20 h-20"
            alt="React logo"
          />
        </div>
      </>
    ),
    tags: [
      { text: "React", color: "bg-blue-800/30" },
      { text: "TypeScript", color: "bg-blue-700/30" },
      { text: "Tailwind", color: "bg-blue-600/30" },
    ],
    containerProps: {
      maxTilt: 12,
      scale: 1.05,
      glassOpacity: 0.2,
      glassBlur: 12,
      className: "bg-gradient-to-br from-blue-900/20 to-blue-800/20",
    },
    isReversed: false,
  },
  {
    title: "Vite Application",
    description:
      "A lightning-fast application built with Vite. This project demonstrates my proficiency in creating optimized web applications with modern tooling.",
    containerContent: (
      <>
        <h2 className="text-xl font-bold mb-4">Project Two</h2>
        <div className="flex justify-center">
          <img src={viteLogo} className="w-20 h-20" alt="Vite logo" />
        </div>
      </>
    ),
    tags: [
      { text: "JavaScript", color: "bg-yellow-600/30" },
      { text: "Vite", color: "bg-red-600/30" },
      { text: "CSS Modules", color: "bg-teal-600/30" },
    ],
    containerProps: {
      maxTilt: 12,
      scale: 1.05,
      glassOpacity: 0.2,
      glassBlur: 12,
      className: "bg-gradient-to-br from-blue-900/20 to-blue-800/20",
    },
    isReversed: true,
  },
  {
    title: "Audio Platform",
    description:
      "Whistledrop is a cutting-edge audio sharing platform that allows users to create, share, and discover unique audio content. Built with a focus on performance and user experience.",
    containerContent: (
      <>
        <h2 className="text-xl font-bold mb-4">Whistledrop</h2>
        <div className="flex flex-col space-y-2 items-center">
          <p className="text-sm opacity-80 text-center">
            An innovative audio sharing platform
          </p>
        </div>
      </>
    ),
    tags: [
      { text: "Next.js", color: "bg-indigo-600/30" },
      { text: "Node.js", color: "bg-green-600/30" },
      { text: "MongoDB", color: "bg-orange-600/30" },
    ],
    containerProps: {
      maxTilt: 12,
      scale: 1.05,
      glassOpacity: 0.2,
      glassBlur: 12,
      className: "bg-gradient-to-br from-blue-900/20 to-blue-800/20",
    },
    isReversed: false,
  },
];

// 3D Art projects
const artProjects: Project[] = [
  {
    title: "3D Character Design",
    description:
      "A detailed 3D character model created for an upcoming indie game. This project highlights my skills in character modeling, texturing, and rigging.",
    containerContent: (
      <>
        <h2 className="text-xl font-bold mb-4">Fantasy Character</h2>
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-800/30 to-purple-700/30 rounded-full flex items-center justify-center">
            <span className="text-2xl">���</span>
          </div>
        </div>
      </>
    ),
    tags: [
      { text: "Blender", color: "bg-purple-800/30" },
      { text: "Character Design", color: "bg-purple-700/30" },
      { text: "Texturing", color: "bg-purple-600/30" },
    ],
    containerProps: {
      maxTilt: 15,
      scale: 1.02,
      glassOpacity: 0.2,
      glassBlur: 12,
      className: "bg-gradient-to-br from-purple-900/20 to-purple-800/20",
    },
    isReversed: false,
  },
  {
    title: "Environment Art",
    description:
      "An atmospheric environment scene created for a sci-fi game. This project demonstrates my ability to create immersive worlds with attention to lighting and detail.",
    containerContent: (
      <>
        <h2 className="text-xl font-bold mb-4">Sci-Fi Environment</h2>
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-800/30 to-purple-700/30 rounded-full flex items-center justify-center">
            <span className="text-2xl">���</span>
          </div>
        </div>
      </>
    ),
    tags: [
      { text: "Maya", color: "bg-blue-600/30" },
      { text: "Environment Art", color: "bg-indigo-600/30" },
      { text: "Lighting", color: "bg-violet-600/30" },
    ],
    containerProps: {
      maxTilt: 12,
      scale: 1.03,
      glassOpacity: 0.15,
      glassBlur: 10,
      className: "bg-gradient-to-br from-indigo-500/20 to-purple-500/20",
    },
    isReversed: true,
  },
];

const Portfolio = () => {
  return (
    <div className="space-y-16">
      {developmentProjects.map((project, index) => (
        <div
          key={`dev-${index}`}
          className="animate-fade-in-right m-4"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <ProjectSection
            title={project.title}
            description={project.description}
            containerContent={project.containerContent}
            tags={project.tags}
            projectLink={project.projectLink}
            isReversed={project.isReversed}
            containerProps={project.containerProps}
          />
        </div>
      ))}
    </div>
  );
};

const ArtGallery = () => {
  return (
    <div className="space-y-16">
      {artProjects.map((project, index) => (
        <div
          key={`art-${index}`}
          className="animate-fade-in-left m-4"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <ProjectSection
            title={project.title}
            description={project.description}
            containerContent={project.containerContent}
            tags={project.tags}
            projectLink={project.projectLink}
            isReversed={project.isReversed}
            containerProps={project.containerProps}
          />
        </div>
      ))}
    </div>
  );
};

const ProjectsDisplay = () => {
  const { theme } = useTheme();
  const [prevTheme, setPrevTheme] = useState<ThemeType | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayedContent, setDisplayedContent] =
    useState<React.ReactNode | null>(null);

  useEffect(() => {
    if (prevTheme === null) {
      // Initial render
      setPrevTheme(theme);
      setDisplayedContent(
        theme === "development" ? <Portfolio /> : <ArtGallery />
      );
      return;
    }

    if (theme !== prevTheme) {
      // Start exit animation
      setIsAnimating(true);

      // After animation completes, switch content
      const timer = setTimeout(() => {
        setDisplayedContent(
          theme === "development" ? <Portfolio /> : <ArtGallery />
        );
        setPrevTheme(theme);
        setIsAnimating(false);
      }, 500); // Animation duration matches CSS animation time

      return () => clearTimeout(timer);
    }
  }, [theme, prevTheme]);

  // Determine exit animation class based on theme transition direction
  const exitAnimationClass =
    prevTheme === "development" && theme === "3d-art"
      ? "animate-fade-out-left"
      : "animate-fade-out-right";

  // Add a container class for positioning and overflow handling
  return (
    <div className="relative overflow-hidden min-h-[600px]">
      <div
        className={`transition-all duration-500 ${
          isAnimating ? exitAnimationClass : ""
        }`}
      >
        {displayedContent}
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <ProjectsDisplay />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
