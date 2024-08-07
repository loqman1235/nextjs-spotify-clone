import Sidebar from "@/components/Sidebar";

const Home = () => {
  return (
    <div className="w-full h-screen p-2 flex">
      <Sidebar />
      {/* resizer */}
      <div className=" h-full cursor-grab px-1 py-4 flex items-center justify-center group/resizer">
        <div className="w-px h-full bg-white/35 group-active/resizer:bg-white/70 rounded-full opacity-0 group-hover/resizer:opacity-100 transition duration-300"></div>
      </div>
      <div className="flex-grow bg-foreground rounded-md">Main Area</div>
    </div>
  );
};

export default Home;
