import {
  GoBell,
  GoChevronLeft,
  GoChevronRight,
  GoPerson,
} from "react-icons/go";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-5 pt-2 bg-gradient-to-b from-foreground-light to-foreground">
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-full bg-black/60 flex items-center justify-center text-lg">
          <GoChevronLeft />
        </button>
        <button className="p-2 rounded-full bg-black/60 flex items-center justify-center text-lg">
          <GoChevronRight />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button className="px-4 py-2 bg-white text-black rounded-full flex items-center justify-center font-semibold text-sm hover:scale-105 transition duration-300">
          Explore Premium
        </button>
        <button className="flex items-center justify-center p-2 rounded-full bg-black/60 text-lg text-secondary-text hover:text-primary-text hover:scale-105 transition duration-300">
          <GoBell />
        </button>
        {/* AVATAR */}
        <button className="flex items-center justify-center p-2 rounded-full bg-black/60 text-lg text-secondary-text hover:text-primary-text hover:scale-105 transition duration-300">
          <GoPerson />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
