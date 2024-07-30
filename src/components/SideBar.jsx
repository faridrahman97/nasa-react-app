import React from "react";

export default function SideBar({ handleShowModal, data }) {
  return (
    <div className="sidebar">
      <div className="bg-overlay"></div>
      <div className="sidebar-contents">
        <h2>{data?.title}</h2>
        <div>
          <div className="description-container">
            <p className="description-title">{data?.date}</p>
            <p className="description-explanation">{data?.explanation}</p>
          </div>
        </div>
        <button className="btn" onClick={handleShowModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
