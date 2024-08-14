import { playlists, recentlyPlayed } from "@/data/data";
import FeaturedItem from "./FeaturedItem";
import Navbar from "./Navbar";
import { Collection } from "../Collection";
import {
  OverlayScrollbarsComponent,
  OverlayScrollbarsComponentRef,
} from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";
import { useEffect, useRef, useState } from "react";

const MainContentArea = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const mainContentRef = useRef<OverlayScrollbarsComponentRef<"div"> | null>(
    null
  );
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

  return (
    // <div className="w-[calc(100%-72px)] md:w-auto flex-grow bg-foreground rounded-md select-none overflow-y-auto">
    <OverlayScrollbarsComponent
      ref={mainContentRef}
      options={{ scrollbars: { autoHide: "leave", autoHideDelay: 800 } }}
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

      {/* FEATURED CONTENT */}
      <div
        className="w-full px-5 gap-2 pt-5 pb-16"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {playlists.map((playlist) => (
          <FeaturedItem
            key={playlist.id}
            title={playlist.title}
            thumbnail={playlist.thumbnail}
          />
        ))}
      </div>
      {/* RECOMMENDATIONS */}
      <div className="w-full">
        <Collection items={recentlyPlayed.items} title={recentlyPlayed.title} />
        <Collection items={recentlyPlayed.items} title={recentlyPlayed.title} />
        <Collection items={recentlyPlayed.items} title={recentlyPlayed.title} />
        <Collection items={recentlyPlayed.items} title={recentlyPlayed.title} />
      </div>
    </OverlayScrollbarsComponent>
    // </div>
  );
};

export default MainContentArea;
