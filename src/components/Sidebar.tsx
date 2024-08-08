import React, { forwardRef, Ref, useImperativeHandle } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, LibraryIcon, SearchIcon } from "@/components/icons";
import {
  GoArrowRight,
  GoHome,
  GoHomeFill,
  GoListUnordered,
  GoPlus,
  GoSearch,
} from "react-icons/go";
import LibraryItem from "./LibraryItem";

const links = [
  { text: "home", href: "/", icon: GoHome, activeIcon: GoHomeFill },
  {
    text: "search",
    href: "/search",
    icon: GoSearch,
    activeIcon: GoSearch,
  },
] as const;

const navBtnStyles =
  "px-3 py-1.5 shadow-md rounded-full bg-foreground-lighter flex items-center justify-center text-[13px] font-medium hover:bg-foreground-lighter-hover transition duration-300 ";

const Sidebar = forwardRef<HTMLDivElement>(
  (props, ref: Ref<HTMLDivElement>) => {
    const currentPath = usePathname();

    return (
      <div
        ref={ref}
        className="w-[314px] h-full flex flex-col gap-2 transition-[width] select-none"
      >
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
                    {currentPath === link.href ? (
                      <link.activeIcon size={24} />
                    ) : (
                      <link.icon size={24} />
                    )}
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
            <nav className="flex items-center gap-2 px-5">
              <button className={navBtnStyles}>Playlists</button>
              <button className={navBtnStyles}>Artists</button>
              <button className={navBtnStyles}>Albums</button>
            </nav>
          </div>
          {/* LIBRARY */}
          <div className="w-full ">
            {/* HEADER */}
            <div className="flex items-center justify-between px-5 py-2">
              <button className="text-secondary-text hover:bg-foreground-lighter flex items-center justify-center p-1.5 rounded-full hover:text-primary-text transition duration-300">
                <GoSearch size={20} />
              </button>

              {/* FILTER */}
              <button className="flex items-center gap-1 text-sm text-secondary-text hover:text-primary-text hover:scale-105 transition duration-200 pr-1">
                <span>Recent</span>
                <GoListUnordered size={20} />
              </button>
            </div>

            {/* LIBRARY ITEMS */}
            <div className="w-full px-2.5">
              <LibraryItem
                name="liked songs"
                type="playlist"
                thumbnail="/images/liked.png"
              />
              <LibraryItem
                name="your episodes"
                type="playlist"
                thumbnail="/images/episodes.png"
              />
              <LibraryItem
                name="WE DONT TRUST YOU"
                type="album"
                thumbnail="/images/album1.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Sidebar.displayName = "Sidebar"; // Necessary for React.forwardRef

export default Sidebar;
