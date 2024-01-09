import axios from "axios";
const searchWeather = async (term) => {
  const response = await axios.get(
    `http://api.weatherstack.com/current?access_key=242b89609b9f9dcb7810cd711fcdde03&query=${term}`
  );
  console.log(response);
  const temperature = response.data.current.temperature;
  const humidity = response.data.current.humidity;
  return { temperature, humidity };
};

export default searchWeather;
