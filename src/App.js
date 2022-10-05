import DungeonCard from "./components/DungeonCard";
import ProgressBar from "react-bootstrap/ProgressBar";
import ahnKahet from "C:/Users/bprit/react-dungeon-app/my-app/src/images/ahnkahet.jpg";
import azjolNerub from "C:/Users/bprit/react-dungeon-app/my-app/src/images/azjol-nerub.jpg";
import draktharonKeep from "C:/Users/bprit/react-dungeon-app/my-app/src/images/draktharon-keep.jpg";
import gundrak from "C:/Users/bprit/react-dungeon-app/my-app/src/images/gundrak.jpg";
import hol from "C:/Users/bprit/react-dungeon-app/my-app/src/images/halls-of-lightning.jpg";
import hos from "C:/Users/bprit/react-dungeon-app/my-app/src/images/halls-of-stone.jpg";
import nexus from "C:/Users/bprit/react-dungeon-app/my-app/src/images/nexus.webp";
import oculus from "C:/Users/bprit/react-dungeon-app/my-app/src/images/oculus.jpg";
import stratholme from "C:/Users/bprit/react-dungeon-app/my-app/src/images/stratholme.jpg";
import uk from "C:/Users/bprit/react-dungeon-app/my-app/src/images/utgarde-keep.webp";
import up from "C:/Users/bprit/react-dungeon-app/my-app/src/images/utgarde-pinnacle.webp";
import violetHold from "C:/Users/bprit/react-dungeon-app/my-app/src/images/violet-hold.jpg";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

function App() {
  const [dungeons, setDungeons] = useState([
    {
      name: "Azjol-Nerub",
      done: false,
      image: { src: azjolNerub },
    },
    {
      name: "Stratholme",
      done: false,
      image: { src: stratholme },
    },
    {
      name: "Gundrak",
      done: false,
      image: { src: gundrak },
    },
    {
      name: "Drak'Tharon Keep",
      done: false,
      image: { src: draktharonKeep },
    },
    {
      name: "Utgarde Pinnacle",
      done: false,
      image: { src: up },
    },
    {
      name: "Ahn'Kahet",
      done: false,
      image: { src: ahnKahet },
    },
    {
      name: "Violet Hold",
      done: false,
      image: { src: violetHold },
    },
    {
      name: "Utgarde Keep",
      done: false,
      image: { src: uk },
    },
    {
      name: "The Oculus",
      done: false,
      image: { src: oculus },
    },
    {
      name: "Halls of Lightning",
      done: false,
      image: { src: hol },
    },
    {
      name: "Halls of Stone",
      done: false,
      image: { src: hos },
    },
    {
      name: "The Nexus",
      done: false,
      image: { src: nexus },
    },
  ]);

  const [count, setCount] = useState(0);

  const displayDungeons = dungeons.map((obj, i) => {
    return (
      <DungeonCard
        dungeon={obj}
        name={obj.name}
        done={obj.done}
        image={obj.image.src}
        key={i}
        dungeons={dungeons}
        setDungeons={setDungeons}
      />
    );
  });

  useEffect(() => {
    setCount(dungeons.filter((obj) => obj.done === true).length);
  }, [dungeons]);

  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center p-3">
            <h2>WotLK Heroic Dungeons</h2>
          </div>
        </div>
        <div className="row">
          <div className="col pb-4">
            <ProgressBar now={(count / 12) * 100} />
          </div>
        </div>
        <div className="row dungeons-row">{displayDungeons}</div>
      </div>
    </div>
  );
}

export default App;
