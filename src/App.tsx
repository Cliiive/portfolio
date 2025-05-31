import DystopiaImage from "./assets/images/aawhq7yb.png";
import WhistleDrop from "./assets/images/whistledrop.png";
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
    title: "WhistleDrop",
    description:
      "WhistleDrop, ein Projekt das im Rahmen der Vorlesung 'Cyberspionage' entstanden ist." +
      "Aufgabe war es eine Plattform zu erstellen die es Whistleblowern ermöglicht 100% anonym und sicher Informationen an Journalisten weiter zu reichen." +
      "Die Plattform nutzt Pythons FastAPI, eine PostgreSQL Datenbank zum Speichern der Daten und Schlüssel und React für das Frontent." +
      "Gehostet wird die Plattform in einem Docker Container auf einem Tor Onion Service.",
    containerContent: (
      <>
        <div className="w-full h-full">
          <img src={WhistleDrop} className="w-full h-full" alt="React logo" />
        </div>
      </>
    ),
    tags: [
      { text: "Python", color: "bg-blue-950/30" },
      { text: "PostreSQL", color: "bg-blue-900/30" },
      { text: "React", color: "bg-blue-800/30" },
      { text: "Docker", color: "bg-blue-700/30" },
      { text: "Tor", color: "bg-blue-600/30" },
    ],
    containerProps: {
      maxTilt: 12,
      scale: 1.05,
      glassOpacity: 0.15,
      glassBlur: 12,
      className: "bg-gradient-to-br from-slate-950/15 to-blue-950/15",
    },
    isReversed: false,
  },
  {
    title: "Bios Hour",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    containerContent: (
      <>
        <h2 className="text-xl font-bold mb-4">Bios Hour</h2>
        <div className="flex flex-col space-y-2 items-center">
          <p className="text-sm opacity-80 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </>
    ),
    tags: [
      { text: "Flutter", color: "bg-blue-950/30" },
      { text: "Bloc", color: "bg-blue-900/30" },
      { text: "Dart", color: "bg-blue-800/30" },
      { text: "Supabase", color: "bg-blue-700/30" },
    ],
    containerProps: {
      maxTilt: 12,
      scale: 1.05,
      glassOpacity: 0.15,
      glassBlur: 12,
      className: "bg-gradient-to-br from-slate-950/15 to-blue-950/15",
    },
    isReversed: true,
  },
  {
    title: "Konglomerat",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    containerContent: (
      <>
        <h2 className="text-xl font-bold mb-4">Konglomerat</h2>
        <div className="flex flex-col space-y-2 items-center">
          <p className="text-sm opacity-80 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </>
    ),
    tags: [
      { text: "React", color: "bg-blue-950/30" },
      { text: "JavaScript", color: "bg-blue-900/30" },
      { text: "Python", color: "bg-blue-800/30" },
      { text: "Supabase", color: "bg-blue-700/30" },
    ],
    containerProps: {
      maxTilt: 12,
      scale: 1.05,
      glassOpacity: 0.15,
      glassBlur: 12,
      className: "bg-gradient-to-br from-slate-950/15 to-blue-950/15",
    },
    isReversed: false,
  },
];

// 3D Art projects
const artProjects: Project[] = [
  {
    title: "Reactive Music Video",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    containerContent: (
      <>
        <h2 className="text-xl font-bold mb-4">Fantasy Character</h2>
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-950/30 to-indigo-950/30 rounded-full flex items-center justify-center">
            <span className="text-2xl">���</span>
          </div>
        </div>
      </>
    ),
    tags: [
      { text: "Ember Gen", color: "bg-purple-950/30" },
      { text: "Blender", color: "bg-purple-950/30" },
      { text: "Unreal Engine", color: "bg-purple-900/30" },
      { text: "Music Video", color: "bg-indigo-900/30" },
    ],
    containerProps: {
      maxTilt: 15,
      scale: 1.02,
      glassOpacity: 0.15,
      glassBlur: 12,
      className: "bg-gradient-to-br from-purple-950/15 to-indigo-950/15",
    },
    isReversed: false,
  },
  {
    title: "Environment Art",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    containerContent: (
      <>
        <h2 className="text-xl font-bold mb-4">Sci-Fi Environment</h2>
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-950/30 to-indigo-950/30 rounded-full flex items-center justify-center">
            <span className="text-2xl">���</span>
          </div>
        </div>
      </>
    ),
    tags: [
      { text: "Blender", color: "bg-purple-950/30" },
      { text: "Environment Art", color: "bg-indigo-950/30" },
      { text: "Lighting", color: "bg-indigo-900/30" },
    ],
    containerProps: {
      maxTilt: 12,
      scale: 1.03,
      glassOpacity: 0.15,
      glassBlur: 10,
      className: "bg-gradient-to-br from-purple-950/15 to-indigo-950/15",
    },
    isReversed: true,
  },
  {
    title: "Endless Engines",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    containerContent: (
      <>
        <h2 className="text-xl font-bold mb-4">Sci-Fi Environment</h2>
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-950/30 to-indigo-950/30 rounded-full flex items-center justify-center">
            <span className="text-2xl">���</span>
          </div>
        </div>
      </>
    ),
    tags: [
      { text: "Blender", color: "bg-purple-950/30" },
      { text: "Animation", color: "bg-indigo-950/30" },
      { text: "Environment Design", color: "bg-indigo-900/30" },
    ],
    containerProps: {
      maxTilt: 12,
      scale: 1.03,
      glassOpacity: 0.15,
      glassBlur: 10,
      className: "bg-gradient-to-br from-purple-950/15 to-indigo-950/15",
    },
    isReversed: false,
  },
  {
    title: "Infinite Journeys",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    containerContent: (
      <>
        <h2 className="text-xl font-bold mb-4">Sci-Fi Environment</h2>
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-950/30 to-indigo-950/30 rounded-full flex items-center justify-center">
            <span className="text-2xl">���</span>
          </div>
        </div>
      </>
    ),
    tags: [
      { text: "Blender", color: "bg-purple-950/30" },
      { text: "Animation", color: "bg-indigo-950/30" },
      { text: "Environment Design", color: "bg-indigo-900/30" },
    ],
    containerProps: {
      maxTilt: 12,
      scale: 1.03,
      glassOpacity: 0.15,
      glassBlur: 10,
      className: "bg-gradient-to-br from-purple-950/15 to-indigo-950/15",
    },
    isReversed: true,
  },
  {
    title: "Realistic Interior Scene",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    containerContent: (
      <>
        <h2 className="text-xl font-bold mb-4">Sci-Fi Environment</h2>
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-950/30 to-indigo-950/30 rounded-full flex items-center justify-center">
            <span className="text-2xl">���</span>
          </div>
        </div>
      </>
    ),
    tags: [
      { text: "Unreal Engine", color: "bg-purple-950/30" },
      { text: "Environment Art", color: "bg-indigo-950/30" },
      { text: "Physical Based Lighting", color: "bg-indigo-900/30" },
    ],
    containerProps: {
      maxTilt: 12,
      scale: 1.03,
      glassOpacity: 0.15,
      glassBlur: 10,
      className: "bg-gradient-to-br from-purple-950/15 to-indigo-950/15",
    },
    isReversed: false,
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
