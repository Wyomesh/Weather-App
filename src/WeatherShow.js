import "./WeatherShow.css";
function WeatherShow({ temperature, humidity }) {
  return (
    <div className="WeatherShow">
      <p>
        It is currently {temperature} degrees out. There is {humidity}% humidity
      </p>
    </div>
  );
}
export default WeatherShow;
