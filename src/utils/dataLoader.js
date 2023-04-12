import { getLocalStorageData } from "./localStorage";

const LoadAllData = async () => {
  const req = await fetch("/jobData.json");
  const data = await req.json();
  return data;
};

const loadSingleData = async ({ params }) => {
  const jobs = await LoadAllData();
  const getSavedJobs = getLocalStorageData();
  const isApplied = getSavedJobs[0]?.applied;
  const filteredJob = jobs.find((job) => job.id == params.jobId);
  return {filteredJob, isApplied};
};

const getAppliedJobs = async () => {
  const jobs = await LoadAllData();
  const getSavedJobs = getLocalStorageData();
  const appliedJobId = getSavedJobs[0]?.id;
  const jobApplied = jobs.filter((job) => appliedJobId?.includes(job.id));
  return jobApplied;
};

const filterJobs = async (params) => {
  const appliedJob = await getAppliedJobs();
  const filteredJobs = appliedJob.filter((job) =>
    job.jobLocation.includes(params)
  );
  return filteredJobs;
};
export { LoadAllData, loadSingleData, getAppliedJobs, filterJobs };
