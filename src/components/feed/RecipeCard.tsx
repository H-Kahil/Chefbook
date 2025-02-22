import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface RecipeCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  chefName?: string;
  chefAvatar?: string;
  likes?: number;
  comments?: number;
  timePosted?: string;
}

const RecipeCard = ({
  title = "Homemade Pasta Carbonara",
  description = "A classic Italian dish made with eggs, cheese, pancetta, and black pepper. Perfect for a cozy dinner!",
  imageUrl = "https://images.unsplash.com/photo-1612874742237-6526221588e3",
  chefName = "Chef Maria",
  chefAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
  likes = 128,
  comments = 24,
  timePosted = "2 hours ago",
}: RecipeCardProps) => {
  return (
    <Card className="fb-card">
      <CardHeader className="space-y-4 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="cursor-pointer hover:opacity-90">
              <AvatarImage src={chefAvatar} alt={chefName} />
              <AvatarFallback>{chefName[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold hover:underline cursor-pointer">
                {chefName}
              </h3>
              <p className="text-sm text-gray-500">{timePosted}</p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Save Recipe</DropdownMenuItem>
              <DropdownMenuItem>Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-0 space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="aspect-video relative overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full hover:opacity-95 transition-opacity cursor-pointer"
          />
        </div>
      </CardContent>

      <CardFooter className="p-4 border-t space-y-4">
        <div className="flex items-center justify-between w-full text-sm text-gray-500 pb-3">
          <span>{likes.toLocaleString()} likes</span>
          <span>{comments.toLocaleString()} comments</span>
        </div>
        <div className="flex justify-between w-full border-t pt-3">
          <Button
            variant="ghost"
            className="flex-1 flex items-center gap-2 fb-hover"
          >
            <Heart className="w-5 h-5" />
            <span>Like</span>
          </Button>
          <Button
            variant="ghost"
            className="flex-1 flex items-center gap-2 fb-hover"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Comment</span>
          </Button>
          <Button
            variant="ghost"
            className="flex-1 flex items-center gap-2 fb-hover"
          >
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
