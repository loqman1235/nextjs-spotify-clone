import Image from "next/image";
import Link from "next/link";

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
      className="w-full h-[280px] p-2.5 flex flex-col gap-2 rounded-md overflow-hidden hover:bg-foreground-light transition duration-300"
    >
      {/* THUMBNAIL */}
      <div className="w-full aspect-square rounded-md overflow-hidden relative">
        <Image src={thumbnail} alt="album" fill className="object-cover" />
      </div>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-secondary-text">{artistName}</p>
      </div>
    </Link>
  );
};

export default CollectionCard;
