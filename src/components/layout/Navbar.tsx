import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Bell, MessageCircle, Menu, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  userName?: string;
  userAvatar?: string;
  onSearch?: (query: string) => void;
}

const Navbar = ({
  userName = "John Doe",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  onSearch = () => {},
}: NavbarProps) => {
  const navigate = useNavigate();

  return (
    <nav className="w-full h-14 bg-white border-b fixed top-0 left-0 z-50 fb-header">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo and Search */}
        <div className="flex items-center gap-2 flex-1">
          <h1 className="text-2xl font-bold fb-text-primary">ChefBook</h1>
          <div className="max-w-[240px] ml-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search ChefBook"
                className="pl-9 bg-gray-100 border-none"
                onChange={(e) => onSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Center Navigation */}
        <div className="flex-1 flex justify-center gap-1">
          <Button variant="ghost" size="lg" className="h-14 px-8 fb-hover">
            <MessageCircle className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="lg" className="h-14 px-8 fb-hover">
            <Bell className="h-6 w-6" />
          </Button>
        </div>

        {/* User Menu */}
        <div className="flex items-center gap-2 flex-1 justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={userAvatar} alt={userName} />
                  <AvatarFallback>{userName[0]}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{userName}</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
