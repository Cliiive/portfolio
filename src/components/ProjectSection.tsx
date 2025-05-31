import { ReactNode } from "react";
import FloatingContainer from "./FloatingContainer";
import { useTheme } from "../context/ThemeContext";

interface ProjectSectionProps {
  title: string;
  description: string;
  containerContent: ReactNode;
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

const ProjectSection = ({
  title,
  description,
  containerContent,
  tags,
  projectLink = "#",
  isReversed = false,
  containerProps = {},
}: ProjectSectionProps) => {
  const { colors } = useTheme();
  
  const {
    maxTilt,
    scale,
    glassOpacity,
    glassBlur,
    className = "",
  } = containerProps;

  return (
    <div
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } items-center md:items-start mb-16 md:mb-24`}
    >
      <FloatingContainer
        className={`w-full md:w-80 lg:w-96 aspect-square mb-6 md:mb-0 ${
          isReversed ? "md:ml-8" : "md:mr-8"
        } ${className}`}
        maxTilt={maxTilt}
        scale={scale}
        glassOpacity={glassOpacity}
        glassBlur={glassBlur}
      >
        <div className="h-full flex flex-col justify-center items-center">
          {containerContent}
        </div>
      </FloatingContainer>      <div className="md:flex-1 text-gray-300">
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="mb-4">{description}</p>
        <ul className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <li
              key={index}
              className={`${tag.color} px-3 py-1 rounded-full text-sm`}
            >
              {tag.text}
            </li>
          ))}
        </ul>
        <a
          href={projectLink}
          className={`${colors.secondary} inline-flex items-center`}
        >
          View Project <span className="ml-1">→</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectSection;
