import { useState } from "react";
import { useAppContext } from "./AppContext";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <div
          className="cursor-pointer flex flex-col select-none"
          onClick={HandleScrollToTop}
        >
          <span className="text-sm lg:text-base font-bold tracking-wide text-foreground">
            SHAIK <span className="font-extrabold">AFRID</span>
          </span>
          <span className="text-[9px] lg:text-[10px] tracking-[0.25em] text-zinc-400 uppercase">
            Software Engineer
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.target}
              onClick={() => HandleScrollTo(item.target)}
              className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 hover:text-foreground transition-colors duration-300 font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <IoMdClose className="w-6 h-6 text-foreground" />
          ) : (
            <IoMenuOutline className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.target}
              onClick={() => HandleScrollTo(item.target)}
              className="text-sm uppercase tracking-[0.3em] text-zinc-500 hover:text-foreground transition-colors duration-300 font-medium"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
