import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, User, BookmarkIcon, Users } from "lucide-react";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

interface LeftSidebarProps {
  activeItem?: string;
  navItems?: NavItem[];
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
}: LeftSidebarProps) => {
  return (
    <div className="w-[280px] h-[918px] border-r bg-white p-4 fixed left-0 top-16">
      <ScrollArea className="h-full">
        <nav className="space-y-2">
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
      </ScrollArea>
    </div>
  );
};

export default LeftSidebar;
