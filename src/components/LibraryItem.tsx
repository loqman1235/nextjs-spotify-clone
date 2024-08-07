import Image from "next/image";
import Link from "next/link";

type LibraryItemProps = {
  type: "album" | "artist" | "playlist";
  thumbnail: string;
  name: string;
};

const LibraryItem = ({
  type = "playlist",
  thumbnail,
  name,
}: LibraryItemProps) => {
  return (
    <Link
      href="/"
      className="flex items-center gap-4 px-2.5 py-2 rounded-md hover:bg-foreground-light transition duration-300 hover:shadow-md"
    >
      {/* COVER | ICON | AVATAR */}
      <div className="w-12 h-12 rounded-md overflow-hidden bg-foreground-lighter">
        <Image
          src={thumbnail}
          alt={name}
          width={48}
          height={48}
          objectFit="cover"
        />
      </div>
      <div>
        <h4 className="capitalize text-[15px]">{name}</h4>
        <p className="text-sm text-secondary-text capitalize">{type}</p>
      </div>
    </Link>
  );
};

export default LibraryItem;
