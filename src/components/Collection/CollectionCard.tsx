import Image from "next/image";
import Link from "next/link";
import { MdPlayArrow } from "react-icons/md";

export type CollectionCardProps = {
  id?: number;
  thumbnail: string;
  title: string;
  artistName: string;
};

const CollectionCard = ({
  thumbnail,
  title,
  artistName,
}: CollectionCardProps) => {
  return (
    <Link
      href="/"
      className="w-full h-[280px] p-2.5 flex flex-col gap-2 rounded-md overflow-hidden hover:bg-foreground-light transition duration-300 group/collectionCard"
    >
      {/* THUMBNAIL */}
      <div className="w-full aspect-square rounded-md overflow-hidden relative">
        <Image src={thumbnail} alt="album" fill className="object-cover" />
        <button className="absolute bottom-2 right-2 bg-accent text-black p-1 rounded-full items-center justify-center text-4xl shadow-md  transition duration-300 group-hover/ group-hover/collectionCard:translate-y-0 translate-y-2 opacity-0 group-hover/collectionCard:opacity-100">
          <MdPlayArrow />
        </button>
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-secondary-text">{artistName}</p>
      </div>
    </Link>
  );
};

export default CollectionCard;
