import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaReact } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaGithub } from "react-icons/fa6";
import Animate from "./animations/Animate";
import { IoCodeSharp } from "react-icons/io5";

interface ExpertiseCardInterface {
  icon: "REACT" | "FLUTTER" | "SOFTWARE" | "BACKEND" | "MONGODB" | "GITHUB" | "CODE";
  heading: string;
  headingContemt: string;
  desc: string;
}

function ExpertiseCard({
  desc,
  heading,
  headingContemt,
  icon,
  delay,
}: ExpertiseCardInterface & { delay: number }) {
  return (
    <Animate  delay={delay}>
      <div className="border-2 border-foreground/50 px-8 py-10">
        <div className="flex gap-6">
          {icon === "REACT" ? (
            <FaReact className="h-14 w-14" />
          ) : icon === "SOFTWARE" ? (
            <HiOutlineComputerDesktop className="h-14 w-14" />
          ) : icon === "BACKEND" ? (
            <BiLogoSpringBoot className="h-14 w-14" />
          ) : icon === "FLUTTER" ? (
            <FaFlutter className="h-14 w-14" />
          ) : icon === "CODE" ? (
            <IoCodeSharp  className="h-14 w-14" />
          ) : (
            <FaGithub className="h-14 w-14" />
          )}
          <div className="flex flex-col gap-1 text-xl font-semibold">
            <div className="w-fit text-xl">
              <h2 className="z-[301] ">{heading}</h2>
              
            </div>
            <h2>{headingContemt}</h2>
          </div>
        </div>

        <div className="flex mt-4 justify-center items-center h-full">
          <div className="flex flex-col items-center h-full text-foreground/30">
            <label>{`<h3>`}</label>
            <div className="w-[0.1rem] h-[30vh] lg:h-[16vh] bg-foreground/10"></div>
            <label>{`</h3>`}</label>
          </div>
          <div className="h-fit">
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </Animate>
  );
}

export default ExpertiseCard;
