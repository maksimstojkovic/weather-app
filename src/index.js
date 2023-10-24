import "./style.scss";
import { prependChild, appendChild } from "./helper";

const renderPage = () => {
  const body = document.querySelector("body");

  const container = prependChild(body, "div", "container");
  const content = appendChild(container, "div", "content");

  appendChild(content, "p", "title").textContent = "Sydney Temperature";
  const weather = appendChild(content, "div", "weather");
  appendChild(weather, "div", "loader");
  appendChild(weather, "div", "info");
};

const updateWeather = () => {
  const loader = document.querySelector(".loader");
  const info = document.querySelector(".info");

  fetch(
    "https://api.weatherapi.com/v1/current.json?q=Sydney&key=4726dd3ef25f4cf691f131949232410"
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      info.textContent = data.current.temp_c + "°C";
      loader.classList.add("hide");
    })
    .catch(() => {
      info.textContent = "API unavailable";
    });
};

renderPage();
updateWeather();
