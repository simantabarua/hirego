import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJobCard from "../components/AppliedJobCard";
import PageHeader from "../components/PageHeader";
import { filterJobs } from "../utils/dataLoader";

function AppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const jobs = useLoaderData();

  useEffect(() => {
    setAppliedJobs(jobs);
  }, []);

  const handleJobFilter = async (params) => {
    if (params === "all") {
      setAppliedJobs(jobs);
    } else {
      const filteredJob = await filterJobs(params);
      setAppliedJobs(filteredJob);
    }
  };
  return (
    <>
      <PageHeader title="Applied Jobs" />

      {jobs.length === 0 ? (
        <div className="flex justify-center items-center">
          <h2 className="font-bold text-5xl">No Applied Jobs Found</h2>
        </div>
      ) : (
        <div className=" md:px-32">
          <div className="flex justify-end lg:px-20">
            <div className="dropdown bg-">
              <label tabIndex={0} className="btn btn-ghost bg-gray-200 m-1">
                Filter By <ChevronDownIcon className="w-6 h-6" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a
                    onClick={() => {
                      handleJobFilter("all");
                    }}
                  >
                    All Jobs
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      handleJobFilter("onsite");
                    }}
                  >
                    Onsite
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => {
                      handleJobFilter("remote");
                    }}
                  >
                    Remote
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => {
                      handleJobFilter("hybrid");
                    }}
                  >
                    Hybrid
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {appliedJobs.length === 0 ? (
            <div>
              <p className="text-4xl text-center">No jobs found.</p>
            </div>
          ) : (
            appliedJobs.map((job) => <AppliedJobCard key={job.id} job={job} />)
          )}
        </div>
      )}
    </>
  );
}

export default AppliedJobs;
