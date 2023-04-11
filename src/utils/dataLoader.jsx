const dataLoader = async () => {
    const req = await fetch("jobData.json");
    const data = await req.json();
    return data;
  };
  
  export { dataLoader };
  