import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, User, BookmarkIcon, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

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
  navItems = [
    {
      icon: <Home className="w-5 h-5" />,
      label: "Home",
      href: "/",
      active: true,
    },
    { icon: <User className="w-5 h-5" />, label: "Profile", href: "/profile" },
    {
      icon: <BookmarkIcon className="w-5 h-5" />,
      label: "Saved Recipes",
      href: "/saved",
    },
    {
      icon: <Users className="w-5 h-5" />,
      label: "Following",
      href: "/following",
    },
  ],
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
    <div className="w-[280px] h-[918px] border-r bg-white p-4 fixed left-0 top-16">
      <ScrollArea className="h-full pr-4">
        {/* Navigation Menu */}
        <nav className="space-y-2 mb-6">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "secondary" : "ghost"}
              className={`w-full justify-start gap-3 ${item.active ? "bg-secondary" : ""}`}
              asChild
            >
              <a href={item.href}>
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </a>
            </Button>
          ))}
        </nav>

        <Separator className="my-6" />

        {/* Recommended Chefs Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Recommended Chefs</h2>
          {recommendedChefs.map((chef) => (
            <Card key={chef.id} className="bg-gray-50">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <Avatar
                    className="cursor-pointer"
                    onClick={() => navigate(`/chef/${chef.id}`)}
                  >
                    <AvatarImage src={chef.avatar} alt={chef.name} />
                    <AvatarFallback>{chef.name[0]}</AvatarFallback>
                  </Avatar>
                  <div
                    className="flex-1 cursor-pointer"
                    onClick={() => navigate(`/chef/${chef.id}`)}
                  >
                    <h3 className="font-medium">{chef.name}</h3>
                    <p className="text-sm text-gray-500">{chef.specialty}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate(`/chef/${chef.id}`)}
                  >
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default LeftSidebar;
