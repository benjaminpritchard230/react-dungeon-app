import logo from "./logo.svg";
import DungeonCard from "./components/DungeonCard";
import ProgressBar from "react-bootstrap/ProgressBar";

function App() {
  const dungeons = [
    {
      name: "Azjol-Nerub",
      done: false,
    },
    {
      name: "Stratholme",
      done: false,
    },
    {
      name: "Gundrak",
      done: false,
    },
    {
      name: "Drak'Tharon Keep",
      done: false,
    },
    {
      name: "Utgarde Pinnacle",
      done: false,
    },
    {
      name: "Ahn'Kahet",
      done: false,
    },
    {
      name: "Violet Hold",
      done: false,
    },
    {
      name: "Utgarde Keep",
      done: false,
    },
    {
      name: "The Oculus",
      done: false,
    },
    {
      name: "Halls of Lightning",
      done: false,
    },
    {
      name: "Halls of Stone",
      done: false,
    },
    {
      name: "The Nexus",
      done: false,
    },
  ];

  // const dungeons = [
  //   {
  //     name: "Azjol Nerub",
  //     image:
  //       "https://www.almarsguides.com/AlmarsImages/Computer/Games/WoW/Instances/AzjolNerub/AzjolNerub%201.jpg",
  //   },
  // ];

  const displayDungeons = dungeons.map((obj, i) => {
    return <DungeonCard name={obj.name} done={obj.done} key={i} />;
  });

  return (
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center p-3">
            <h2>WotLK Heroic Dungeons</h2>
          </div>
        </div>
        <div className="row p-3">
          <div className="col">
            <ProgressBar now={70} />
          </div>
        </div>
        <div className="row dungeons-row">{displayDungeons}</div>
      </div>
    </div>
  );
}

export default App;
