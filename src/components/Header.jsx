import React from "react";
import Lottie from 'lottie-react'
import Comp from "../assets/Comp.json"

function Header() {
  return (
    <div className="flex flex-col gap-5 md:flex-row items-center justify-between py-10 px-5 md:px-24 ">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          One Step <br /> Closer To Your <br />{" "}
          <span className="active"> Dream Job</span>
        </h1>
        <p className="text-lg md:text-xl mb-10">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="btn-primary">Get Started</button>
      </div>
      <div className="relative lg:w-1/2 ">
        <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
        <Lottie animationData={Comp} loop={true} />
        </div>
      </div>
    </div>
  );
}

export default Header;
