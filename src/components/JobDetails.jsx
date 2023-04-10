import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import PageHeader from "./PageHeader";

function JobDetails() {
  return (
    <>
      <PageHeader  title="Jobs Details
      " />
      <div className="grid grid-cols-3 md:w-3/4 mx-auto">
        <div className="col-span-2 flex flex-col gap-5 font-semibold p-5">
          <div>
            <h2>Job Description: </h2>
          </div>
          <div>
            <h2>Job Responsibility:</h2>
          </div>
          <div>
            <h2>Educational Requirements:</h2>
          </div>
          <div>
            <h2>Experiences</h2>
          </div>
        </div>
        <div className="bg-purple-50 flex flex-col gap-2 font-medium p-5">
          <h2 className="text-xl">Job Details</h2>
          <hr className="bg-purple-300 h-[1px]" />
          <p className="flex gap-1">
            <CurrencyDollarIcon className="w-5 h-5" /> Salary:
          </p>
          <p className="flex gap-1">
            <CalendarIcon className="w-5 h-5" /> Job Title:
          </p>
          <h2 lassName="text-xl">Contact Information</h2>
          <hr />
          <p className="flex gap-1">
            <PhoneIcon className="w-5 h-5" /> Phone:
          </p>
          <p className="flex gap-1">
            <EnvelopeIcon className="w-5 h-5" /> Email:
          </p>
          <p className="flex gap-1">
            <MapPinIcon className="w-5 h-5" /> Address:
          </p>
          <div>
            <button className="btn-primary !w-full">Apply Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetails;
