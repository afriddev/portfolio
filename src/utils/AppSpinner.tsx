function AppSpinner() {
  return (
    <div className="w-screen h-screen fixed z-[9999] inset-0 bg-black flex items-center justify-center backdrop-blur-md">
      <img src={`animation.svg?${Date.now()}`}
 alt="Logo" className="h-[30vh] w-[30vw]" />
    </div>
  );
}

export default AppSpinner;
