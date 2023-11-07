import { useState } from "react";
import "./App.css";
import AppBarComponent from "./Components/AppBarComponent";
import Dashboard from "./Components/Dashboard";
import OnlineMode from "./Components/OnlineMode";
import MasterVolume from "./Components/MasterVolume";
import SoundQuality from "./Components/SoundQuality";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [volume, setVolume] = useState(30);
  const [soundQuality, setSoundQuality] = useState(2);
  return (
    <div className="App">
      <AppBarComponent />

      {isLoggedIn ? (
        <div className="display-area">
          <h1 sx={{ display: "block" }}>Welcome User!</h1>
          <div className="dashboard">
            <OnlineMode className="box-component" isOnline={isOnline} setIsOnline={setIsOnline} />
            <MasterVolume className="box-component" volume={volume} setVolume={setVolume} />
            <SoundQuality className="box-component" soundQuality={soundQuality} setSoundQuality={setSoundQuality} />
          </div>
        </div>
      ) : (
        <Dashboard setLoggedIn={setLoggedIn} />
      )}
      
      <div className="notification-section">
        {isLoggedIn && <h2>System Notifications</h2>}
        {isLoggedIn && !isOnline && (
          <p>
            Your application is offline. You won't be able to share or stream
            music to other devices.
          </p>
        )}
        {isLoggedIn && volume >= 80 && (
          <p>
            Listening to music at a high volume could cause long-term hearing
            loss.
          </p>
        )}
        {soundQuality < 2 && (
          <p>
            Music quality is degraded. Increase quality if your connection
            allows it.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;