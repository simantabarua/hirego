const LoadAllData = async () => {
  const req = await fetch("/jobData.json");
  const data = await req.json();
  return data;
};

const loadSingleData = async ({ params }) => {
  const jobs = await LoadAllData();
  const filteredJob = jobs.find((job) => job.id == params.jobId);
  return filteredJob;
};

export { LoadAllData, loadSingleData };
