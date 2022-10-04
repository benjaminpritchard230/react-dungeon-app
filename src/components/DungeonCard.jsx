import { useState } from "react";

const DungeonCard = ({ name, done }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div
        className="dungeon-card"
        style={{
          border: "5px solid black",
        }}
      >
        <h3>{name}</h3>
        <p>{done ? "done" : "not done"}</p>
      </div>
    </div>
  );
};

export default DungeonCard;
