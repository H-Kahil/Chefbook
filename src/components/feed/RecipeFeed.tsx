import React from "react";
import RecipeCard from "./RecipeCard";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  chefName: string;
  chefAvatar: string;
  likes: number;
  comments: number;
}

interface RecipeFeedProps {
  recipes?: Recipe[];
}

const RecipeFeed = ({ recipes = defaultRecipes }: RecipeFeedProps) => {
  return (
    <ScrollArea className="h-full w-full bg-gray-50">
      <div className="flex flex-col items-center gap-6 p-6">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            description={recipe.description}
            imageUrl={recipe.imageUrl}
            chefName={recipe.chefName}
            chefAvatar={recipe.chefAvatar}
            likes={recipe.likes}
            comments={recipe.comments}
          />
        ))}
      </div>
    </ScrollArea>
  );
};

const defaultRecipes: Recipe[] = [
  {
    id: "1",
    title: "Classic Italian Pasta Carbonara",
    description:
      "A creamy pasta dish made with eggs, cheese, pancetta, and black pepper. The ultimate comfort food!",
    imageUrl:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=800&auto=format&fit=crop&q=60",
    chefName: "Chef Maria",
    chefAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
    likes: 128,
    comments: 24,
  },
  {
    id: "2",
    title: "Japanese Ramen Bowl",
    description:
      "Rich and flavorful ramen with homemade broth, tender chashu pork, and perfectly cooked noodles.",
    imageUrl:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=60",
    chefName: "Chef Tanaka",
    chefAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tanaka",
    likes: 256,
    comments: 42,
  },
  {
    id: "3",
    title: "Mediterranean Grilled Fish",
    description:
      "Fresh sea bass grilled to perfection with herbs, lemon, and olive oil. Served with roasted vegetables.",
    imageUrl:
      "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?w=800&auto=format&fit=crop&q=60",
    chefName: "Chef Alex",
    chefAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    likes: 189,
    comments: 31,
  },
];

export default RecipeFeed;
