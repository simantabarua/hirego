import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import PageHeader from "../components/PageHeader";
import { useLoaderData } from "react-router-dom";
import { getLocalStorageData, saveToLocalStorage } from "../utils/localStorage";
import { toast } from "react-toastify";

function JobDetails() {
  const jobs = useLoaderData();
  const {
    id,
    title,
    location,
    jobDescription,
    responsibilities,
    experiences,
    educationRequirements,
    salary,
    contactInfo,
  } = jobs;

  const handleAppliedJobs = (id) => {
    const isExist = getLocalStorageData();
    if (isExist.includes(id)) {
      toast("Job Already Applied");
    } else {
      saveToLocalStorage(id);
      toast("Job Applied success");
    }
  };

  return (
    <>
      <PageHeader
        title="Jobs Details
      "
      />
      <div className="grid grid-cols-1 md:grid-cols-3 px-20 mx-auto mb-5 md:mb-20">
        <div className="col-span-2 flex flex-col gap-5 p-5">
          <div>
            <h2>
              <span className="font-bold">Job Description:</span>
              {jobDescription}
            </h2>
          </div>
          <div>
            <h2>
              <span className="font-bold">Job Responsibility:</span>
              {responsibilities}
            </h2>
          </div>
          <div>
            <h2>
              <span className="font-bold">Educational Requirements:</span>
              <br /> {educationRequirements}
            </h2>
          </div>
          <div>
            <h2>
              <span className="font-bold">Experiences:</span> <br />
              {experiences}
            </h2>
          </div>
        </div>
        <div className="bg-purple-50 flex flex-col gap-2 font-medium p-5">
          <h2 className="text-xl">Job Details</h2>
          <hr className="bg-purple-300 h-[1px]" />
          <p className="flex gap-1">
            <CurrencyDollarIcon className="w-5 h-5" />
            Salary: {salary}
          </p>
          <p className="flex gap-1">
            <CalendarIcon className="w-5 h-5" /> Job Title: {title}
          </p>
          <h2 className="text-xl mt-4">Contact Information:</h2>
          <hr />
          <p className="flex gap-1">
            <PhoneIcon className="w-5 h-5" /> Phone: {contactInfo.phone}
          </p>
          <p className="flex gap-1">
            <EnvelopeIcon className="w-5 h-5" /> Email: {contactInfo.email}
          </p>
          <p className="flex gap-1">
            <MapPinIcon className="w-5 h-5" /> Address: {location}
          </p>
          <div>
            <button
              onClick={() => {
                handleAppliedJobs(id);
              }}
              className="btn-primary !w-full"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetails;
