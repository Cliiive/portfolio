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
    primary: "from-black to-slate-950",
    secondary: "text-blue-500 hover:text-blue-400",
    accent: "border-blue-700",
    background: "bg-gradient-to-br from-black to-slate-950",
    text: "text-gray-400",
    cardBg: "from-slate-950/10 to-blue-950/10",
    tagBg: "bg-blue-950/30",
  },
  "3d-art": {
    primary: "from-purple-950 to-indigo-950",
    secondary: "text-purple-500 hover:text-purple-400",
    accent: "border-purple-700",
    background: "bg-gradient-to-br from-purple-950 to-indigo-950",
    text: "text-gray-300",
    cardBg: "from-purple-950/10 to-purple-900/10",
    tagBg: "bg-purple-900/30",
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
