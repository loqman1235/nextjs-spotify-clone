"use client";

import { MainContentArea } from "@/components/MainContentArea";
import Player from "@/components/Player";
import Sidebar from "@/components/Sidebar";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const resizerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);
  const [sidebarWidth, setSidebarWidth] = useState(314);
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  const handleStartResizing = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!resizerRef.current) return;
    isResizing.current = true;

    resizerRef.current.style.cursor = "grabbing";
    document.body.style.cursor = "grabbing";
  };

  useEffect(() => {
    const handleResizing = (e: MouseEvent) => {
      if (!isResizing.current || !resizerRef.current || !sidebarRef.current)
        return;
      console.log("resizing start");

      resizerRef.current.style.cursor = "grabbing";
      resizerRef.current.firstElementChild?.classList.add("opacity-100");
      document.body.style.cursor = "grabbing";

      let newWidth = e.clientX;

      if (newWidth > 823) newWidth = 823;
      if (newWidth < 256) newWidth = 72;

      setSidebarWidth(newWidth);
    };

    const handleResizeStop = (e: MouseEvent) => {
      if (!resizerRef.current) return;
      if (isResizing.current) {
        isResizing.current = false;
      }

      resizerRef.current.style.cursor = "grab";
      resizerRef.current.firstElementChild?.classList.remove("opacity-100");
      document.body.style.cursor = "default";
    };

    document.addEventListener("mousemove", handleResizing);
    document.addEventListener("mouseup", handleResizeStop);

    return () => {
      document.removeEventListener("mousemove", handleResizing);
      document.removeEventListener("mouseup", handleResizeStop);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarWidth(72);
        setIsMobileScreen(true);
      } else {
        setSidebarWidth(314); // Default or previously set width for larger screens
        setIsMobileScreen(false);
      }
    };

    // Initial check when the component mounts
    handleResize();

    // Add event listener to update on window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="w-full h-[calc(100vh-var(--player-height))] p-2 flex gap-2 md:gap-0">
        <Sidebar ref={sidebarRef} sidebarWidth={sidebarWidth} />
        {/* resizer */}
        <div
          onMouseDown={handleStartResizing}
          ref={resizerRef}
          className="hidden md:flex h-full cursor-grab px-1 py-4  items-center justify-center group/resizer"
        >
          <div className="w-px h-full bg-white/35 group-active/resizer:bg-white/70 rounded-full opacity-0 group-hover/resizer:opacity-100 transition duration-300"></div>
        </div>
        <MainContentArea />
      </div>
      <Player />
    </div>
  );
};

export default Home;
