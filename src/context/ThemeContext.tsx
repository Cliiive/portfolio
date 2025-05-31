import { createContext, useContext, useState, type ReactNode } from "react";

// Define our theme types
export type ThemeType = "development" | "3d-art";

// Define color scheme interface
interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  cardBg: string;
  tagBg: string;
}

// Define theme settings
interface ThemeSettings {
  development: ColorScheme;
  "3d-art": ColorScheme;
}

// Create the theme settings object
const themeSettings: ThemeSettings = {
  development: {
    primary: "from-slate-900 to-gray-900",
    secondary: "text-blue-400 hover:text-blue-300",
    accent: "border-blue-500",
    background: "bg-gradient-to-br from-slate-900 to-gray-900",
    text: "text-gray-300",
    cardBg: "from-blue-500/10 to-indigo-500/10",
    tagBg: "bg-blue-600/30",
  },
  "3d-art": {
    primary: "from-purple-900 to-pink-900",
    secondary: "text-purple-400 hover:text-purple-300",
    accent: "border-pink-500",
    background: "bg-gradient-to-br from-purple-900 to-pink-900",
    text: "text-gray-200",
    cardBg: "from-pink-500/10 to-purple-500/10",
    tagBg: "bg-pink-600/30",
  },
};

// Create a context for the theme
interface ThemeContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  colors: ColorScheme;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Create a provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("development");

  // Get the current color scheme based on the theme
  const colors = themeSettings[theme];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a hook for using the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
