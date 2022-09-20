import "./App.css";
import { cobaMiring } from "./script";
import DeviceOrientation, { Orientation } from "react-screen-orientation";
function App() {
  const ClickToMain = () => {
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
  };
  // return (
  //
  const UdahMain = () => {
    return (
      <div>
        <p>ini udah main</p>
        <p>ini udah main</p>
        <p>ini udah main</p>
        <p>ini udah main</p>
        <p>ini udah main</p>
        <p>ini udah main</p>
        <p>ini udah main</p>
      </div>
    );
  };
  // );
  return (
    <DeviceOrientation lockOrientation={"landscape"}>
      {/* Will only be in DOM in landscape */}
      <Orientation orientation="landscape" alwaysRender={false}>
        <div>
          <UdahMain />
        </div>
      </Orientation>
      {/* Will stay in DOM, but is only visible in portrait */}
      <Orientation orientation="portrait" alwaysRender={false}>
        <div>
          <ClickToMain />
        </div>
      </Orientation>
    </DeviceOrientation>
  );
}

export default App;
