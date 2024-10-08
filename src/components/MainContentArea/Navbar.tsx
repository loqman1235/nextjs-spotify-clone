import { usePathname } from "next/navigation";
import {
  GoBell,
  GoChevronLeft,
  GoChevronRight,
  GoPerson,
} from "react-icons/go";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between mb-5">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full bg-black/30 text-secondary-text flex items-center justify-center text-lg cursor-not-allowed">
            <GoChevronLeft />
          </button>
          <button className="p-2 rounded-full bg-black/30 text-secondary-text flex items-center justify-center text-lg cursor-not-allowed">
            <GoChevronRight />
          </button>
        </div>
        {/* SEARCH BAR */}
        {pathname === "/search" &&
          // <form>
          //   <div className="relative">
          //     <input
          //       className="p-5 rounded-full bg-foreground-lighter"
          //       type="text"
          //       name=""
          //       id=""
          //       placeholder="What do you want to play?"
          //     />
          //   </div>
          // </form>
          "Search bar"}
      </div>

      <div className="flex items-center gap-2">
        <button className="px-4 py-2 bg-white text-black rounded-full flex items-center justify-center font-semibold text-sm tracking-tight hover:scale-105 transition duration-300">
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
