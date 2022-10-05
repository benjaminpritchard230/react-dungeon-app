import { useState } from "react";

const DungeonCard = ({ name, done, image }) => {
  const myStyle = {
    border: `${done ? "5px solid green" : "none"}`,
    backgroundImage: `url(${image})`,
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="dungeon-card" style={myStyle}>
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default DungeonCard;
