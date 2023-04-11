import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";

function JobCard({ job }) {
  const {
    id,
    company,
    logo,
    title,
    location,
    jobLocation,
    jobDescription,
    requirements,
    responsibilities,
    experiences,
    educationRequirements,
    salary,
    postedDate,
    applyLink,
    contactInfo,
  } = job;

  return (
    <div className="card w-full bg-base-100 shadow-xl px-5 h-full py-5 mx-5">
      <figure>
        <img className=" shadow-md w-full h-16 object-contain" src={logo} />
      </figure>
      <div className="card-body gap-4">
        <h2 className="card-title">{title}</h2>
        <p>{company}</p>
        <div className="flex gap-2">
          {jobLocation.map((jobLocationTag, index) => (
            <span
              key={index}
              job-location-data={jobLocationTag}
              className="py-2 px-5 border border-purple-500 rounded-lg"
            >
              {jobLocationTag}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <p className="flex gap-1 items-center">
            <MapPinIcon className="w-5 h-5" /> {location}
          </p>
          <p className="flex gap-1 items-center">
            <CurrencyDollarIcon className="w-5 h-5" /> Salary: {salary}
          </p>
        </div>
        <button className="btn-primary">View Details</button>
      </div>
    </div>
  );
}

export default JobCard;
