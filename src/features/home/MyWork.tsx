import Animate from "../../utils/animations/Animate";

interface MyWorkInterface {
  scrollView: string | undefined;
  targetDivRef: React.RefObject<HTMLDivElement>;
  updateProjectDetails:(value:string) =>void
}

function MyWork({ scrollView, targetDivRef ,updateProjectDetails}: MyWorkInterface) {
  return (
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
              user-friendly designs and secure features. My expertise includes
              Flutter, Dart, Firebase, MongoDB, Next.js, and React.js.
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
            <div className="relative">
              <img
                src="mobile-frame.png"
                className="absolute  object-fill h-[51vh] rounded-xl"
              />
              <img
                src="main-app.PNG"
                className="h-[51vh] lg:w-[13vw] p-2 lg:p-3 rounded-[30px]"
              />
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
  );
}

export default MyWork;
