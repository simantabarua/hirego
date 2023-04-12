const getLocalStorageData = () => {
    let appliedJob = [];
    const isExist = localStorage.getItem("applied_jobs");
    if (isExist) {
      appliedJob = JSON.parse(isExist);
    }
    return appliedJob;
  };
  
  const saveToLocalStorage = (id) => {
    const appliedJob = getLocalStorageData();
    if (appliedJob.includes(id)) {
      return;
    }
    const updatedJobs = [...appliedJob, id];
    localStorage.setItem("applied_jobs", JSON.stringify(updatedJobs));
  };
  
  export {getLocalStorageData, saveToLocalStorage };
  