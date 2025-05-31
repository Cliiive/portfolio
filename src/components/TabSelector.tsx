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
    <div className="flex justify-center mb-12">
      <div className="inline-flex rounded-lg p-2 space-x-3 bg-slate-800/50 backdrop-blur-sm">
        <button
          onClick={() => handleTabChange("development")}
          className={`px-8 py-3 rounded-md font-medium transition-all duration-300 ${
            theme === "development"
              ? `bg-gradient-to-r from-blue-500/20 to-indigo-500/20 ${colors.accent} border-b-2 transform scale-105`
              : "text-gray-400 hover:text-gray-200 hover:bg-slate-700/30"
          }`}
        >
          Development
        </button>
        <button
          onClick={() => handleTabChange("3d-art")}
          className={`px-8 py-3 rounded-md font-medium transition-all duration-300 ${
            theme === "3d-art"
              ? `bg-gradient-to-r from-pink-500/20 to-purple-500/20 ${colors.accent} border-b-2 transform scale-105`
              : "text-gray-400 hover:text-gray-200 hover:bg-slate-700/30"
          }`}
        >
          3D Art
        </button>
      </div>
    </div>
  );
};

export default TabSelector;
