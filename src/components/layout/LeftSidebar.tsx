import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Home,
  User,
  BookmarkIcon,
  Users,
  ChefHat,
  Utensils,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

interface ChefRecommendation {
  id: string;
  name: string;
  avatar: string;
  specialty: string;
}

interface LeftSidebarProps {
  activeItem?: string;
  navItems?: NavItem[];
  recommendedChefs?: ChefRecommendation[];
}

const LeftSidebar = ({
  activeItem = "home",
  recommendedChefs = [
    {
      id: "1",
      name: "Chef Gordon",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gordon",
      specialty: "French Cuisine",
    },
    {
      id: "2",
      name: "Chef Julia",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julia",
      specialty: "Italian Cuisine",
    },
    {
      id: "3",
      name: "Chef Ming",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ming",
      specialty: "Asian Fusion",
    },
  ],
}: LeftSidebarProps) => {
  const navigate = useNavigate();

  return (
    <div className="w-[280px] h-[calc(100vh-56px)] fixed left-0 top-14">
      <ScrollArea className="h-full py-4 px-2">
        <div className="space-y-1">
          {/* User Profile Shortcut */}
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 p-3 h-auto fb-hover"
            onClick={() => navigate("/profile")}
          >
            <Avatar className="h-9 w-9">
              <AvatarImage
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                alt="John Doe"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="font-medium">John Doe</span>
          </Button>

          {/* Main Navigation */}
          <Button
            variant={activeItem === "home" ? "secondary" : "ghost"}
            className="w-full justify-start gap-3 p-3 h-auto fb-hover"
            onClick={() => navigate("/")}
          >
            <Home className="h-6 w-6" />
            <span className="font-medium">Home</span>
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 p-3 h-auto fb-hover"
            onClick={() => navigate("/recipes")}
          >
            <Utensils className="h-6 w-6" />
            <span className="font-medium">My Recipes</span>
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 p-3 h-auto fb-hover"
            onClick={() => navigate("/saved")}
          >
            <BookmarkIcon className="h-6 w-6" />
            <span className="font-medium">Saved</span>
          </Button>

          <Button
            variant="ghost"
            className="w-full justify-start gap-3 p-3 h-auto fb-hover"
            onClick={() => navigate("/following")}
          >
            <Users className="h-6 w-6" />
            <span className="font-medium">Following</span>
          </Button>

          {/* Recommended Chefs */}
          <div className="mt-6 pt-6 border-t">
            <h3 className="px-3 text-sm font-semibold text-gray-500 mb-2">
              RECOMMENDED CHEFS
            </h3>
            {recommendedChefs.map((chef) => (
              <Button
                key={chef.id}
                variant="ghost"
                className="w-full justify-start gap-3 p-3 h-auto fb-hover"
                onClick={() => navigate(`/chef/${chef.id}`)}
              >
                <Avatar className="h-9 w-9">
                  <AvatarImage src={chef.avatar} alt={chef.name} />
                  <AvatarFallback>{chef.name[0]}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="font-medium">{chef.name}</span>
                  <span className="text-sm text-gray-500">
                    {chef.specialty}
                  </span>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default LeftSidebar;
