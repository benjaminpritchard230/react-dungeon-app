import { useState, useEffect } from "react";

const DungeonCard = ({ name, done, image, dungeons, setDungeons, dungeon }) => {
  const myStyle = {
    border: `${done ? "5px solid green" : "5px solid #2d4473"}`,
    backgroundImage: `url(${image})`,
  };

  const handleDoneClick = (dungeon) => {
    let tempArray = [...dungeons];
    const index = dungeons.findIndex(
      (element) => element.name === dungeon.name
    );
    console.log(tempArray[index]);
    tempArray[index].done = !tempArray[index].done;
    setDungeons(tempArray);
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div
        className="dungeon-card"
        style={myStyle}
        onClick={() => {
          handleDoneClick(dungeon);
        }}
      >
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default DungeonCard;
