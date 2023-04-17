import React from "react";
function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content mt-auto ">
      <div>
        <span className="footer-title text-4xl font-bold "> HireGo </span>
        <p className="w-full md:w-64 ">
          There are many variations of passages of Lorem Ipsum , but the
          majority have suffered alteration in some form.
        </p>
        <div className="flex gap-2 items-center">
          <img
            className="w-8"
            src="https://i.ibb.co/5kvL2h3/github.png"
            alt=""
          />
          <img
            className="w-8"
            src="https://i.ibb.co/qCC9DpP/linkedin.png"
            alt=""
          />
          <img
            className="w-8"
            src="https://i.ibb.co/R63DNq6/twitter.png"
            alt=""
          />
        </div>
        <p>&copy; Copy Right 2023</p>
      </div>
      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
}

export default Footer;
