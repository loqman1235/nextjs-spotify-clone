import Image from "next/image";
import Link from "next/link";

type LibraryItemProps = {
  type: "album" | "artist" | "playlist";
  thumbnail: string;
  name: string;
  isCollapsed: boolean;
};

const LibraryItem = ({
  type = "playlist",
  thumbnail,
  name,
  isCollapsed,
}: LibraryItemProps) => {
  return (
    <Link
      href="/"
      className={`flex items-center gap-4 px-2.5 py-2 rounded-md hover:bg-foreground-light transition duration-300 hover:shadow-md ${
        isCollapsed ? "!p-2" : "px-2.5 py-2"
      }`}
    >
      {/* COVER | ICON | AVATAR */}
      <div
        className={`flex items-center h-12 rounded-md overflow-hidden bg-foreground-lighter ${
          isCollapsed ? "w-full" : "w-12"
        }`}
      >
        <Image
          src={thumbnail}
          alt={name}
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </div>
      <div className={`${isCollapsed ? "hidden" : "block"}`}>
        <h4 className="capitalize text-[15px]">{name}</h4>
        <p className="text-sm text-secondary-text capitalize">{type}</p>
      </div>
    </Link>
  );
};

export default LibraryItem;
