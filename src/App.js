import logo from "./logo.svg";
import DungeonCard from "./components/DungeonCard";

function App() {
  const dungeons = [
    {
      name: "Azjol-Nerub",
    },
    {
      name: "Stratholme",
    },
    {
      name: "Gundrak",
    },
    {
      name: "Drak'Tharon Keep",
    },
    {
      name: "Utgarde Pinnacle",
    },
    {
      name: "Ahn'Kahet",
    },
    {
      name: "Violet Hold",
    },
    {
      name: "Utgarde Keep",
    },
    {
      name: "The Oculus",
    },
    {
      name: "Halls of Lightning",
    },
    {
      name: "Halls of Stone",
    },
    {
      name: "The Nexus",
    },
  ];

  const displayDungeons = dungeons.map((obj, i) => {
    return <DungeonCard name={obj.name} key={i} />;
  });

  return (
    <div class="app">
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex justify-content-center p-3">
            <h2>WotLK Heroic Dungeons</h2>
          </div>
        </div>
        <div class="row dungeons-row">{displayDungeons}</div>
      </div>
    </div>
  );
}

export default App;
