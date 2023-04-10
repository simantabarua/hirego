import React from "react";
import Category from "./Category";
import FeaturedJobs from "./FeaturedJobs";
import Header from "./Header";
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
