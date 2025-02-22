import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import RecipeCard from "../feed/RecipeCard";

interface ChefProfileProps {
  id?: string;
  name?: string;
  avatar?: string;
  specialty?: string;
  bio?: string;
  recipes?: Array<{
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    likes: number;
    comments: number;
  }>;
}

const ChefProfile = ({
  name = "Chef Gordon",
  avatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Gordon",
  specialty = "French Cuisine",
  bio = "Award-winning chef with 20 years of experience in French cuisine.",
  recipes = defaultRecipes,
}: ChefProfileProps) => {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-start gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">{name}</h1>
              <p className="text-orange-600 font-medium">{specialty}</p>
              <p className="mt-2 text-gray-600">{bio}</p>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Recent Recipes</h2>
        <div className="grid gap-6">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              title={recipe.title}
              description={recipe.description}
              imageUrl={recipe.imageUrl}
              chefName={name}
              chefAvatar={avatar}
              likes={recipe.likes}
              comments={recipe.comments}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const defaultRecipes = [
  {
    id: "1",
    title: "Coq au Vin",
    description:
      "Classic French chicken braised in wine with mushrooms and pearl onions.",
    imageUrl: "https://images.unsplash.com/photo-1600891964092-4316c288032e",
    likes: 156,
    comments: 28,
  },
  {
    id: "2",
    title: "Beef Bourguignon",
    description:
      "Traditional French beef stew with red wine, bacon, and vegetables.",
    imageUrl: "https://images.unsplash.com/photo-1534939561126-855b8675edd7",
    likes: 142,
    comments: 32,
  },
  // Add more recipes as needed
];

export default ChefProfile;
