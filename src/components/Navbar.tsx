
import { Book, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container flex justify-between items-center h-16 px-4 sm:px-6">
        <div className="flex items-center space-x-2">
          <Book className="h-6 w-6 text-theme-400" />
          <span className="font-bold text-lg text-theme-500">
            {isMobile ? "SM & MH" : "Social Media & Mental Health"}
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#introduction" className="text-gray-600 hover:text-theme-400 transition-colors">
            Introduction
          </a>
          <a href="#positive-effects" className="text-gray-600 hover:text-theme-400 transition-colors">
            Positive Effects
          </a>
          <a href="#negative-effects" className="text-gray-600 hover:text-theme-400 transition-colors">
            Negative Effects
          </a>
          <a href="#recommendations" className="text-gray-600 hover:text-theme-400 transition-colors">
            Recommendations
          </a>
        </div>
        
        <Button variant="outline" className="hidden sm:flex items-center gap-2 border-theme-300 text-theme-500 hover:bg-theme-100">
          <MessageCircle className="h-4 w-4" />
          <span>Resources</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
