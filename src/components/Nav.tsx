import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const linkBase =
  "px-2 py-1 md:px-3 md:py-2 rounded-md text-[12px] md:text-sm font-medium text-[#bdae93] hover:text-[#fbf1c7] hover:bg-[#3c3836]";

export default function Nav() {
  return (
    <div className="container-std flex items-center justify-between gap-2 py-2">
      <div className="text-xs sm:text-sm flex-shrink-0" style={{ color: '#bdae93' }}>
        <span style={{ color: '#d79921' }}>{String.raw`_/0/\//-\5`}</span>
      </div>
      <nav className="flex items-center gap-1 ml-auto flex-wrap justify-end min-w-0">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${linkBase} ${isActive ? "bg-[#3c3836] text-[#fbf1c7]" : ""}`
          }
        >
          About Me
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? "bg-[#3c3836] text-[#fbf1c7]" : ""}`
          }
        >
          Projects / Blog
        </NavLink>
        <NavLink
          to="/writeups"
          className={({ isActive }) =>
            `${linkBase} ${isActive ? "bg-[#3c3836] text-[#fbf1c7]" : ""}`
          }
        >
          Writeups
        </NavLink>
        <div className="hidden md:block ml-3 h-6 w-px" style={{ backgroundColor: '#3c3836' }} />
          <a
          href="https://github.com/Cliiive"
          target="_blank"
          rel="noreferrer"
            className="hidden md:inline-flex p-2 hover:text-[#d79921]"
            style={{ color: '#a89984' }}
          aria-label="GitHub"
          title="GitHub"
        >
          <FaGithub size={18} />
        </a>
          <a
          href="#"
          target="_blank"
          rel="noreferrer"
            className="hidden md:inline-flex p-2 hover:text-[#d79921]"
            style={{ color: '#a89984' }}
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedin size={18} />
        </a>
      </nav>
    </div>
  );
}
