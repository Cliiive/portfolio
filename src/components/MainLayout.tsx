import { useTheme } from "../context/ThemeContext";
import TabSelector from "./TabSelector";
import Footer from "./Footer";
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
        {" "}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-200 mb-4">
          Jonas Sasowski
        </h1>
        <p
          className={`${colors.text} mt-2 mb-8 transition-colors duration-500`}
        >
          A showcase of my work in full stack development and 3D art.
        </p>
        <TabSelector />
      </header>

      <div className="max-w-7xl mx-auto transition-all duration-500">
        {children}{" "}
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
