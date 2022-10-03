import { useState } from "react";

const DungeonCard = ({ name, image }) => {
  const [done, setDone] = useState(false);

  return (
    <div
      class="col-lg-4 col-md-6 col-sm-12 mb-4"
      onClick={() => {
        setDone(!done);
      }}
    >
      <div
        class="dungeon-card"
        style={
          !done ? { border: "5px solid black" } : { border: "5px solid green" }
        }
      >
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default DungeonCard;
