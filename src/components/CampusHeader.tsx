import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Bell, 
  User, 
  Menu, 
  X,
  Search,
  MapPin,
  Clock
} from "lucide-react";

export const CampusHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b bg-card/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">CampusAI</h1>
              <p className="text-xs text-muted-foreground">Intelligent Campus Assistant</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Events
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Directory
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Help
            </a>
          </nav>

          {/* Status Indicators */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Campus Open</span>
              <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-100">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                Online
              </Badge>
            </div>
            
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Main Campus</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 bg-accent text-accent-foreground text-xs flex items-center justify-center">
                3
              </Badge>
            </Button>
            
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Events
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Directory
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Help
              </a>
              <div className="pt-3 border-t">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Search className="h-4 w-4 mr-2" />
                  Search Campus
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};