
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import HNLayout from "@/components/HNLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <HNLayout>
      <div className="flex flex-col items-center justify-center py-16">
        <h1 className="text-6xl font-bold text-hn-orange mb-4">404</h1>
        <p className="text-xl text-hn-title mb-8">Page not found</p>
        <p className="text-hn-subtext mb-8 max-w-md text-center">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-hn-orange text-white rounded-md hover:bg-opacity-90 transition-all"
        >
          Return to Home
        </Link>
      </div>
    </HNLayout>
  );
};

export default NotFound;
