import logo from "./logo.svg";
import "./App.css";

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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
