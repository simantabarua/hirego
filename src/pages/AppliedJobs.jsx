import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { JobDataContext } from "../App";
import JobCard from "../components/JobCard";
import PageHeader from "../components/PageHeader";
import { getLocalStorageData } from "../utils/localStorage";

function AppliedJobs() {
  const jobs = useContext(JobDataContext);
  const appliedJobs = getLocalStorageData();
  const foundJobs = jobs.filter((job) => appliedJobs.includes(job.id));

  return (
    <>
      <PageHeader title="Applied Jobs" />
      <div className="grid">
        {foundJobs.map((foundJob, index) => (
          <JobCard  key={foundJob.id} job={foundJob} />
        ))}
      </div>
    </>
  );
}

export default AppliedJobs;
