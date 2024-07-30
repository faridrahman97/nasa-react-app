import React from "react";

export default function Main({ data }) {
  return (
    <div className="image-container">
      <img
        className="background-image"
        src={data?.hdurl}
        alt={data?.title || "background image"}
      />
    </div>
  );
}
