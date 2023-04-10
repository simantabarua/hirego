import React from "react";

function Blog() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen py-6">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1  gap-6">
          <div className="bg-white overflow-hidden shadow-md rounded-lg">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/800x600"
              alt="Blog Post"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Blog Post Title
              </h2>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-700"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow-md rounded-lg">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/800x600"
              alt="Blog Post"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Blog Post Title
              </h2>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-700"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow-md rounded-lg">
            <img
              className="w-full h-48 object-cover"
              src="https://via.placeholder.com/800x600"
              alt="Blog Post"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Blog Post Title
              </h2>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a
                href="#"
                className="mt-4 inline-block bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-700"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
