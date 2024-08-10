import Image from "next/image";
import { MdPlayArrow } from "react-icons/md";

type FeaturedItemProps = {
  title: string;
  thumbnail: string;
};

const FeaturedItem = ({ title, thumbnail }: FeaturedItemProps) => {
  return (
    <div className="w-full md:w-[calc(50%-0.25rem)] flex gap-3 items-center rounded-md overflow-hidden bg-foreground-lighter hover:bg-foreground-lighter-hover transition duration-300 cursor-pointer shadow-md group/featured">
      {/* THUMBNAIL */}
      <div className="w-12 h-12 bg-gray-700">
        <Image
          src={thumbnail}
          alt="featured"
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center w-[calc(100%-48px)] pr-2 relative">
        <h4 className="capitalize font-semibold text-sm flex-1">{title}</h4>
        <button className="bg-accent text-black p-1 rounded-full items-center justify-center text-2xl shadow-md hidden group-hover/featured:flex absolute right-2">
          <MdPlayArrow />
        </button>
      </div>
    </div>
  );
};

export default FeaturedItem;
