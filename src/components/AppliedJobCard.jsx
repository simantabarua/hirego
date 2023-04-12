import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

function AppliedJobCard({ job }) {
  const { id, company, logo, title, location, jobLocation, salary } = job;

  return (
    <div className="flex flex-col md:flex-row items-center p-5 rounded-lg shadow-lg m-5">
      
      <img className="w-64 h-full object-contain" src={logo} />
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
        <div className="flex flex-col gap-2">
          <p className="flex gap-1 items-center">
            <MapPinIcon className="w-5 h-5" /> {location}
          </p>
          <p className="flex gap-1 items-center">
            <CurrencyDollarIcon className="w-5 h-5" /> Salary: {salary}
          </p>
        </div>
      </div>
      <Link to={`/jobdetails/${id}`}>
        <button className="btn-primary">View Details</button>
      </Link>
    </div>
  );
}

export default AppliedJobCard;
