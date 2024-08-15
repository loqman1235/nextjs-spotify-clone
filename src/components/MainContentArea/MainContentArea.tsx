import { playlists, recentlyPlayed } from "@/data/data";
import FeaturedItem from "./FeaturedItem";
import { Collection } from "../Collection";

const MainContentArea = () => {
  return (
    <>
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
    </>
  );
};

export default MainContentArea;
