import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { JobDataContext } from "../App";
import AppliedJobCard from "../components/AppliedJobCard";
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
      <div >
        {foundJobs.map((foundJob, index) => (
          <AppliedJobCard key={foundJob.id} job={foundJob} />
        ))}
      </div>
    </>
  );
}

export default AppliedJobs;
