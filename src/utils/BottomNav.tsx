function BottomNav() {
  function handleEmailClick() {
    const mailtoUrl =
      "https://mail.google.com/mail/?view=cm&fs=1&to=afridayan01@gmail.com&su=Hey";
    window.open(mailtoUrl, "_blank");
  }

  return (
    <div className="w-full flex flex-col px-4 items-center justify-center mt-[5vh]">
      <div className="flex flex-col gap-10 lg:gap-3 text-center ">
        <h1 className="text-2xl text-gray-300 font-semibold">
          Available for select freelance opportunities
        </h1>
        <p className=" font-semibold text-gray-500 text-xs">
          Have an exciting project you need help with? Send me an email.
        </p>
      </div>
      <div className="mt-[5vh]">
        <div
          onClick={handleEmailClick}
          className="text-xl border-b  border-[#02ffff] cursor-pointer  lg:hover:text-[#02ffff] "
        >
          afridayan01@gmail.com
        </div>
      </div>
      <div className="w-full mt-[9vh] mb-[5vh] flex items-center justify-center">
        <div className="flex items-center text-center justify-center text-foreground/40  text-xs">
          © 2025. Made with passion by Shaik Afrid.
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
