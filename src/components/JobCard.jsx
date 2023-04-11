import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

function JobCard({ job, handleJobDetails }) {
  const { id, company, logo, title, location, jobLocation, salary } = job;

  return (
    <div className="card w-full bg-gradient-to-r from-blue-50 to-purple-50 shadow-xl p-5 h-full py-5 mx-5 hover:-translate-y-1 transform transition-all duration-300 ease-in-out">
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
        <Link to={`/jobdetails/${id}`}>
          <button className="btn-primary">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default JobCard;
