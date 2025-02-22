import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface ChefRecommendation {
  id: string;
  name: string;
  avatar: string;
  specialty: string;
}

interface SponsoredContent {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

interface RightSidebarProps {
  recommendedChefs?: ChefRecommendation[];
  sponsoredContent?: SponsoredContent[];
}

const RightSidebar = ({
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
  sponsoredContent = [
    {
      id: "1",
      title: "Premium Cookware Set",
      imageUrl: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1",
      link: "#",
    },
    {
      id: "2",
      title: "Culinary Master Class",
      imageUrl: "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf",
      link: "#",
    },
  ],
}: RightSidebarProps) => {
  return (
    <div className="w-[280px] h-full bg-white p-4 border-l space-y-6 overflow-y-auto">
      {/* Recommended Chefs Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Recommended Chefs</h2>
        <div className="space-y-4">
          {recommendedChefs.map((chef) => (
            <Card key={chef.id} className="bg-gray-50">
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={chef.avatar} alt={chef.name} />
                    <AvatarFallback>{chef.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-medium">{chef.name}</h3>
                    <p className="text-sm text-gray-500">{chef.specialty}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Follow
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Sponsored Content Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Sponsored</h2>
        <div className="space-y-4">
          {sponsoredContent.map((content) => (
            <Card key={content.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <img
                  src={content.imageUrl}
                  alt={content.title}
                  className="w-full h-32 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <h3 className="font-medium text-sm">{content.title}</h3>
                <Button
                  variant="link"
                  className="mt-2 p-0 h-auto text-sm"
                  asChild
                >
                  <a href={content.link}>Learn More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
