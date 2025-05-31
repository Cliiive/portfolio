import { useTheme } from "../context/ThemeContext";
import type { ThemeType } from "../context/ThemeContext";
const TabSelector = () => {
  const { theme, setTheme, colors } = useTheme();

  const handleTabChange = (newTheme: ThemeType) => {
    if (theme !== newTheme) {
      setTheme(newTheme);
    }
  };
  return (
    <div className="flex justify-center mb-8">
      <button
        onClick={() => handleTabChange("development")}
        className={`px-4 py-2 rounded-lg transition-colors duration-300 bg-transparent ${
          theme === "development"
            ? colors.primary
            : "text-gray-500 hover:text-gray-300 bg-transparent"
        }`}
      >
        Development
      </button>
      <button
        onClick={() => handleTabChange("3d-art")}
        className={`ml-4 px-4 py-2 rounded-lg transition-colors bg-transparent duration-300 ${
          theme === "3d-art"
            ? colors.primary
            : "text-gray-500 hover:text-gray-300"
        }`}
      >
        3D Art
      </button>
    </div>
  );
};

export default TabSelector;
