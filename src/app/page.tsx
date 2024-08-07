import Sidebar from "@/components/Sidebar";

const Home = () => {
  return (
    <div className="w-full h-screen p-2 flex">
      <Sidebar />
      {/* resizer */}
      <div className="w-[1px] h-full cursor-grab px-1"></div>
      <div className="flex-grow bg-foreground rounded-md">Main Area</div>
    </div>
  );
};

export default Home;
