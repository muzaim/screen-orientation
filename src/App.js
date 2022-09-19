import "./App.css";
// import "./script";
import screenfull from "screenfull";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (screenfull.isEnabled) {
      screenfull.request();
    }
  });
  return (
    <div className="App">
      <div id="container">
        <p id="orientation-status"></p>
        <div id="buttons-container">
          <button id="lock-landscape-button">Lock to Landscape Mode</button>
          <button id="unlock-button">Unlock</button>
        </div>
      </div>
    </div>
  );
}

export default App;
