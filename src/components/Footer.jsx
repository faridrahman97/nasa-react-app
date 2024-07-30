import React from "react";

export default function Footer({ handleShowModal, data }) {
  return (
    <footer>
      <div className="bg-gradient-class"></div>
      <div>
        {/* Checking if the data exists with the optional parameter then accessing the title */}
        <h2>{data?.title}</h2>
        <h1>APOD PROJECT</h1>
      </div>
      <button className="btn" onClick={handleShowModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
