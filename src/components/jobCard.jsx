import React from "react";

function jobCard() {
  return (
    <div className="card w-fit bg-base-100 shadow-xl px-5 h-full py-5 mx-5">
      <figure>
        <img
          className="rounded-lg shadow-md w-96 h-48 object-cover"
          src={image}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Feature</h2>
      </div>
    </div>
  );
}

export default jobCard;
