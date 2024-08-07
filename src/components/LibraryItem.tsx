import Link from "next/link";

type LibraryItemProps = {
  type: "album" | "artist" | "playlist";
  icon?: React.ReactNode;
  thumbnail?: string;
  name: string;
};

const LibraryItem = ({
  type = "playlist",
  icon,
  thumbnail,
  name,
}: LibraryItemProps) => {
  return (
    <Link href="/" className="flex items-center gap-4 px-2.5 py-2">
      {/* COVER | ICON | AVATAR */}
      <div className="w-12 h-12 rounded-md overflow-hidden bg-foreground-light"></div>
      <div>
        <h4 className="tracking-tight capitalize text-[15px]">{name}</h4>
        <p className="text-sm text-secondary-text">Playlist</p>
      </div>
    </Link>
  );
};

export default LibraryItem;
