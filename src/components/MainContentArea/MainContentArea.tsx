import Navbar from "./Navbar";

const MainContentArea = () => {
  return (
    <div className="flex-grow bg-foreground rounded-md select-none overflow-hidden">
      <div className="w-full bg-gradient-to-b from-foreground-light to-foreground pb-20">
        {/* NAVBAR */}
        <Navbar />
        {/* FEATURED CONTENT */}
      </div>
      {/* FILTER */}
      {/* RECOMMENDATIONS */}
    </div>
  );
};

export default MainContentArea;
