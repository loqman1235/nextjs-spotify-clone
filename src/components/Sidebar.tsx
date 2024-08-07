"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, SearchIcon } from "@/components/icons";

const links = [
  { text: "Home", href: "/", icon: HomeIcon },
  {
    text: "Search",
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
                <span className="text-[15px] font-semibold tracking-tight">
                  {link.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* SIDEBAR BOTTOM */}
      <div className="bg-foreground flex-1 rounded-md">Sidebar Bottom</div>
    </div>
  );
};

export default Sidebar;
