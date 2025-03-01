
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Newspaper, Home, MessageSquare } from "lucide-react";

const HNHeader = () => {
  return (
    <header className="bg-hn-orange sticky top-0 z-10 backdrop-blur-sm bg-opacity-95">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center">
              <Newspaper className="h-5 w-5 text-white mr-2" />
              <span className="font-semibold text-white hidden sm:inline-block">
                Hacker News Clone
              </span>
              <span className="font-semibold text-white sm:hidden">HN</span>
            </Link>
          </div>
          
          <nav className="flex items-center">
            <NavLink to="/">
              <Home className="h-4 w-4 mr-1" />
              <span>Home</span>
            </NavLink>
            <NavLink to="/new">
              <Newspaper className="h-4 w-4 mr-1" />
              <span>New</span>
            </NavLink>
            <NavLink to="/comments">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>Comments</span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink = ({ to, children }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center px-3 py-1.5 mx-1 text-sm text-white rounded-md",
        "transition-all duration-200 hover:bg-white/10"
      )}
    >
      {children}
    </Link>
  );
};

export default HNHeader;
