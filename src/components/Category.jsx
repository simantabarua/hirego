import React from "react";
import SectionHeader from "./SectionHeader";
const jobCategories = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1570/1570887.png",
    title: "Account & Finance",
    job: "150 Jobs Available",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2451/2451447.png",
    title: "Creative Design",
    job: "200 Jobs Available",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1968/1968641.png",
    title: "Marketing & Sales",
    job: "250 Jobs Available",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4257/4257483.png",
    title: "Engineering Job",
    job: "100 Jobs Available",
  },
];

function Category() {
  return (
    <>
      <SectionHeader
        title="Job List"
        subtitle="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto gap-5 mb-2 px-2">
        {jobCategories.map((jobCategory, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg bg-pink-5 p-2 md:p-6 cursor-pointer hover:scale-105 hover:-translate-y-1 transform transition-all duration-300 ease-in-out"
          >
            <img className="w-10 h-10" src={jobCategory.icon} alt="" />
            <h1 className="text-xl font-bold">{jobCategory.title}</h1>
            <p>{jobCategory.job}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Category;
