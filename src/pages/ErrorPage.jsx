import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-purple-500 w-full px-16 md:px-0 h-screen flex items-center justify-center">
      <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
        <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">
          404
        </p>
        <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">
          Page Not Found
        </p>
        <p className="text-gray-500 mt-4 pb-4 border-b-2 text-center">
          Sorry, the page you are looking for could not be found.
        </p>
        <Link to="/">
          {" "}
          <button className="btn-primary my-2">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
