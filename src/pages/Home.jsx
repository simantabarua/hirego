import React, { useContext } from "react";
import Category from "../components/Category";
import FeaturedJobs from "../components/FeaturedJobs";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <Header />
      <div className="flex items-center flex-col">
        <Category />
        <FeaturedJobs />
      </div>
    </>
  );
}

export default Home;
