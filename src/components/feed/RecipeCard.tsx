import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";

interface RecipeCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  chefName?: string;
  chefAvatar?: string;
  likes?: number;
  comments?: number;
}

const RecipeCard = ({
  title = "Homemade Pasta Carbonara",
  description = "A classic Italian dish made with eggs, cheese, pancetta, and black pepper. Perfect for a cozy dinner!",
  imageUrl = "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop&q=60",
  chefName = "Chef Maria",
  chefAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
  likes = 128,
  comments = 24,
}: RecipeCardProps) => {
  return (
    <Card className="w-full max-w-[680px] bg-white">
      <CardHeader className="space-y-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={chefAvatar} alt={chefName} />
            <AvatarFallback>{chefName[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{chefName}</h3>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="aspect-video relative overflow-hidden rounded-lg">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex justify-between w-full">
          <Button variant="ghost" className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            <span>{likes}</span>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <span>{comments}</span>
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            <span>Share</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
