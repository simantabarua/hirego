import React, { useContext, useState } from "react";
import { JobDataContext } from "../App";
import JobCard from "./JobCard";
import SectionHeader from "./SectionHeader";

function FeaturedJobs() {
  const jobs = useContext(JobDataContext || []);
  const [showAllJobs, setShowAllJobs] = useState(false);
  const jobsToDisplay = showAllJobs ? jobs : jobs.slice(0, 4);

  const handleShowAllJobs = () => {
    setShowAllJobs(true);
  };
 

  return (
    <>
      <SectionHeader
        title="Featured Jobs"
        subtitle="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-6">
        {jobsToDisplay.map((job) => (
          <JobCard key={job.id} job={job}  />
        ))}
      </div>
      {!showAllJobs && (
        <button className="btn-primary my-5" onClick={handleShowAllJobs}>
          See more
        </button>
      )}
    </>
  );
}

export default FeaturedJobs;
