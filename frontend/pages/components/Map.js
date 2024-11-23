"use client";
import React from "react";

const Map = ({ locations }) => {
  return (
    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
      <p>Map showing: {locations.join(", ")}</p>
    </div>
  );
};

export default Map;
