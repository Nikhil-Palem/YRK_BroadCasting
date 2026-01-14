import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center px-4">
        <h1 className="mb-4 text-6xl font-bold text-gray-900">404</h1>
        <p className="mb-6 text-xl text-gray-600">
          Oops! Page not found
        </p>
        <Link
          to="/"
          className="inline-block text-indigo-600 underline hover:text-indigo-700 transition"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
