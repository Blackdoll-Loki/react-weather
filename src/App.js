import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div>
      <div className="App">
        <SearchEngine />
      </div>
      <footer>
        <p>
          <a
            href="https://github.com/Blackdoll-Loki/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            Open source-code
          </a>{" "}
          by Daria
        </p>
      </footer>
    </div>
  );
}

export default App;
