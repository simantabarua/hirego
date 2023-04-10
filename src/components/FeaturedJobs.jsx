import React from "react";
import SectionHeader from "./SectionHeader";

function FeaturedJobs() {
  return (
    <>
      <SectionHeader
        title="Featured Jobs"
        subtitle="Explore thousands of job opportunities with all the information you need. Its your future"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="card w-fit bg-base-100 shadow-xl px-5 h-full py-5 mx-5">
          <figure>
            <img
              className="rounded-lg shadow-md w-20 h-10 object-cover"
              src=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Technical Database Engineer</h2>
            <p>google</p>
            <div>
              <button className="btn">job</button>
              <button className="btn">job</button>
            </div>
            <div>Dhaka</div>
            <button className="btn-primary">View Details</button>
          </div>
        </div>
        <div className="card w-fit bg-base-100 shadow-xl px-5 h-full py-5 mx-5">
          <figure>
            <img
              className="rounded-lg shadow-md w-20 h-10 object-cover"
              src=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Technical Database Engineer</h2>
            <p>google</p>
            <div>
              <button className="btn">job</button>
              <button className="btn">job</button>
            </div>
            <div>Dhaka</div>
            <button className="btn-primary">View Details</button>
          </div>
        </div>
        <div className="card w-fit bg-base-100 shadow-xl px-5 h-full py-5 mx-5">
          <figure>
            <img
              className="rounded-lg shadow-md w-20 h-10 object-cover"
              src=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Technical Database Engineer</h2>
            <p>google</p>
            <div>
              <button className="btn">job</button>
              <button className="btn">job</button>
            </div>
            <div>Dhaka</div>
            <button className="btn-primary">View Details</button>
          </div>
        </div>
        <div className="card w-fit bg-base-100 shadow-xl px-5 h-full py-5 mx-5">
          <figure>
            <img
              className="rounded-lg shadow-md w-20 h-10 object-cover"
              src=""
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Technical Database Engineer</h2>
            <p>google</p>
            <div>
              <button className="btn">job</button>
              <button className="btn">job</button>
            </div>
            <div>Dhaka</div>
            <button className="btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedJobs;
