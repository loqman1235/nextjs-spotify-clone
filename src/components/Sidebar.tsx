"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, LibraryIcon, SearchIcon } from "@/components/icons";
import { GoArrowRight, GoPlus } from "react-icons/go";

const links = [
  { text: "home", href: "/", icon: HomeIcon },
  {
    text: "search",
    href: "/search",
    icon: SearchIcon,
  },
] as const;

const Sidebar = () => {
  const currentPath = usePathname();

  return (
    <div className="w-[314px] h-full flex flex-col gap-2">
      {/* SIDEBAR TOP */}
      <div className="bg-foreground p-3 rounded-lg">
        <ul>
          {links.map((link) => (
            <li key={link.text} className="p-3">
              <Link
                href={link.href}
                className={`flex items-center gap-5 hover:text-primary-text hover:fill-primary-text  transition duration-300 ${
                  currentPath === link.href
                    ? "text-primary-text fill-primary-text"
                    : "text-secondary-text fill-secondary-text"
                }`}
              >
                <span className={`text-3xl`}>
                  <link.icon width={24} height={24} />
                </span>
                <span className="capitalize text-[15px] font-semibold tracking-tight">
                  {link.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* SIDEBAR BOTTOM */}
      <div className="bg-foreground flex-1 rounded-md">
        {/* HEADER */}
        <div className="w-full py-3">
          {/* HEADER TOP */}
          <div className="flex items-stretch justify-between px-4 pb-5">
            <button className="flex items-center gap-3 text-secondary-text hover:text-primary-text transition duration-300 pl-2">
              <LibraryIcon width={24} height={24} />
              <span className="capitalize text-[15px] font-semibold tracking-tight">
                your library
              </span>
            </button>

            <div className="flex items-center gap-2">
              <button className="text-secondary-text hover:bg-foreground-light flex items-center justify-center p-1 rounded-full hover:text-primary-text transition duration-300">
                <GoPlus size={24} />
              </button>
              <button className="text-secondary-text hover:bg-foreground-light flex items-center justify-center p-1 rounded-full hover:text-primary-text transition duration-300">
                <GoArrowRight size={24} />
              </button>
            </div>
          </div>
          <nav className="flex items-center gap-2 px-3">
            <button className="px-3 py-1.5 shadow-md rounded-full bg-foreground-lighter flex items-center justify-center text-[13px] font-medium">
              Playlists
            </button>
            <button className="px-3 py-1.5 shadow-md rounded-full bg-foreground-lighter flex items-center justify-center text-[13px] font-medium">
              Artists
            </button>
            <button className="px-3 py-1.5 shadow-md rounded-full bg-foreground-lighter flex items-center justify-center text-[13px] font-medium">
              Albums
            </button>
          </nav>
        </div>
        {/* PLAYLISTS */}
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
