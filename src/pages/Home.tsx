import { useEffect, useRef } from "react";
import { useUpdateProjectDetails } from "../hooks/appHooks";
import Animate from "../utils/animations/Animate";
import { ABOUT_ME, NAME } from "../utils/AppConstants";
import { useAppContext } from "../utils/AppContext";
import DownwArrow from "../utils/DownArraow";
import ExpertiseCard from "../utils/ExpertiseCard";
import NavBar from "../utils/NavBar";
import BottomNav from "./homeutils/BottomNav";
import Experience from "./homeutils/Experience";
import Projects from "./homeutils/Projects";

function Home() {
  const { updateProjectDetails } = useUpdateProjectDetails();
  const expertise = [
    {
      icon: "SOFTWARE",
      desc: "Experienced in both functional and OOP: Dart, Python, Java, TypeScript. Solved more than 100 DSA problems",
      heading: "Software",
      headingContemt: "Development",
    },
    {
      icon: "REACT",
      desc: "Passionate about UI/UX with 4+ years of experience in HTML, CSS, JavaScript, React, and Next.js.",
      heading: "Frontend Dev",
      headingContemt: "React,NextJS",
    },

    {
      icon: "BACKEND",
      desc: "Skilled in backend development using Spring Boot, Django, Flask, FastAPI",
      heading: "Backend Dev",
      headingContemt: "Spring boot,django",
    },

    {
      icon: "FLUTTER",
      desc: "Skilled in developing cross-platform mobile apps using the Flutter framework.",
      heading: "Flutter Dev",
      headingContemt: "Android, ios",
    },
    {
      icon: "MONGODB",
      desc: "Skilled in database development and management using MongoDB, Postgresql and Firebase.",
      heading: "Database Dev",
      headingContemt: "MongoDB,firebase",
    },
    {
      icon: "GITHUB",
      desc: "Skilled in Git, Bitbucket, and Agile workflows for efficient project delivery.",
      heading: "Version Control ",
      headingContemt: "Git, Bitbucket, Agile",
    },
  ];
  const { scrollView, dispatch } = useAppContext();
  const targetDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const temp = scrollView;

    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: "smooth" });
      dispatch({
        type: "setScrollView",
        payload: undefined,
      });
    }
    localStorage.setItem("selectedProject", null as never);

    dispatch({
      type: "setScrollView",
      payload: temp,
    });
  }, [scrollView, targetDivRef]);

  return (
    <div className=" w-full h-full flex flex-col ">
      <div className="min-h-[100vh]  flex flex-col">
        <NavBar />
        <div className=" p-3  flex flex-col justify-between py-10 h-[80vh]">
          <div className="flex flex-col justify-center gap-3 mt-[25vh] lg:mt-[15vh] items-center">
            <Animate delay={450}>
              <h1 className="typewriter text-[40px] font-bold lg:text-[150px]">
                {NAME.toUpperCase()}
              </h1>
            </Animate>
            <Animate delay={600}>
              <p className="w-[70vw] text-xl text-center lg:text-2xl lg:-mt-10">
                {ABOUT_ME}
              </p>
            </Animate>
          </div>

          <Animate delay={750}>
            <div
              className=" w-full flex items-center justify-center"
              onClick={() => {
                dispatch({
                  type: "setScrollView",
                  payload: "EXPERTISE",
                });
                setTimeout(() => {
                  dispatch({
                    type: "setScrollView",
                    payload: undefined,
                  });
                }, 400);
              }}
            >
              <DownwArrow />
            </div>
          </Animate>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#1c1b22] pb-10 via-[#17161a] to-[#17161a] -mt-4 lg:-mt-0 w-full">
        <div
          ref={scrollView === "EXPERTISE" ? targetDivRef : null}
          className="mt-[20vh] font-bold w-full flex items-center justify-center text-4xl"
        >
          <Animate delay={250} type="slideLeft">
            <h1>My Expertise</h1>
          </Animate>
        </div>
        <div className="px-4 mt-[8vh] ">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center w-full gap-8 ">
            {expertise?.map((item, index) => (
              <ExpertiseCard
                key={index}
                icon={item?.icon as never}
                heading={item?.heading as never}
                headingContemt={item?.headingContemt as never}
                desc={item?.desc as never}
                delay={index * 100}
              />
            ))}
          </div>

          <Animate delay={300} type="blink">
            <div className=" flex items-center w-full justify-center">
              <img
                alt="html code"
                src="html.png "
                className="opacity-30 -mt-10 lg:-mt-6 lg:w-[30vw]"
              />
            </div>
          </Animate>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="px-4">
            <div
              ref={scrollView === "WORK" ? targetDivRef : null}
              className="flex lg:max-w-[30vw] flex-col gap-2"
            >
              <Animate delay={200} type="slideLeft">
                <h1 className="text-[60px] font-bold">
                  My
                  <br /> Work
                </h1>
              </Animate>
              <Animate delay={300} type="slideLeft">
                <p className="">
                  I develop web and mobile applications with a focus on
                  user-friendly designs and secure features. My expertise
                  includes Flutter, Dart, Firebase, MongoDB, Next.js, and
                  React.js.
                </p>
              </Animate>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:relative  ">
            <div className="flex items-end justify-between  mt-[5vh] gap-5 ml-[10vw]">
              <div className="pl-6 pb-20">
                <Animate delay={500} type="slideLeft">
                  <div>
                    <img
                      src="rightsidearrow.png"
                      className="w-[30vw] lg:w-[8vw] lg:mb-[3vw] lg:-mr-[3vw]"
                    />
                  </div>
                </Animate>
              </div>
              <Animate delay={200} type="blink">
                <div className="">
                  <img src="mainapp.png" className="h-[50vh]" />
                </div>
              </Animate>
            </div>
            <div className="pl-5 pt-5 lg:absolute lg:left-0 lg:bottom-0">
              <div className="flex flex-col gap-2">
                <Animate delay={100} type="slideLeft">
                  {" "}
                  <h3 className="text-xl font-semibold">Featured project</h3>
                </Animate>
                <Animate delay={300} type="slideLeft">
                  <h3 className="text-3xl font-semibold">Tailoring App</h3>
                </Animate>
              </div>

              <Animate delay={300} type="slideLeft">
                <div className="pt-2">
                  <button
                    onClick={() => {
                      updateProjectDetails("APP");
                    }}
                    className=" rounded-sm bg-secondary px-5 h-fit w-fit py-2 text-foreground"
                  >
                    View Project
                  </button>
                </div>
              </Animate>
            </div>
          </div>
        </div>
        <div className="pb-[5vh]">
          <Projects />
        </div>
        <div ref={scrollView === "EXPERIENCE" ? targetDivRef : null}>
          <Experience />
        </div>

        <div ref={scrollView === "CONTACT" ? targetDivRef : null}>
          <BottomNav />
        </div>
      </div>
    </div>
  );
}
export default Home;
