import { playlists } from "@/data/data";
import FeaturedItem from "./FeaturedItem";
import Navbar from "./Navbar";

const MainContentArea = () => {
  return (
    <div className="flex-grow bg-foreground rounded-md select-none overflow-hidden">
      <div className="w-full bg-gradient-to-b from-foreground-light to-foreground pb-20">
        {/* NAVBAR */}
        <Navbar />
        {/* FEATURED CONTENT */}
        <div className="w-full px-5 flex gap-2 flex-wrap">
          {playlists.map((playlist) => (
            <FeaturedItem
              key={playlist.id}
              title={playlist.title}
              thumbnail={playlist.thumbnail}
            />
          ))}
        </div>
      </div>
      {/* FILTER */}
      {/* RECOMMENDATIONS */}
    </div>
  );
};

export default MainContentArea;
