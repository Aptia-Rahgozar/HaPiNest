export const Backdrop = ({ isDrawerOpen, setIsDrawerOpen }) => {
  return (
    <div
      className={`fixed inset-0 left-0 bg-black z-40 md:hidden
      transition-opacity duration-500 ease-in-out
      ${isDrawerOpen ? "opacity-70" : "opacity-0 pointer-events-none"}`}
      onClick={() => setIsDrawerOpen(false)}
    />
  );
};
