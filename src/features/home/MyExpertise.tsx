import Animate from "../../utils/animations/Animate";
import ExpertiseCard from "../../utils/ExpertiseCard";

interface MyExpertiseInterface{
    scrollView:string | undefined
    targetDivRef: React.RefObject<HTMLDivElement>

}


function MyExpertise({scrollView,targetDivRef}:MyExpertiseInterface) {
  const expertise = [
    {
      icon: "SOFTWARE",
      heading: "Full-Stack Development",
      headingContemt: "Frontend | Backend | App",
      desc: "Proficient in full-stack development using React, Next.js, Tailwind CSS, TypeScript, Spring Boot, NestJS, and PostgreSQL. Also experienced in building cross-platform apps with Flutter.",
    },
    {
      icon: "CODE",
      heading: "Problem Solving & DSA",
      headingContemt: "Leetcode | HackerRank",
      desc: "Solved 150+ DSA problems. Strong foundation in data structures and algorithms. 5⭐ in Python and 3⭐ in Java on HackerRank, demonstrating solid problem-solving skills and coding consistency.",
    },

    {
      icon: "GITHUB",
      heading: "Tools, Workflow & Open Source",
      headingContemt: "Git | Agile | Bitbucket",
      desc: "Experienced with Git, Bitbucket, GitHub, and Agile methodologies. Involved in open-source collaboration and team-based development with Jira and CI/CD workflows for scalable and maintainable projects.",
    },
  ];
  return (
    <div>
      <div
        ref={scrollView === "EXPERTISE" ? targetDivRef : null}
        className="mt-[20vh] font-bold w-full flex items-center justify-center text-4xl"
      >
        <Animate delay={250} type="slideLeft">
          <h1>My Expertise</h1>
        </Animate>
      </div>
      <div className="px-4 mt-[8vh] ">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-[10vw]  items-center justify-center w-full gap-8 ">
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
    </div>
  );
}

export default MyExpertise;
