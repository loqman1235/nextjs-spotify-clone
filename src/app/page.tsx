"use client";

import Sidebar from "@/components/Sidebar";
import { useEffect, useRef } from "react";

const Home = () => {
  const resizerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);

  const handleStartResizing = (e: React.MouseEvent) => {
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
      if (newWidth < 200) newWidth = 72;

      sidebarRef.current.style.width = `${newWidth}px`;
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

  return (
    <div className="w-full h-screen p-2 flex">
      <Sidebar ref={sidebarRef} />
      {/* resizer */}
      <div
        onMouseDown={handleStartResizing}
        ref={resizerRef}
        className="h-full cursor-grab px-1 py-4 flex items-center justify-center group/resizer"
      >
        <div className="w-px h-full bg-white/35 group-active/resizer:bg-white/70 rounded-full opacity-0 group-hover/resizer:opacity-100 transition duration-300"></div>
      </div>
      <div className="flex-grow bg-foreground rounded-md select-none"></div>
    </div>
  );
};

export default Home;
