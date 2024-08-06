"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineHome, MdOutlineSearch } from "react-icons/md";

const links = [
  { text: "Home", href: "/", icon: <MdOutlineHome /> },
  { text: "Search", href: "/search", icon: <MdOutlineSearch /> },
] as const;

const Sidebar = () => {
  const currentPath = usePathname();

  console.log(currentPath);

  return (
    <div className="w-[280px] h-full flex flex-col gap-2">
      {/* SIDEBAR TOP */}
      <div className="bg-foreground p-3 rounded-md">
        <ul>
          {links.map((link) => (
            <li key={link.text} className="p-3">
              <Link
                href={link.href}
                className={`flex items-center gap-5 hover:text-primary-text transition duration-300 ${
                  currentPath === link.href
                    ? "text-primary-text"
                    : "text-secondary-text"
                }`}
              >
                <span className="text-2xl">{link.icon}</span>
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
