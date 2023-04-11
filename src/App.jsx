import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
export const JobDataContext = createContext([]);

function App() {
  const jobs = useLoaderData();
  return (
    <>
      <JobDataContext.Provider value={jobs}>
        <Layout />
      </JobDataContext.Provider>
    </>
  );
}

export default App;
