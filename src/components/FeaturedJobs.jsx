import React, { useContext } from "react";
import { JobDataContext } from "../App";
import JobCard from "./JobCard";
import SectionHeader from "./SectionHeader";

function FeaturedJobs() {
  const jobs = useContext(JobDataContext || []);
  return (
    <>
      <SectionHeader
        title="Featured Jobs"
        subtitle="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}

export default FeaturedJobs;
