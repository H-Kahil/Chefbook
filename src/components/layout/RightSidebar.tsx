import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SponsoredContent {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

interface RightSidebarProps {
  sponsoredContent?: SponsoredContent[];
}

const RightSidebar = ({
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
    {
      id: "3",
      title: "Organic Ingredients",
      imageUrl: "https://images.unsplash.com/photo-1466637574441-749b8f19452f",
      link: "#",
    },
  ],
}: RightSidebarProps) => {
  return (
    <div className="w-[280px] h-full bg-white p-4 border-l">
      {/* Sponsored Content Section */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Sponsored</h2>
        <ScrollArea className="h-[800px]">
          <div className="space-y-4 pr-4">
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
        </ScrollArea>
      </div>
    </div>
  );
};

export default RightSidebar;
