"use client";

import React, { useEffect, useRef, useState } from "react";
import Player from "@/components/Player";
import Sidebar from "@/components/Sidebar";
import {
  OverlayScrollbarsComponent,
  OverlayScrollbarsComponentRef,
} from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";
import Navbar from "@/components/MainContentArea/Navbar";

const ClientLayout = ({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) => {
  const resizerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isResizing = useRef(false);
  const [sidebarWidth, setSidebarWidth] = useState(314);
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const mainContentRef = useRef<OverlayScrollbarsComponentRef<"div"> | null>(
    null
  );
  const headerRef = useRef<HTMLDivElement | null>(null);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const osInstance = mainContentRef.current?.osInstance();

    if (osInstance) {
      const handleScroll = () => {
        const scrollY = osInstance?.elements().viewport.scrollTop;
        if (scrollY > 80) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      osInstance?.elements().viewport.addEventListener("scroll", handleScroll);

      return () => {
        osInstance
          ?.elements()
          .viewport.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleStartResizing = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!resizerRef.current) return;
    isResizing.current = true;

    resizerRef.current.style.cursor = "grabbing";
    document.body.style.cursor = "grabbing";
  };

  const toggleExpandSidebar = () => {
    if (!sidebarRef.current) return;
    if (sidebarWidth === 314) {
      setSidebarWidth(66);
    } else {
      setSidebarWidth(314);
    }
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

  // On mobile screens, set the sidebar width to 72px instead of 314px
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

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-screen">
      <div className="w-full h-[calc(100vh-var(--player-height))] p-2 flex gap-2 md:gap-0">
        <Sidebar
          ref={sidebarRef}
          sidebarWidth={sidebarWidth}
          toggleExpandSidebar={toggleExpandSidebar}
        />
        {/* resizer */}
        <div
          onMouseDown={handleStartResizing}
          ref={resizerRef}
          className="hidden md:flex h-full cursor-grab px-1 py-4  items-center justify-center group/resizer"
        >
          <div className="w-px h-full bg-white/35 group-active/resizer:bg-white/70 rounded-full opacity-0 group-hover/resizer:opacity-100 transition duration-300"></div>
        </div>
        <OverlayScrollbarsComponent
          ref={mainContentRef}
          options={{
            scrollbars: { autoHide: "leave", autoHideDelay: 800 },
          }}
          className="w-[calc(100%-72px)] md:w-auto flex-grow bg-foreground rounded-md select-none over"
        >
          {/* HEADER START */}
          <div
            ref={headerRef}
            className={`z-50 sticky top-0 w-full pb-5 px-5 pt-3 ${
              isScrolled
                ? "bg-foreground"
                : "bg-gradient-to-b from-foreground-lighter to-foreground"
            }`}
          >
            {/* NAVBAR */}
            <Navbar />
            {/* Filters */}
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 flex items-center justify-center bg-white text-black rounded-full text-sm capitalize">
                all
              </button>
              <button className="px-3 py-1.5 flex items-center justify-center bg-foreground-lighter hover:bg-foreground-lighter-hover transition duration-300 text-primary-text rounded-full text-sm capitalize">
                music
              </button>
              <button className="px-3 py-1.5 flex items-center justify-center bg-foreground-lighter hover:bg-foreground-lighter-hover transition duration-300 text-primary-text rounded-full text-sm capitalize">
                podcasts
              </button>
            </div>
          </div>
          {/* HEADER END */}
          {children}
        </OverlayScrollbarsComponent>
      </div>
      <Player />
    </div>
  );
};

export default ClientLayout;
