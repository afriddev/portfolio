import { useAppContext } from "../../utils/AppContext";

const FOOTER_LINKS = [
  { label: "About", target: "ABOUT" },
  { label: "Work", target: "PROJECTS" },
  { label: "Connect", target: "CONTACT" },
];

function FooterSection() {
  const { dispatch } = useAppContext();

  function HandleScrollTo(target: string) {
    dispatch({ type: "setScrollView", payload: target });
    setTimeout(() => {
      dispatch({ type: "setScrollView", payload: undefined });
    }, 400);
  }

  return (
    <footer className="border-t border-zinc-100 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <div className="text-sm font-bold tracking-wide">
              SHAIK AFRID
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mt-0.5">
              Software Engineer &
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">
              Full-Stack Developer
            </div>
          </div>

          <div className="flex items-center gap-8">
            {FOOTER_LINKS.map((link) => (
              <button
                key={link.target}
                onClick={() => HandleScrollTo(link.target)}
                className="nav-link text-[11px] uppercase tracking-[0.15em] text-zinc-500 hover:text-foreground transition-colors duration-300 font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="text-center lg:text-right">
            <div className="text-[10px] uppercase tracking-[0.15em] text-zinc-400">
              © 2026 Portfolio
            </div>
            <div className="text-[10px] uppercase tracking-[0.15em] text-zinc-400 font-semibold">
              All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
