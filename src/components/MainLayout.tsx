import { useTheme } from "../context/ThemeContext";
import TabSelector from "./TabSelector";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { colors } = useTheme();

  return (
    <div className={`min-h-screen p-4 md:p-8 lg:p-12 ${colors.background} transition-colors duration-500`}>
      <header className="mb-12 md:mb-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">My Portfolio</h1>
        <p className={`${colors.text} mt-2`}>Interactive Project Showcase</p>
        <TabSelector />
      </header>

      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
