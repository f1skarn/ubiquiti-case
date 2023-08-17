import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDevices } from './services/devices';
import { IDevices } from './utils/dto/dtos';
import { Devices } from './pages/devices';
import { Device } from './pages/device';
import TopBar from './components/topbar/topbar';

function App() {
  const [devicesData, setDevicesData] = useState<IDevices[] | undefined>(
    undefined
  );

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getDevices()
      .then((data) => setDevicesData(data.devices))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
      <TopBar />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/devices" />} />
          <Route
            path="/devices"
            element={<Devices data={devicesData} isLoading={isLoading} />}
          />
          <Route
            path="/devices/device/:deviceId"
            element={<Device data={devicesData} isLoading={isLoading} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
