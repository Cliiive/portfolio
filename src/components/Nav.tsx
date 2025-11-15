import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const linkBase =
  "px-2 py-1 md:px-3 md:py-2 rounded-md text-[12px] md:text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60";

export default function Nav() {
  return (
    <div className="container-std flex items-center justify-between gap-2 py-2">
      <div className="text-xs sm:text-sm text-slate-300 flex-shrink-0">
        <span className="text-violet-400">Jonas Sasowski</span>
      </div>
      <nav className="flex items-center gap-1 ml-auto flex-wrap justify-end min-w-0">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${linkBase} ${isActive ? "bg-slate-800/60 text-white" : ""}`
          }
        >
          About Me
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? "bg-slate-800/60 text-white" : ""}`
          }
        >
          Projects / Blog
        </NavLink>
        <NavLink
          to="/writeups"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? "bg-slate-800/60 text-white" : ""}`
          }
        >
          Writeups
        </NavLink>
        <div className="hidden md:block ml-3 h-6 w-px bg-slate-800" />
          <a
          href="https://github.com/Cliiive"
          target="_blank"
          rel="noreferrer"
            className="hidden md:inline-flex p-2 text-slate-400 hover:text-violet-300"
          aria-label="GitHub"
          title="GitHub"
        >
          <FaGithub size={18} />
        </a>
          <a
          href="#"
          target="_blank"
          rel="noreferrer"
            className="hidden md:inline-flex p-2 text-slate-400 hover:text-violet-300"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedin size={18} />
        </a>
      </nav>
    </div>
  );
}
