const getLocalStorageData = () => {
    let appliedJob = [];
    const storedCart = localStorage.getItem("applied_jobs");
    if (storedCart) {
      appliedJob = JSON.parse(storedCart);
    }
    return appliedJob;
  };
  
  const saveToLocalStorage = (id) => {
    const appliedJob = getLocalStorageData();
    if (appliedJob.includes(id)) {
      return;
    }
    const newJob = [...appliedJob, id];
    localStorage.setItem("applied_jobs", JSON.stringify(newJob));
  };
  
  export {getLocalStorageData, saveToLocalStorage };
  