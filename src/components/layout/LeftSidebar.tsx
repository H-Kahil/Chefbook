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
  bio?: string;
  location?: string;
  experience?: string;
  followers?: number;
  recipes?: Array<{
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    likes: number;
    comments: number;
  }>;
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
      bio: "Award-winning chef with 20 years of experience in French cuisine. Known for innovative takes on classic dishes.",
      location: "Paris, France",
      experience: "20 years",
      followers: 15600,
      recipes: [
        {
          id: "1",
          title: "Coq au Vin",
          description:
            "Classic French chicken braised in wine with mushrooms and pearl onions. Served with creamy mashed potatoes.",
          imageUrl:
            "https://images.unsplash.com/photo-1600891964092-4316c288032e",
          likes: 156,
          comments: 28,
        },
        {
          id: "2",
          title: "Beef Bourguignon",
          description:
            "Traditional French beef stew with red wine, bacon lardons, and root vegetables. Perfect comfort food.",
          imageUrl:
            "https://images.unsplash.com/photo-1534939561126-855b8675edd7",
          likes: 142,
          comments: 32,
        },
        {
          id: "3",
          title: "Ratatouille",
          description:
            "Provençal vegetable stew featuring layered eggplant, zucchini, tomatoes, and bell peppers.",
          imageUrl:
            "https://images.unsplash.com/photo-1572453800999-e8b6b369e404",
          likes: 198,
          comments: 45,
        },
        {
          id: "4",
          title: "Crème Brûlée",
          description:
            "Rich vanilla custard topped with a layer of caramelized sugar. A timeless French dessert.",
          imageUrl:
            "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3",
          likes: 221,
          comments: 37,
        },
        {
          id: "5",
          title: "Soufflé au Fromage",
          description:
            "Light and airy cheese soufflé made with Gruyère. Served straight from the oven.",
          imageUrl:
            "https://images.unsplash.com/photo-1621994153189-6223b41f7912",
          likes: 167,
          comments: 29,
        },
      ],
    },
    {
      id: "2",
      name: "Chef Julia",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Julia",
      specialty: "Italian Cuisine",
      bio: "Passionate Italian chef with a focus on traditional pasta making and regional specialties from across Italy.",
      location: "Rome, Italy",
      experience: "15 years",
      followers: 12400,
      recipes: [
        {
          id: "1",
          title: "Homemade Pasta",
          description:
            "Fresh pasta made from scratch with premium Italian flour and farm-fresh eggs.",
          imageUrl:
            "https://images.unsplash.com/photo-1587740908075-9e245070dfaa",
          likes: 245,
          comments: 42,
        },
        {
          id: "2",
          title: "Osso Buco",
          description:
            "Tender veal shanks braised with vegetables, white wine, and broth. Served with gremolata.",
          imageUrl: "https://images.unsplash.com/photo-1545489379-a8562a247e4a",
          likes: 189,
          comments: 35,
        },
        {
          id: "3",
          title: "Risotto al Tartufo",
          description:
            "Creamy risotto with black truffle, Parmigiano-Reggiano, and premium Carnaroli rice.",
          imageUrl:
            "https://images.unsplash.com/photo-1633964913295-ceb43826a06f",
          likes: 276,
          comments: 48,
        },
        {
          id: "4",
          title: "Tiramisu",
          description:
            "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
          imageUrl:
            "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
          likes: 312,
          comments: 56,
        },
        {
          id: "5",
          title: "Ribollita",
          description:
            "Hearty Tuscan soup with bread, beans, and vegetables. Perfect winter comfort food.",
          imageUrl:
            "https://images.unsplash.com/photo-1604909052743-94e838986d24",
          likes: 167,
          comments: 29,
        },
      ],
    },
    {
      id: "3",
      name: "Chef Ming",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ming",
      specialty: "Asian Fusion",
      bio: "Innovative chef blending traditional Asian techniques with modern culinary trends. Specializes in unique flavor combinations.",
      location: "Singapore",
      experience: "12 years",
      followers: 9800,
      recipes: [
        {
          id: "1",
          title: "Fusion Ramen",
          description:
            "Modern take on ramen with truffle oil, sous-vide chashu, and house-made noodles.",
          imageUrl:
            "https://images.unsplash.com/photo-1569718212165-3a8278d5f624",
          likes: 287,
          comments: 45,
        },
        {
          id: "2",
          title: "Korean Tacos",
          description:
            "Bulgogi beef tacos with kimchi slaw and gochujang aioli on homemade tortillas.",
          imageUrl: "https://images.unsplash.com/photo-1562059390-a761a084768e",
          likes: 234,
          comments: 38,
        },
        {
          id: "3",
          title: "Miso Glazed Salmon",
          description:
            "Norwegian salmon with sweet miso glaze, served with wasabi mashed potatoes.",
          imageUrl:
            "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
          likes: 198,
          comments: 32,
        },
        {
          id: "4",
          title: "Matcha Tiramisu",
          description:
            "Japanese-Italian fusion dessert with matcha green tea and mascarpone cream.",
          imageUrl:
            "https://images.unsplash.com/photo-1515037893149-de7f840978e2",
          likes: 245,
          comments: 41,
        },
        {
          id: "5",
          title: "Wasabi Steak",
          description:
            "Premium wagyu beef with wasabi butter and Asian-inspired chimichurri.",
          imageUrl:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
          likes: 312,
          comments: 52,
        },
      ],
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
