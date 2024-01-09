import "./App.css";
import SearchBar from "./SearchBar";
import searchWeather from "./Api";
import WeatherShow from "./WeatherShow";
import { useState } from "react";
function App() {
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [show, setShow] = useState(false);
  const handleSubmit = async (term) => {
    const response = await searchWeather(term);
    setTemperature(response.temperature);
    setHumidity(response.humidity);
    setShow(true);
  };
  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      {show && <WeatherShow temperature={temperature} humidity={humidity} />}
      <div className="footer">
        <p>Created by Wyomesh Chandra Diwakar</p>
      </div>
    </div>
  );
}
export default App;
