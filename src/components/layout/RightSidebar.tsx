import React from "react";
import { Card, CardContent } from "@/components/ui/card";
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
    <div className="w-[280px] h-[calc(100vh-56px)] fixed right-0 top-14">
      <ScrollArea className="h-full py-4 px-2">
        {/* Sponsored Content */}
        <div className="mb-6">
          <h3 className="px-3 text-sm font-semibold text-gray-500 mb-2">
            SPONSORED
          </h3>
          <div className="space-y-4">
            {sponsoredContent.map((content) => (
              <a
                key={content.id}
                href={content.link}
                className="block hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Card className="border-none shadow-none">
                  <CardContent className="p-3 flex items-center gap-3">
                    <img
                      src={content.imageUrl}
                      alt={content.title}
                      className="w-[100px] h-[100px] object-cover rounded-lg"
                    />
                    <h4 className="font-medium text-sm">{content.title}</h4>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="px-3 text-xs text-gray-500">
          <div className="flex flex-wrap gap-2">
            <a href="#" className="hover:underline">
              Privacy
            </a>{" "}
            ·
            <a href="#" className="hover:underline">
              Terms
            </a>{" "}
            ·
            <a href="#" className="hover:underline">
              Advertising
            </a>{" "}
            ·
            <a href="#" className="hover:underline">
              Cookies
            </a>{" "}
            ·
            <a href="#" className="hover:underline">
              More
            </a>
          </div>
          <div className="mt-2">© 2024 ChefBook</div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default RightSidebar;
