import { useTheme } from "../context/ThemeContext";
import TabSelector from "./TabSelector";
import { useEffect, useState } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { colors, theme } = useTheme();
  const [bgClass, setBgClass] = useState("");

  useEffect(() => {
    // Update background class based on theme
    setBgClass(colors.background);
  }, [theme, colors]);
  return (
    <div
      className={`min-h-screen p-4 md:p-8 lg:p-12 ${bgClass} transition-colors duration-700`}
    >
      <header className="mb-12 md:mb-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          My Portfolio
        </h1>
        <p
          className={`${colors.text} mt-2 mb-8 transition-colors duration-500`}
        >
          Interactive Project Showcase
        </p>
        <TabSelector />
      </header>

      <div className="max-w-7xl mx-auto transition-all duration-500">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
