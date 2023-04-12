import React, { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
export const JobDataContext = createContext([]);
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const jobs = useLoaderData();
  return (
    <>
      <ToastContainer/>
      <JobDataContext.Provider value={jobs}>
        <Layout />
      </JobDataContext.Provider>
    </>
  );
}

export default App;
