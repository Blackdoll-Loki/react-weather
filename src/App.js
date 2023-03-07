import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <footer>
        <p>
          <a
            href="https://github.com/Blackdoll-Loki/react-weather"
            target="_blank"
          >
            Open source-code
          </a>
          by Daria
        </p>
      </footer>
    </div>
  );
}

export default App;
