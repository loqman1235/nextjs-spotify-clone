import { playlists } from "@/data/data";
import FeaturedItem from "./FeaturedItem";
import Navbar from "./Navbar";

const MainContentArea = () => {
  return (
    <div className="w-[calc(100%-80px)] md:w-auto flex-grow bg-foreground rounded-md select-none overflow-y-auto">
      <div className="sticky top-0 w-full bg-gradient-to-b from-foreground-lighter to-foreground pb-5 px-5 pt-3">
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
      {/* FEATURED CONTENT */}
      <div className="w-full px-5 flex gap-2 flex-wrap pt-5">
        {playlists.map((playlist) => (
          <FeaturedItem
            key={playlist.id}
            title={playlist.title}
            thumbnail={playlist.thumbnail}
          />
        ))}
      </div>
      {/* RECOMMENDATIONS */}
    </div>
  );
};

export default MainContentArea;
