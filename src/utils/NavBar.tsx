import { IoReorderTwoSharp } from "react-icons/io5";
import { NAME } from "./AppConstants";
import Animate from "./animations/Animate";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./AppContext";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
function NavBar() {
  const navigate = useNavigate();
  const { dispatch } = useAppContext();
  const [openMenu, setOpenMenu] = useState(false);
  function handleHomeClick() {
    navigate("/");
    localStorage.setItem("selectedProject", null as never);


  }

  function handleNameClick() {
    navigate("/");
    localStorage.setItem("selectedProject", null as never);

  }

  function handleScrollViewClick(value: string) {
    localStorage.setItem("selectedProject", null as never);


    dispatch({
      type: "setScrollView",
      payload: value,
    });
    setTimeout(() => {
      dispatch({
        type: "setScrollView",
        payload: undefined,
      });

    }, 400)

    navigate("/");


  }

  function handleMenuClick() {
    setOpenMenu(!openMenu);
  }

  function handleMenuItemsClick(value: string) {
    setOpenMenu(false);
    handleScrollViewClick(value);
  }

  return (
    <div className=" w-full  px-4 flex items-center gap-3 lg:px-5 lg:py-6 static p-3 justify-between">
      <div className="flex items-center w-full justify-between  lg:justify-start">
        {openMenu && (
          <div className="h-[100vh] pb-20 justify-between flex flex-col  inset-0 pl-8 z-[999] fixed text-black  -ml-4  bg-zinc-200 w-[75vw] ">
            <div className="flex flex-col gap-3">
              <Animate delay={100} type="slideDown">
                <div
                  onClick={handleMenuClick}
                  className="ml-[0.15rem] rounded-full px-2 py-2 mt-3 bg-black/5 w-fit"
                >
                  <IoMdClose className="w-10 h-10" />
                </div>
              </Animate>
              <div className="flex mt-[7vh] flex-col gap-5 ml-2 font-medium text-lg">
                <Animate delay={100} type="slideLeft">
                  <div onClick={() => {
                    handleHomeClick()
                    setOpenMenu(false)
                  }} className="cursor-pointer">
                    // home
                  </div>
                </Animate>
                <Animate delay={200} type="slideLeft">
                  <div
                    onClick={() => {
                      handleMenuItemsClick("EXPERTISE");
                    }}
                    className="cursor-pointer"
                  >
                    // Expertise
                  </div>
                </Animate>
                <Animate delay={300} type="slideLeft">
                  <div
                    onClick={() => {
                      handleMenuItemsClick("WORK");
                    }}
                    className="cursor-pointer"
                  >
                    // Work
                  </div>
                </Animate>
                <Animate delay={400} type="slideLeft">
                  <div
                    onClick={() => {
                      handleMenuItemsClick("EXPERIENCE");
                    }}
                    className="cursor-pointer"
                  >
                    // Experience
                  </div>
                </Animate>
                <Animate delay={500} type="slideLeft">
                  <div
                    onClick={() => {
                      handleMenuItemsClick("CONTACT");
                    }}
                    className="cursor-pointer"
                  >
                    // Conatct
                  </div>{" "}
                </Animate>
              </div>
            </div>
            <div className="w-full mt-[9vh]">
              <Animate delay={200} type="slideDown">
                <div className="w-full flex flex-col gap-2 lg:flex-row lg:justify-between lg:px-20">
                  <div className="flex r   text-xs">
                    © 2024. Made with passion by Shaik Afrid.
                  </div>
                  <div className="flex r   text-xs ">All right reserved</div>
                </div>
              </Animate>
            </div>
          </div>
        )}
        <Animate delay={150}>
          <div onClick={handleMenuClick} className="lg:hidden cursor-pointer">
            <IoReorderTwoSharp className="w-14 bg-zinc-700/10 p-3 rounded-full h-14  text-foreground " />
          </div>
        </Animate>
        <Animate delay={150}>
          {" "}
          <div className="cursor-pointer  ml-[2vw]  flex items-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="h-14 w-14 text-[#02ffff]"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            >
              <polygon
                points="50,5 90,28 90,72 50,95 10,72 10,28"
                strokeLinejoin="round"
              />
              <text
                x="50"
                y="53"
                textAnchor="middle"
                fontSize="40"
                fontFamily="Arial, sans-serif"
                fill="currentColor"
                stroke="none"
                dominantBaseline="middle"
              >
                A
              </text>
            </svg>
          </div>
        </Animate>
      </div>
      <Animate delay={300}>
        <div className="lg:flex items-center hover:text-foreground/40 text-gray-300 hidden gap-12 text-xs ml-[15vw] -mt-4 mr-10">
          <div className="relative cursor-pointer  hover:text-primary ">
            <div className="flex items-center gap-2" onClick={handleHomeClick}>
              //{" "}
              <span className="lg:hover:border-b lg:border-primary">Home</span>
            </div>
            <a className=" absolute -top-3 font-thin -right-2 text-[#02ffff] text-xs ">
              01
            </a>
          </div>
          <div
            onClick={() => {
              handleScrollViewClick("EXPERTISE");
            }}
            className="relative cursor-pointer   hover:text-primary "
          >
            <div className="flex items-center gap-2">
              //{" "}
              <span className="lg:hover:border-b lg:border-primary">
                Expertise
              </span>
            </div>
            <a className=" absolute -top-3 font-thin -right-2 text-[#02ffff] text-xs ">
              02
            </a>
          </div>
          <div
            onClick={() => {
              handleScrollViewClick("WORK");
            }}
            className="relative cursor-pointer   hover:text-primary "
          >
            <div className="flex items-center gap-2">
              //{" "}
              <span className="lg:hover:border-b lg:border-primary">Work</span>
            </div>
            <a className=" absolute -top-3 font-thin -right-2 text-[#02ffff] text-xs ">
              03
            </a>
          </div>
          <div
            onClick={() => {
              handleScrollViewClick("EXPERIENCE");
            }}
            className="relative cursor-pointer   hover:text-primary "
          >
            <div className="flex items-center gap-2">
              //{" "}
              <span className="lg:hover:border-b lg:border-primary">
                Experience
              </span>
            </div>
            <a className=" absolute -top-3 font-thin -right-2 text-[#02ffff] text-xs ">
              04
            </a>
          </div>

          <div
            onClick={() => {
              handleScrollViewClick("CONTACT");
            }}
            className="relative cursor-pointer   hover:text-primary "
          >
            <div className="flex items-center gap-2">
              //{" "}
              <span className="lg:hover:border-b lg:border-primary">
                Conatct
              </span>
            </div>
            <a className=" absolute -top-3 font-thin -right-2 text-[#02ffff] text-xs ">
              05
            </a>
          </div>
        </div>
      </Animate>
    </div>
  );
}

export default NavBar;
