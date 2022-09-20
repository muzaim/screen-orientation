import "./App.css";
import { cobaMiring } from "./script";

function App() {
  return (
    <div id="container">
      <p id="orientation-status"></p>
      <div id="buttons-container">
        <button id="lock-landscape-button" onClick={cobaMiring}>
          Click To Play
        </button>
        <button id="unlock-button">Unlock</button>
      </div>
    </div>
  );
}

export default App;
