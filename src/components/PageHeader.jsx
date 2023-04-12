import React from "react";

function PageHeader({ title }) {
  return (
    <div className="flex items-center justify-center w-full h-52 bg-purple-50 mb-16 bg-[url('https://i.ibb.co/pvwGXwB/Vector.png')] bg-no-repeat bg-[length:150px] md:bg-[length:250px] bg-left-bottom">
      <h2 className="text-2xl md:text-4xl  font-extrabold text-gray-900">
        {title}
      </h2>
    </div>
  );
}

export default PageHeader;
