import { IoReorderTwoSharp } from "react-icons/io5";
import { NAME } from "./AppConstants";
import Animate from "./animations/Animate";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./AppContext";
function NavBar() {
  const navigate = useNavigate();
  const { dispatch } = useAppContext();
  function handleHomeClick() {
    navigate("/");
    dispatch({
      type: "setProjectDetail",
      payload: undefined,
    });
  }

  function handleNameClick() {
    navigate("/");
    dispatch({
      type: "setProjectDetail",
      payload: undefined,
    });
  }

  function handleScrollViewClick(value: string) {
    dispatch({
      type: "setProjectDetail",
      payload: undefined,
    });
    dispatch({
      type: "setScrollView",
      payload: value,
    });
    navigate("/");
     

  }

  return (
    <div className=" w-full  px-2 flex items-center gap-3 lg:px-10 lg:py-8 static">
      <div className="flex items-center">
        <Animate delay={150}>
          <div className="lg:hidden">
            <IoReorderTwoSharp className="w-14 bg-zinc-700/10 p-3 rounded-full h-14  text-foreground " />
          </div>
        </Animate>
        <Animate delay={150}>
          {" "}
          <div className="cursor-pointer  ml-[2vw] flex items-end">
            <div
              onClick={handleNameClick}
              className="cursor-pointer font-medium text-primary text-3xl lg:text-4xl"
            >
              {NAME}
            </div>

            <a className="text-foreground text-4xl">.</a>
            <label className="text-secondary text-[25px] font-bold">_</label>
          </div>
        </Animate>
      </div>
      <Animate delay={300}>
        <div className="lg:flex items-center hover:text-foreground/40 text-foreground hidden gap-12 text-xl ml-[15vw]">
          <div className="relative cursor-pointer hover:scale-105 hover:text-primary ">
            <div className="flex items-center gap-2" onClick={handleHomeClick}>
              //{" "}
              <span className="lg:hover:border-b lg:border-primary">Home</span>
            </div>
            <a className=" absolute -top-2 font-thin -right-2 text-foreground/50 text-xs ">
              01
            </a>
          </div>
          <div
            onClick={() => {
              handleScrollViewClick("EXPERTISE");
            }}
            className="relative cursor-pointer hover:scale-105  hover:text-primary "
          >
            <div className="flex items-center gap-2">
              //{" "}
              <span className="lg:hover:border-b lg:border-primary">
                Expertise
              </span>
            </div>
            <a className=" absolute -top-2 font-thin -right-2 text-foreground/50 text-xs ">
              02
            </a>
          </div>
          <div
            onClick={() => {
              handleScrollViewClick("WORK");
            }}
            className="relative cursor-pointer hover:scale-105  hover:text-primary "
          >
            <div className="flex items-center gap-2">
              //{" "}
              <span className="lg:hover:border-b lg:border-primary">Work</span>
            </div>
            <a className=" absolute -top-2 font-thin -right-2 text-foreground/50 text-xs ">
              03
            </a>
          </div>
          <div
            onClick={() => {
              handleScrollViewClick("EXPERIENCE");
            }}
            className="relative cursor-pointer hover:scale-105  hover:text-primary "
          >
            <div className="flex items-center gap-2">
              //{" "}
              <span className="lg:hover:border-b lg:border-primary">
                Experience
              </span>
            </div>
            <a className=" absolute -top-2 font-thin -right-2 text-foreground/50 text-xs ">
              04
            </a>
          </div>

          <div
            onClick={() => {
              handleScrollViewClick("CONTACT");
            }}
            className="relative cursor-pointer hover:scale-105  hover:text-primary "
          >
            <div className="flex items-center gap-2">
              //{" "}
              <span className="lg:hover:border-b lg:border-primary">
                Conatct
              </span>
            </div>
            <a className=" absolute -top-2 font-thin -right-2 text-foreground/50 text-xs ">
              05
            </a>
          </div>
        </div>
      </Animate>
    </div>
  );
}

export default NavBar;
