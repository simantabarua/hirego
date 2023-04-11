import React from "react";

function Header() {
  return (
    <div className="flex flex-col gap-5 md:flex-row items-center justify-between py-10 px-5 md:px-24">
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
      <div className="md:w-1/2">
        <img
          className="w-full h-auto"
          src="https://via.placeholder.com/800x600"
          alt="Hero Image"
        />
      </div>
    </div>
  );
}

export default Header;
