import { Outlet, Route, Routes } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Nav from "./components/Nav.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import Writeups from "./pages/Writeups.tsx";
import WriteupDetail from "./pages/WriteupDetail.tsx";
import Impressum from "./pages/Impressum.tsx";

function Layout() {
	return (
		<div className="min-h-screen bg-[#1d2021] text-[#ebdbb2] flex flex-col">
			<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#1d2021]/70 border-b" style={{ borderColor: '#3c3836' }}>
				<Nav />
			</header>
			<main className="container-std py-8 flex-1">
				<Outlet />
			</main>
			<footer className="border-t" style={{ borderColor: '#3c3836' }}>
				<div className="container-std py-6 text-sm" style={{ color: '#bdae93' }}>
					<div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-between">
					<div>© 2025 Jonas Sasowski</div>
						<div className="flex items-center gap-4">
							<a className="underline underline-offset-4" style={{ color: '#d79921' }} href="/impressum">Impressum</a>
						{/* Mobile-only social icons */}
							<a
								className="sm:hidden p-2 -m-2"
								style={{ color: '#a89984' }}
							href="https://github.com/Cliiive"
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub"
							title="GitHub"
						>
							<FaGithub size={18} />
						</a>
							<a
								className="sm:hidden p-2 -m-2"
								style={{ color: '#a89984' }}
							href="#"
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn"
							title="LinkedIn"
						>
							<FaLinkedin size={18} />
						</a>
					</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<About />} />
				<Route path="projects" element={<Projects />} />
				<Route path="projects/:slug" element={<ProjectDetail />} />
				<Route path="writeups" element={<Writeups />} />
				<Route path="writeups/:slug" element={<WriteupDetail />} />
				<Route path="impressum" element={<Impressum />} />
			</Route>
		</Routes>
	);
}
