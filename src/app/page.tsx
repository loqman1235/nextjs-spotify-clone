import Sidebar from "@/components/Sidebar";

const Home = () => {
  return (
    <div className="w-full h-screen p-2 flex gap-2">
      <Sidebar />
      <div className="flex-grow">Main Area</div>
    </div>
  );
};

export default Home;
