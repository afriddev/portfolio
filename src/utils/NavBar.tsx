import { useState, useEffect } from "react";
import { useAppContext } from "./AppContext";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const NAV_ITEMS = [
  { label: "About", target: "ABOUT" },
  { label: "Skills", target: "SKILLS" },
  { label: "Projects", target: "PROJECTS" },
  { label: "Experience", target: "EXPERIENCE" },
  { label: "Connect", target: "CONTACT" },
];

function NavBar() {
  const { dispatch } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [mobileMenuOpen]);

  function HandleScrollTo(target: string) {
    dispatch({ type: "setScrollView", payload: target });
    setTimeout(() => {
      dispatch({ type: "setScrollView", payload: undefined });
    }, 400);
    setMobileMenuOpen(false);
  }

  function HandleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-zinc-100 h-16 lg:h-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-full">
          <div
            className="cursor-pointer flex flex-col select-none"
            onClick={HandleScrollToTop}
          >
            <span className="text-sm lg:text-base font-bold tracking-wide text-foreground">
              SHAIK <span className="font-extrabold">AFRID</span>
            </span>
            <span className="text-[9px] lg:text-[10px] tracking-[0.25em] text-zinc-600 uppercase font-medium">
              Software Engineer
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.target}
                onClick={() => HandleScrollTo(item.target)}
                className="nav-link text-[11px] uppercase tracking-[0.2em] text-zinc-600 hover:text-foreground hover:font-semibold transition-all duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://github.com/afriddev"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-github text-foreground hover:text-foreground transition-colors duration-300"
            >
              <FaGithub className="w-[18px] h-[18px]" />
            </a>
          </div>

          <button
            className="lg:hidden p-2 z-[70]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <IoMdClose className="w-6 h-6 text-foreground" />
            ) : (
              <IoMenuOutline className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[60] flex flex-col"
          style={{ backgroundColor: "#fafafa" }}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-zinc-100">
            <div
              className="flex flex-col select-none"
              onClick={HandleScrollToTop}
            >
              <span className="text-sm font-bold tracking-wide text-foreground">
                SHAIK <span className="font-extrabold">AFRID</span>
              </span>
              <span className="text-[9px] tracking-[0.25em] text-zinc-400 uppercase">
                Software Engineer
              </span>
            </div>
            <button className="p-2" onClick={() => setMobileMenuOpen(false)}>
              <IoMdClose className="w-6 h-6 text-foreground" />
            </button>
          </div>

          <div className="flex flex-col items-start px-10 pt-16 gap-8">
            {NAV_ITEMS.map((item, index) => (
              <button
                key={item.target}
                onClick={() => HandleScrollTo(item.target)}
                className="text-2xl font-semibold text-foreground hover:text-zinc-500 transition-colors duration-300 tracking-wide"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://github.com/afriddev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg font-semibold text-foreground hover:text-zinc-500 transition-colors duration-300 tracking-wide mt-4"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="mt-auto px-10 pb-10">
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
              © 2026 Shaik Afrid
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
