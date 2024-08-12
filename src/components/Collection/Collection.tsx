import Link from "next/link";
import CollectionCard, { CollectionCardProps } from "./CollectionCard";

type CollectionProps = {
  title: string;
  items: CollectionCardProps[];
};

const Collection = ({ title, items }: CollectionProps) => {
  return (
    <div className="w-full py-16">
      {/* HEADER */}
      <div className="flex items-center justify-between px-5 mb-5">
        <h2 className="text-xl font-bold">Recently played</h2>
        <Link
          href="/"
          className="text-secondary-text font-semibold text-sm hover:underline"
        >
          Show all
        </Link>
      </div>
      {/* CARDS */}
      <div
        className="overflow-hidden h-[280px] px-2.5 gap-2"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        }}
      >
        {items.map((item) => (
          <CollectionCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
