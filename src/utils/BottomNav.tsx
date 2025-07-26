import { FaGithub } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import Animate from "./animations/Animate";
import { CiLinkedin } from "react-icons/ci";

function BottomNav() {
  function handleOpenSocialLink(type: string) {
    switch (type) {
      case "INSTA":
        window.open("https://www.instagram.com/afrid.dev/");
        break;

      case "X":
        window.open("https://x.com/AFRIDANON");

        break;
      case "GITHUB":
        window.open("https://github.com/afriddev");

        break;
      case "LINKEDIN":
        window.open("https://www.linkedin.com/in/afriddev/");

        break;
    }
  }
  function handleEmailClick() {
    const mailtoUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=afridayan01@gmail.com&su=Hey";
    window.open(mailtoUrl, "_blank");
  }

  return (
    <div className="w-full flex flex-col px-4 items-center justify-center mt-[5vh]">
      <div className="flex flex-col gap-10 lg:gap-3 text-center ">
        <Animate delay={200} type="slideLeft">
          <h1 className="text-2xl lg:text-[40px] font-semibold">
            Available for select freelance opportunities
          </h1>
        </Animate>
        <Animate delay={400} type="slideLeft">
          <p className=" font-semibold lg:text-xs">
            Have an exciting project you need help with? Send me an email or
            contact me via instant message!
          </p>
        </Animate>
      </div>
      <Animate delay={500} type="slideLeft">
        <div className="mt-[5vh]">
          <div onClick={handleEmailClick} className="text-xl border-b-4  border-secondary cursor-pointer lg:hover:scale-105 lg:hover:text-primary ">
            afridayan01@gmail.com
          </div>
          <div className="text-center mt-[3vh] flex  items-center justify-center gap-4">
            <h3
              onClick={() => {
                handleOpenSocialLink("GITHUB");
              }}
              className="flex items-center bg-foreground/10 rounded-md  px-3 py-2 cursor-pointer lg:hover:bg-foreground/20 lg:hover:scale-105"
            >
              {" "}
              <FaGithub className=" h-6 w-5" />
            </h3>
            <h3
              onClick={() => {
                handleOpenSocialLink("LINKEDIN");
              }}
              className="flex items-center bg-foreground/10 rounded-md  px-3 py-2 cursor-pointer lg:hover:bg-foreground/20 lg:hover:scale-105"
            >
              <CiLinkedin className=" h-6 w-5" />
            </h3>
            <h3
              onClick={() => {
                handleOpenSocialLink("X");
              }}
              className="flex items-center bg-foreground/10 rounded-md  px-3 py-2 cursor-pointer lg:hover:bg-foreground/20 lg:hover:scale-105"
            >
              <FaXTwitter className=" h-6 w-5" />
            </h3>
            <h3
              onClick={() => {
                handleOpenSocialLink("INSTA");
              }}
              className="flex items-center bg-foreground/10 rounded-md  px-3 py-2 cursor-pointer lg:hover:bg-foreground/20 lg:hover:scale-105"
            >
              <CiInstagram className=" h-6 w-5" />
            </h3>
          </div>
        </div>
      </Animate>
      <div className="w-full mt-[9vh]">
        <Animate delay={200} type="slideDown">
          <div className="w-full flex flex-col gap-2 lg:flex-row lg:justify-between lg:px-20">
            <div className="flex items-center justify-center text-foreground/40  text-xs">
              © 2025. Made with passion by Shaik Afrid.
            </div>
            <div className="flex items-center justify-center text-foreground/40  text-xs ">
              All right reserved
            </div>
          </div>
        </Animate>
      </div>
    </div>
  );
}

export default BottomNav;
