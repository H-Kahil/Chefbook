import React from "react";
import Navbar from "./layout/Navbar";
import LeftSidebar from "./layout/LeftSidebar";
import RightSidebar from "./layout/RightSidebar";
import RecipeFeed from "./feed/RecipeFeed";

interface HomeProps {
  activeNavItem?: string;
  onLanguageChange?: () => void;
  onSearch?: (query: string) => void;
}

const Home = ({
  activeNavItem = "home",
  onLanguageChange = () => {},
  onSearch = () => {},
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLanguageChange={onLanguageChange} onSearch={onSearch} />

      <div className="pt-16 flex">
        {/* Left Sidebar */}
        <LeftSidebar activeItem={activeNavItem} />

        {/* Main Content */}
        <main className="flex-1 ml-[280px] mr-[280px] min-h-[918px]">
          <RecipeFeed />
        </main>

        {/* Right Sidebar */}
        <div className="fixed right-0 top-16">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
